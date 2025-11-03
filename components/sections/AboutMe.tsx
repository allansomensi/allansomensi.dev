import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandRust,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandGit,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section id="about" className="mb-30 w-full">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex w-full flex-col items-center gap-10 rounded-3xl p-8 shadow-2xl sm:p-12 md:flex-row">
          <Image
            src="/profile.png"
            alt="Profile"
            width={192}
            height={192}
            className="h-36 w-36 flex-shrink-0 rounded-full object-cover shadow-lg md:h-48 md:w-48"
          />

          <div className="flex h-full w-full flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl font-bold text-neutral-100 sm:text-4xl">
              Allan Somensi
            </h2>
            <h3 className="mt-1 text-lg font-medium text-neutral-400 sm:text-xl">
              Software Developer
            </h3>

            <div className="mt-4 flex items-center justify-center gap-4 text-neutral-300 md:justify-start">
              <IconBrandRust size={28} />
              <IconBrandTypescript size={28} />
              <IconBrandReact size={28} />
              <IconBrandTailwind size={28} />
              <IconBrandGit size={28} />
            </div>

            <h4 className="mt-6 text-2xl font-semibold text-neutral-100 sm:mt-8">
              Bio
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400 sm:text-base">
              Developer in training, passionate about technology and focused on
              staying current with the latest trends.
            </p>

            <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-6 md:justify-start">
              <div className="flex items-center justify-center gap-6 md:justify-start">
                <Link
                  href="https://github.com/allansomensi"
                  target="_blank"
                  className="text-neutral-300 transition-colors duration-200 hover:text-neutral-50"
                  aria-label="GitHub Profile"
                >
                  <IconBrandGithub size={30} />
                </Link>
                <Link
                  href="https://linkedin.com/in/allansomensi"
                  target="_blank"
                  className="text-neutral-300 transition-colors duration-200 hover:text-neutral-50"
                  aria-label="LinkedIn Profile"
                >
                  <IconBrandLinkedin size={30} />
                </Link>
                <Link
                  href="https://instagram.com/allanrsomensi"
                  target="_blank"
                  className="text-neutral-300 transition-colors duration-200 hover:text-neutral-50"
                  aria-label="Instagram Profile"
                >
                  <IconBrandInstagram size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
