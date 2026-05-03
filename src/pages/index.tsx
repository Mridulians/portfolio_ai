import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { ValueProp } from "@/components/portfolio/ValueProp";
import { Projects } from "@/components/portfolio/Projects";
import { Glimpses } from "@/components/portfolio/Glimpses";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ValueProp />
      <Projects />
      <Glimpses />
      <Skills />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;