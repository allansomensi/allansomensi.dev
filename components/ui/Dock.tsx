"use client";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/FloatingDock";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/allansomensi",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin/in/allansomensi",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/allanrsomensi",
    },
  ];
  return (
    <div className="fixed right-5 bottom-5 z-50 md:right-0 md:bottom-10 md:left-0 md:flex md:justify-center">
      <FloatingDock items={links} />
    </div>
  );
}
