"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Star } from "lucide-react";
import Link from "next/link";

const games = [
  {
    id: 1,
    title: "Digging Legends Simulator",
    description: "Explore mysterious dungeons in this dark fantasy world",
    image: "/icons/commonLayout/featured/game1.jpg",
    views: "32,104",
    likes: "2,156",
  },
  {
    id: 2,
    title: "Cyber Nexus",
    description: "A futuristic cyberpunk adventure through neon-lit cities",
    image: "/icons/commonLayout/featured/game2.jpg",
    views: "45,621",
    likes: "3,892",
  },
  {
    id: 3,
    title: "Quantum Shift",
    description: "Bend reality in this mind-bending puzzle platformer",
    image: "/icons/commonLayout/featured/game3.jpg",
    views: "28,945",
    likes: "1,823",
  },
];

export default function TeamMemberInDetailsPage() {
  return (
    <section className="py-16 px-6">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-background">
            Contributed
          </h2>

          <Link
            href="/game/#featured"
            className="text-primary font-semibold hover:underline"
          >
            <Button
              variant="outline"
              className="border-2 border-primary bg-transparent text-background hover:bg-primary hover:text-background transition p-6 cursor-pointer"
            >
              View All
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card
              key={game.id}
              className="bg-muted-foreground border-none rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 p-6"
            >
              {/* Image */}
              <div className="relative h-72 w-full">
                <Badge className="absolute top-3 right-3 bg-secondary text-background z-20">
                  Action RPG
                </Badge>

                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              <CardContent className="p-0">
                {/* Title */}
                <h3 className="text-xl font-semibold text-background mb-2">
                  {game.title}
                </h3>

                {/* Description */}
                <p className="text-background/70 text-sm mb-5">
                  {game.description}
                </p>

                {/* Stats + Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-background/70 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      {game.views}
                    </div>

                    <div className="flex items-center gap-1">
                      <Star size={16} />
                      {game.likes}
                    </div>
                  </div>

                  <Link href={`/game/${game.id}`}>
                    <Button className="bg-primary text-background cursor-pointer">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
