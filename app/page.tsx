import About from "@/components/About";
import Hero from "@/components/Hero";
import ToolSection from "@/components/ToolSection";
import Projects from "../components/Projects";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <ToolSection />
        <Projects />
        <Cta />
      </div>
    </main>
  );
}
