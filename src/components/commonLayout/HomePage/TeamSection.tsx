"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const teamMembers = [
  {
    name: "Mis Smith",
    role: "Art Director",
    image: "/icons/commonLayout/team/teams1.jpg",
  },
  {
    name: "Alex Chen",
    role: "Art Director",
    image: "/icons/commonLayout/team/teams2.jpg",
  },
  {
    name: "Sarah Martinez",
    role: "Art Director",
    image: "/icons/commonLayout/team/teams3.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "Art Director",
    image: "/icons/commonLayout/team/teams4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full py-20 px-4">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">Meet Our Team</h2>
        <p className="text-background/70 mt-3">
          Talented individuals bringing games to life
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-muted-foreground rounded-2xl p-4 text-center transition border-0"
            >
              <CardContent className="flex flex-col items-center space-y-2 p-0">
                {/* Avatar */}
                <div className="w-28 h-28 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-background">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-secondary text-sm">{member.role}</p>

                <hr className="bg-muted-foreground/10 border-t w-full mt-4 mb-4 opacity-10" />

                {/* Button */}
                <Link href={`/team/${index}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full py-6 cursor-pointer font-semibold text-lg border-secondary hover:bg-secondary hover:text-background bg-transparent text-background transition"
                  >
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16">
          <Link href="/team/#team" className="w-full">
            <Button
              variant="outline"
              className="p-8 cursor-pointer font-semibold text-lg border-primary hover:bg-primary hover:text-background bg-transparent text-background transition"
            >
              View Full Team →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
