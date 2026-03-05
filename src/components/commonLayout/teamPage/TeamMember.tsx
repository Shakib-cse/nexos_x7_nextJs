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
  {
    name: "Imran Ali",
    role: "Game Artist",
    image: "/icons/commonLayout/team/teams5.jpg",
  },
  {
    name: "Jake Miller",
    role: "3D Environment Artist",
    image: "/icons/commonLayout/team/teams6.jpg",
  },
  {
    name: "Emma Clark",
    role: "Unreal Engine Developer",
    image: "/icons/commonLayout/team/teams7.jpg",
  },
  {
    name: "Ryan Brooks",
    role: "Game Designer",
    image: "/icons/commonLayout/team/teams8.jpg",
  },
];

export default function TeamMember() {
  return (
    <section className="w-full py-20 px-4" id="team">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-left">
          Team Members
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
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
      </div>
    </section>
  );
}
