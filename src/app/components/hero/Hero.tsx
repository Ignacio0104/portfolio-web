import Image from "next/image";
import HeroContent from "../pureComponents/HeroContent";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center pt-10 px-8 overflow-hidden max-sm:px-5">
      {/* Radial glow */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 65%)",
        }}
      />

      <HeroContent />
    </section>
  );
}
