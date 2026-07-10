import About from "./components/about/about";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
    </>
  );
}
