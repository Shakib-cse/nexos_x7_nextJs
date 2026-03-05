import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[60vh] md:h-[calc(100vh-80px)] flex items-center relative"
      style={{
        backgroundImage:
          "url(/icons/commonLayout/banner/banner_background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Banner Content */}
      <div className="flex flex-col gap-6 md:gap-8 container mx-auto px-6 md:px-12 lg:px-20 text-center md:text-left z-10">
        <h1 className="text-background text-3xl md:text-5xl lg:text-7xl font-bold w-full md:w-9/12 mx-auto md:mx-0">
          Crafting immersive Gaming Experiences
        </h1>

        <p className="text-background/70 text-lg md:text-xl lg:text-2xl w-full md:w-8/12 mx-auto md:mx-0">
          We are a passionate team of creators building next-generation games
          that push the boundaries of interactive entertainment and
          storytelling.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <Link href="/game" className="cursor-pointer">
            <Button
              size={"lg"}
              className="w-full rounded-lg sm:w-auto border-2 border-primary py-6 cursor-pointer"
            >
              Explore Games <ArrowRight />
            </Button>
          </Link>
          <Link href="/team" className="cursor-pointer">
            <Button
              size={"lg"}
              className="w-full rounded-lg sm:w-auto bg-transparent border-2 border-primary py-6 cursor-pointer"
            >
              View Team
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          {/* Overlapping Circular Logos */}
          <div className="flex items-center">
            <Image
              src="/icons/commonLayout/banner/banner_icon.png"
              alt="Brand Logo"
              width={50}
              height={50}
              className="rounded-full z-20"
            />
            <Image
              src="/icons/commonLayout/banner/banner_icon2.png"
              alt="Brand Logo"
              width={50}
              height={50}
              className="rounded-full -ml-4 z-30"
            />
          </div>

          {/* Label */}
          <div className="font-semibold text-md md:text-base">Our Brand’s</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
