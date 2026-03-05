"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UpdateDetails() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Back Button */}
      <Link href="/team">
        <Button
          variant="ghost"
          className="flex items-center gap-3 p-0 mb-6 hover:bg-transparent hover:text-background cursor-pointer"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary">
            <Image
              src="/icons/gameLayout/details/back.png"
              alt="Play Button"
              width={50}
              height={50}
              className="p-3"
            />
          </div>
          <span className="text-sm font-medium">Back to Resources</span>
        </Button>
      </Link>

      {/* Card */}
      <Card className="bg-muted-foreground border-0">
        <CardContent className="p-8 md:p-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/icons/commonLayout/team/teams2.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <span className="text-background/70 text-sm font-medium">
                Alex Chen
              </span>
            </div>

            <Badge className="bg-secondary text-background px-4 py-1 rounded-full">
              Update
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Cyber Nexus Update 2.5 Released
          </h1>

          {/* Content */}
          <div className="space-y-6 text-background/70 leading-relaxed text-[15px]">
            <p>
              Major update brings new story missions, improved graphics, and
              balance changes. Check out what’s new in this massive content
              drop.
            </p>

            <p>
              Step into an all-new chapter of the adventure with an expanded
              storyline that pushes the world forward in dramatic and unexpected
              ways. These freshly added missions introduce deeper lore,
              cinematic set pieces, and challenging objectives that test your
              strategy, skill, and decision-making.
            </p>

            <p>
              Visually, the experience has been transformed from the ground up.
              Enhanced lighting systems create more realistic environments, from
              glowing cityscapes at night to richly detailed natural landscapes
              during the day.
            </p>

            <p>
              Gameplay balance has also received a comprehensive overhaul.
              Weapons, abilities, and progression systems have been carefully
              tuned to ensure fair competition and meaningful choices.
            </p>

            <p>
              In addition, numerous quality-of-life improvements make everyday
              play more enjoyable. Streamlined menus, faster loading times,
              clearer interface elements, and improved matchmaking systems
              reduce downtime.
            </p>

            <p>
              Performance optimizations ensure the game runs more smoothly
              across a wider range of systems, delivering stable frame rates and
              reduced input lag even during intense moments.
            </p>

            <p>
              Whether you&apos;re a long-time veteran returning to see what’s
              changed or a newcomer ready to begin your journey, this massive
              update delivers a richer world, more polished gameplay, and
              countless hours of fresh content.
            </p>
          </div>

          {/* Footer Date */}
          <div className="flex justify-end gap-1 mt-10">
            <Calendar size={16} className="text-background/70" />
            <span className="text-xs text-background/70">10/02/2026</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
