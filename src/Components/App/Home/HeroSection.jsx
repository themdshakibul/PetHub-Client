import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

export default function HeroSection({
  badge = "✨ 5,000+ Successful Adoptions",
  title = "Find Your",
  highlight = "Dream Pet",
  description = "Discover loving pets waiting for a caring home.",
  image = "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
  primaryBtn = "Adopt Now",
  secondaryBtn = "List a Pet",
}) {
  return (
    <section className="relative overflow-hidden bg-gray-100 text-black transition-colors duration-300 dark:bg-[#0B1120] dark:text-white">
      {/* Blur Effects */}
      <div className="absolute left-25 top-25 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"></div>

      <div className="absolute -bottom-30 -right-30 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="container mx-auto grid min-h-screen items-center gap-14 px-2 py-14  md:px-10 lg:grid-cols-2 lg:py-20">
        {/* Left Side */}
        <div className="space-y-6 text-center lg:text-left">
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

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              radius="full"
              size="lg"
              className="w-full bg-linear-to-r from-pink-500 to-orange-400 font-semibold text-white shadow-lg sm:w-auto"
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
              "
            >
              {secondaryBtn}
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-sm text-gray-600 dark:text-gray-300 lg:justify-start">
            <div className="flex items-center gap-2">🐾 Easy Adoption</div>

            <div className="flex items-center gap-2">✔ Verified Listings</div>

            <div className="flex items-center gap-2">❤️ Safe Platform</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative mx-auto mt-10 w-full max-w-md sm:max-w-lg lg:mt-0">
          {/* Main Card */}
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
            "
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                width={300}
                height={300}
                src={image}
                alt="Hero"
                className="h-87 w-full rounded-3xl object-cover sm:h-112 lg:h-137"
              />
            </div>
          </Card>

          {/* Floating Card */}
          <Card
            className="
              absolute left-0 top-6 w-44
              bg-white text-black shadow-2xl
              dark:bg-[#111827]
              dark:text-white
              sm:-left-8 sm:top-10 sm:w-60
            "
          >
            <div className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4">
              <Image
                width={300}
                height={300}
                src="https://i.pravatar.cc/50"
                alt="avatar"
                className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
              />

              <div>
                <h4 className="text-sm font-semibold sm:text-base">Bella</h4>

                <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                  Looking for a new home
                </p>
              </div>
            </div>
          </Card>

          {/* Bottom Stats Card */}
          <Card className="absolute -bottom-6 right-0 bg-linear-to-r from-pink-500 to-orange-400 text-white shadow-2xl sm:-right-4">
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
