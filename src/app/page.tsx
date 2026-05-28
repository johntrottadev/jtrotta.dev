import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Press from "@/components/Press";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import MyStack from "@/components/MyStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Press />
        <Skills />
        <Certifications />
        <Education />
        <Projects />
        <MyStack />
      </main>
      <Contact />
    </>
  );
}
