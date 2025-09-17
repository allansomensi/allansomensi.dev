"use client";
import dynamic from "next/dynamic";
import { TypewriterEffect } from "../ui/Typewriter";
import { ProjectsGrid } from "../ui/ProjectsGrid";

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

  const words = [
    {
      text: "Bringing",
    },
    {
      text: "ideas",
      className: "text-blue-500",
    },
    {
      text: "to",
    },
    {
      text: "life",
    },
    {
      text: "with",
    },
    {
      text: "Code",
      className: "text-blue-500",
    },
  ];
  return (
    <div
      id="projects"
      className="w-full bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-950 py-20"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-4xl leading-tight font-bold text-white md:text-5xl md:leading-tight">
          <TypewriterEffect words={words} />
        </h2>
        <AnimatedProjects projects={projects} autoplay />
      </div>
      <ProjectsGrid />
    </div>
  );
}
