import { BackgroundBeams } from "../ui/BackgroundBeams";

export function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center rounded-md bg-neutral-950 antialiased">
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center font-sans text-5xl font-bold text-transparent md:text-7xl">
          Allan Somensi
        </h1>
        <p></p>
        <h2 className="relative z-10 bg-gradient-to-b from-neutral-400 to-neutral-500 bg-clip-text text-center text-lg font-normal text-transparent md:text-2xl">
          Back-end Developer
        </h2>
      </div>
      <BackgroundBeams />
    </div>
  );
}
