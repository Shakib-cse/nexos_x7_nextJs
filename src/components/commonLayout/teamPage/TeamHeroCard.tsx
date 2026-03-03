"use client";

import Image from "next/image";

export default function TeamHeroCard() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="container mx-auto px-4">
        <Image
          src="/icons/teamLayout/banner/teambanner.jpg"
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
