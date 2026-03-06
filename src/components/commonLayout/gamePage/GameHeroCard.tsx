"use client";

import Image from "next/image";

export default function GameHeroCard() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="container mx-auto px-4 md:h-96 h-52 w-full relative">
        <Image
          src="/icons/commonLayout/banner/banner.jpg"
          alt="Game Hero"
          fill
          priority
          className="object-cover rounded-4xl"
        />

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-background text-4xl md:text-6xl font-bold">
            Game
          </h1>
        </div>
      </div>
    </div>
  );
}