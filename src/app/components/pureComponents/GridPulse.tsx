"use client";

import { useEffect, useRef } from "react";

export default function Aurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const blobs = [
      {
        x: 0.2,
        y: 0.3,
        r: 0.45,
        speedX: 0.00012,
        speedY: 0.00008,
        color: "79,142,247",
      },
      {
        x: 0.7,
        y: 0.6,
        r: 0.5,
        speedX: -0.0001,
        speedY: 0.00012,
        color: "99,102,241",
      },
      {
        x: 0.5,
        y: 0.1,
        r: 0.4,
        speedX: 0.00008,
        speedY: 0.00015,
        color: "59,130,246",
      },
      {
        x: 0.8,
        y: 0.2,
        r: 0.35,
        speedX: -0.00013,
        speedY: -0.0001,
        color: "139,92,246",
      },
    ];

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const blob of blobs) {
        const x =
          (blob.x + Math.sin(time * blob.speedX * 100) * 0.15) * canvas.width;
        const y =
          (blob.y + Math.cos(time * blob.speedY * 100) * 0.15) * canvas.height;
        const r = blob.r * Math.max(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, `rgba(${blob.color},0.12)`);
        gradient.addColorStop(0.5, `rgba(${blob.color},0.05)`);
        gradient.addColorStop(1, `rgba(${blob.color},0)`);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
