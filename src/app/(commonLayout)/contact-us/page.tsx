"use client";

import ContactUs from "@/components/commonLayout/contact/ContactUs";
import Image from "next/image";

export default function DiggingLegendsPage() {
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-62 sm:h-87 md:h-112 lg:h-137">
        <Image
          src="/icons/contact/banner.jpg"
          alt="Game Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gradient */}
         <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-foreground" />
      </div>

      <ContactUs />
    </div>
  );
}