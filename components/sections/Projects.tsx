"use client";
import dynamic from "next/dynamic";
import { ProjectsGrid } from "../ui/ProjectsGrid";
import { LayoutTextFlip } from "../ui/LayoutTextFlip";
import { motion } from "motion/react";

const AnimatedProjects = dynamic(
  () =>
    import("@/components/ui/AnimatedProjects").then(
      (mod) => mod.AnimatedProjects,
    ),
  { ssr: false },
);

export function Projects() {
  const projects = [
    {
      title: "Inkcheck",
      subtitle: "CLI in Rust",
      description:
        "A CLI tool to quickly check printer supplies status via SNMP. Made with Rust.",
      src: "/projects/inkcheck.png",
    },
    {
      title: "Tickify API",
      subtitle: "API in Rust",
      description:
        "A simple API for managing support tickets, with JWT authentication. Made in Rust with Axum.",
      src: "/projects/tickify-api.png",
    },
    {
      title: "Printer Supplies API",
      subtitle: "API in Rust",
      description:
        "A simple REST API using Axum for managing printer supplies, such as toners and drums.",
      src: "/projects/printer-supplies-api.png",
    },
  ];

  return (
    <div
      id="projects"
      className="w-full bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-950 py-20"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <div>
          <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
              text="Building Better"
              words={["Software", "Systems", "Solutions"]}
            />
          </motion.div>
          <p className="mt-4 text-center text-base text-neutral-400">
            A showcase of my open-source projects grounded in the principles of
            modern, scalable, and semantic software development for robust and
            maintainable results.
          </p>
        </div>
        <AnimatedProjects projects={projects} autoplay />
      </div>
      <ProjectsGrid />
    </div>
  );
}
