"use client";

import Image from "next/image";

export default function GameHeroCard() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="container mx-auto px-4">
        <Image
          src="/icons/gameLayout/banner/hero.jpg"
          alt="Game Hero"
          width={2000}
          height={1000}
          priority
          className="object-cover rounded-4xl"
        />
      </div>
    </div>
  );
}
