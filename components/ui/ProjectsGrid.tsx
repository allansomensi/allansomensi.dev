"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[700px] flex-col overflow-hidden bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div className="relative h-80 w-full sm:rounded-tl-lg sm:rounded-tr-lg">
                  <Image
                    src={active.src}
                    alt={active.title}
                    fill
                    className="object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg"
                  />
                </div>
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-base font-medium text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-base text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="rounded-full bg-neutral-500 px-4 py-3 text-sm font-bold text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-400 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="flex cursor-pointer flex-col rounded-xl p-4 hover:bg-neutral-800"
          >
            <div className="flex w-full flex-col gap-4">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <div className="relative h-60 w-full rounded-lg">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="rounded-lg object-cover object-top"
                  />
                </div>
              </motion.div>
              <div className="flex flex-col items-center justify-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-center text-base font-medium text-neutral-200 md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-base text-neutral-400 md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Portfolio Website",
    description: "Website in Next.js",
    src: "/projects/allansomensi-dev.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/allansomensi/allansomensi.dev",
    content: () => {
      return (
        <p>
          The website you are accessing! :) <br />
          Created with Next.js using Aceternity UI with Tailwind CSS for
          styling.
        </p>
      );
    },
  },
  {
    title: "Tickify Web",
    description: "Front-end in Next.js",
    src: "/projects/tickify-web.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/allansomensi/tickify-web",
    content: () => {
      return <p>Next.js frontend that consumes the tickify-api backend.</p>;
    },
  },
  {
    title: "ESP BTTF CLOCK RS",
    description: "ESP32 Clock",
    src: "/projects/esp-bttf-clock-rs.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/allansomensi/esp-bttf-clock-rs",
    content: () => {
      return (
        <p>
          A clock/lamp built with ESP32, using Rust and the esp-idf framework.
          <br />
          It connects to Wi-Fi to synchronize time via SNTP.
        </p>
      );
    },
  },
  {
    title: "Zugzwang",
    description: "2D Chess in Rust",
    src: "/projects/zugzwang.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/allansomensi/zugzwang",
    content: () => {
      return (
        <p>
          A minimalist cross-platform chess game developed in Rust using
          macroquad.
        </p>
      );
    },
  },
  {
    title: "Easy Ticket",
    description: "API in Django",
    src: "/projects/easy-ticket.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/allansomensi/easy-ticket",
    content: () => {
      return (
        <p>
          Support ticket API using Django (Django Rest Framework), JWT
          authentication, custom user groups and permissions.
        </p>
      );
    },
  },
  {
    title: "Brother SNMP",
    description: "CLI in Python",
    src: "/projects/brother-snmp.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/allansomensi/brother-snmp",
    content: () => {
      return (
        <p>
          Project for querying resources on Brother printers using the SNMP
          protocol.
        </p>
      );
    },
  },
];
