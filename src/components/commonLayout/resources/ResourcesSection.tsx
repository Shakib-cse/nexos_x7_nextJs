"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const posts = [
  {
    id: 1,
    category: "update",
    title: "Cyber Nexus Update 2.5 Released",
    description:
      "Major update brings new story missions, improved graphics, and balance changes. Check out what's new in this massive content drop.",
    author: "Alex Chen",
    date: "10/02/2026",
    image: "/icons/commonLayout/team/teams1.jpg",
  },
  {
    id: 2,
    category: "blog",
    title: "Behind the Scenes: Creating Shadow Realms",
    description:
      "A deep dive into our development process and the creative decisions that shaped our latest RPG masterpiece.",
    author: "Sarah Johnson",
    date: "05/02/2026",
    image: "/icons/commonLayout/team/teams2.jpg",
  },
  {
    id: 3,
    category: "tutorial",
    title: "Game Design Tutorial: Balancing Multiplayer",
    description:
      "Learn our approach to creating fair and engaging multiplayer experiences in competitive gaming.",
    author: "Emily Rodriguez",
    date: "28/01/2026",
    image: "/icons/commonLayout/team/teams3.jpg",
  },
  {
    id: 4,
    category: "announcement",
    title: "Studio Announcement: New Project in Development",
    description:
      "Exciting news! We're working on a new IP that will push the boundaries of interactive storytelling.",
    author: "Ryan Brooks",
    date: "15/01/2026",
    image: "/icons/commonLayout/team/teams4.jpg",
  },
  {
    id: 5,
    category: "announcement",
    title: "Velocity Racers: Community Race Event",
    description:
      "Join us for the biggest racing event of the year! Prizes, livestreams, and special rewards await.",
    author: "Marcus Williams",
    date: "08/01/2026",
    image: "/icons/commonLayout/team/teams5.jpg",
  },
  {
    id: 6,
    category: "tutorial",
    title: "3D Art Pipeline: From Concept to In-Game",
    description:
      "A technical guide to our 3D asset creation workflow and optimization techniques.",
    author: "Marcus Williams",
    date: "20/12/2025",
    image: "/icons/commonLayout/team/teams6.jpg",
  },
];

export default function ResourcesSection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-background">
            Resources & Updates
          </h2>
          <p className="text-background/70 mt-3">
            Stay updated with the latest news, tutorials, and announcements from
            our studio
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              className={`
        bg-muted-foreground border-0 rounded-2xl p-6
        transition duration-300
        ${index % 3 === 2 || index === 1 ? "md:col-span-1" : "md:col-span-2"}
      `}
            >
              {/* CARD GRID */}
              <div className="grid grid-rows-[auto_1fr_auto] h-full gap-6">
                {/* Top Row */}
                <div className="grid grid-cols-[auto_auto] justify-between items-center">
                  <Badge
                    className="bg-secondary text-background
                                    rounded-full px-3 py-1 capitalize"
                  >
                    {post.category}
                  </Badge>

                  <div className="flex items-center gap-2 text-background/70 text-sm">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </div>

                {/* Middle Content */}
                <div>
                  <h3 className="text-background text-xl font-semibold mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-background/70 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-[auto_auto] justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.image} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-background">
                      {post.author}
                    </span>
                  </div>

                  <Link
                    href={`/resources/${post.id}`}
                    className="text-primary font-medium hover:underline"
                  >
                    <Button className="text-secondary bg-transparent hover:bg-transparent cursor-pointer transition">
                      Read More →
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
