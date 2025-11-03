import AboutMe from "@/components/sections/AboutMe";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <AboutMe />
    </main>
  );
}
