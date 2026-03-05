"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Eye, User } from "lucide-react";
import Link from "next/link";

export default function DiggingLegendsPage() {
  // 🔥 Dummy data (API ready structure)
  const gameData = {
    title: "Digging Legends Simulator",
    tags: ["Action RPG", "Multiplayer", "Adventure"],
    description: `Welcome to Digging Legends Simulator (DLS)!

Uncover treasure and hidden crates deep in the mines. Trade materials for coins or rare ores with a friend to acquire valuable goods. Upgrade gear and buy better tools to be at the top of the leaderboard and discover endless challenges in this exciting digging adventure.

Join 'Hydro Labs' for a 15% boost in all of your coins!

Follow for more updates!`,
    stats: {
      activePlayers: 654,
      favorites: 1823,
      totalVisits: 28945,
    },
    features: [
      "Dynamic Combat System",
      "Multiplayer Co-op",
      "Vast Open World",
      "Achievement System",
      "Character Customization",
      "Regular Updates",
    ],
    screenshots: [
      "/icons/gameLayout/details/banner.jpg",
      "/icons/gameLayout/details/banner.jpg",
      "/icons/gameLayout/details/banner.jpg",
    ],
    banner: "/icons/gameLayout/details/banner.jpg",
  };

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-62 sm:h-87 md:h-112 lg:h-137">
        <Image
          src={gameData.banner}
          alt="Game Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-foreground" />

        <div className="flex flex-col justify-start container mx-auto px-4 h-full relative">
          <div>
            <Link
              href="/game"
              className="text-sm text-primary font-semibold mb-2 inline-block"
            >
              <Button className="mt-6 bg-primary text-background cursor-pointer h-12 w-12">
                <Image
                  src="/icons/gameLayout/details/back.png"
                  alt="Play Button"
                  width={50}
                  height={50}
                />
              </Button>
            </Link>
          </div>

          <div className="absolute bottom-8">
            <h1 className="text-3xl md:text-6xl font-bold">{gameData.title}</h1>

            <div className="flex gap-2 mt-6">
              {gameData.tags.map((tag, index) => (
                <Badge
                  key={index}
                  className={
                    index === 0
                      ? "bg-secondary text-background px-3 py-1"
                      : "bg-background/20 text-background px-3 py-1"
                  }
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-10">
          {/* ABOUT */}
          <div>
            <h2 className="text-4xl font-semibold mb-4">About This Game</h2>
            <p className="text-background/70 whitespace-pre-line leading-relaxed">
              {gameData.description}
            </p>
          </div>

          {/* KEY FEATURES */}
          <div>
            <h2 className="text-4xl font-semibold mb-4">Key Features</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gameData.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg p-4 text-background bg-muted-foreground text-xl"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* SCREENSHOTS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>

            <Carousel className="w-full">
              <CarouselContent>
                {gameData.screenshots.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-120 rounded-xl overflow-hidden">
                      <Image
                        src={img}
                        alt="Screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="ml-15 bg-background/40 border border-background p-6 cursor-pointer text-background" />
              <CarouselNext className="me-15 bg-background/40 border border-background p-6 cursor-pointer text-background" />
            </Carousel>
          </div>
        </div>

        {/* RIGHT SIDE - GAME STATS CARD */}
        <div>
          <Card className="bg-muted-foreground border-0 rounded-2xl">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl font-semibold text-background">
                Game Statistics
              </h3>

              <div className="space-y-6">
                {/* Active Players */}
                <div className="flex items-start gap-4">
                  <div className="bg-foreground p-3 rounded-xl">
                    <User size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-background/70 text-md">Active Players</p>
                    <p className="text-3xl font-bold text-background">
                      {gameData.stats.activePlayers}
                    </p>
                  </div>
                </div>

                {/* Favorites */}
                <div className="flex items-start gap-4">
                  <div className="bg-foreground p-3 rounded-xl">
                    <Star size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-background/70 text-md">Favorites</p>
                    <p className="text-3xl font-bold text-background">
                      {gameData.stats.favorites.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Total Visits */}
                <div className="flex items-start gap-4">
                  <div className="bg-foreground p-3 rounded-xl">
                    <Eye size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-background/70 text-md">Total Visits</p>
                    <p className="text-3xl font-bold text-background">
                      {gameData.stats.totalVisits.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-4 bg-primary rounded-xl py-6 text-lg font-semibold cursor-pointer">
                Play Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
