import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
    </>
  );
}
