import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

export default function HeroSection({
  badge = "✨ 5,000+ Successful Adoptions",
  title = "Find Your",
  highlight = "Dream Pet",
  description = "Discover loving pets waiting for a caring home.",
  image = "https://images.unsplash.com/photo-1505628346881-b72b27e84530?",
  primaryBtn = "Adopt Now",
  secondaryBtn = "List a Pet",
}) {
  return (
    <section className="relative overflow-hidden bg-gray-100 text-black transition-colors duration-300 dark:bg-[#0B1120] dark:text-white">
      <div className="absolute left-25 top-25 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse duration-[8s]"></div>

      <div className="absolute -bottom-30 -right-30 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse duration-[10s]"></div>

      <div className="container mx-auto grid min-h-screen items-center gap-14 px-2 py-14 md:px-10 lg:grid-cols-2 lg:py-20">
        <div className="space-y-6 text-center lg:text-left animate-fade-in-right animate-duration-1000">
          <Chip
            variant="flat"
            className="
              border border-pink-400/30
              bg-pink-500/10
              px-4 py-5
              text-pink-600
              dark:text-pink-300
            "
          >
            {badge}
          </Chip>

          <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            {title}{" "}
            <span className="bg-linear-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
            {description}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              radius="full"
              size="lg"
              className="w-full bg-linear-to-r from-pink-500 to-orange-400 font-semibold text-white shadow-lg sm:w-auto transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              {primaryBtn}
            </Button>

            <Button
              radius="full"
              size="lg"
              variant="bordered"
              className="
                w-full
                border-gray-300
                bg-white/70
                text-black
                backdrop-blur-md
                sm:w-auto
                dark:border-white/20
                dark:bg-white/5
                dark:text-white
                transition-transform duration-300 hover:scale-105 active:scale-95
              "
            >
              {secondaryBtn}
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-sm text-gray-600 dark:text-gray-300 lg:justify-start">
            <div className="flex items-center gap-2 transition-transform hover:scale-105">
              🐾 Easy Adoption
            </div>
            <div className="flex items-center gap-2 transition-transform hover:scale-105">
              ✔ Verified Listings
            </div>
            <div className="flex items-center gap-2 transition-transform hover:scale-105">
              ❤️ Safe Platform
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-md sm:max-w-lg lg:mt-0 animate-fade-in-left animate-duration-1000">
          <Card
            className="
              border border-gray-200
              bg-white/70
              p-2
              shadow-xl
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/5
              sm:p-3
              transition-transform duration-500 hover:scale-[1.02]
            "
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                width={300}
                height={300}
                src={image}
                alt="Hero"
                className="h-87 w-full rounded-3xl object-cover sm:h-112 lg:h-137 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Card>

          <Card
            className="
              absolute -left-14 -top-10
              -rotate-6 w-max min-w-45 sm:min-w-60 shrink-0
              bg-white/90 text-black shadow-2xl backdrop-blur-md
              dark:bg-[#111827]/90 dark:text-white
              animate-appearance-in animate-delay-300 animate-duration-700
              hover:-translate-y-1 transition-all duration-300
              rounded-2xl border border-gray-200 dark:border-white/10
            "
          >
            <div className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                <Image
                  fill
                  src="https://i.pravatar.cc/50"
                  alt="avatar"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold sm:text-base leading-tight">
                  Bella
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap mt-0.5">
                  Looking for a new home
                </p>
              </div>
            </div>
          </Card>

          <Card
            className="
              absolute -bottom-6 right-0 
              bg-linear-to-r from-pink-500 to-orange-400 
              text-white shadow-2xl sm:-right-4
              animate-appearance-in animate-delay-500 animate-duration-700
              hover:-translate-y-1 transition-transform duration-300
            "
          >
            <div className="px-4 py-3 sm:px-6 sm:py-5">
              <p className="text-xs text-white/80 sm:text-sm">Available Pets</p>
              <h2 className="text-2xl font-bold sm:text-3xl">2,450+</h2>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
