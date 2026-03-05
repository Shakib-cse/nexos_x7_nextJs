"use client";

import React from "react";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "80+", label: "Total Games" },
  { value: "20+", label: "Team Members" },
  { value: "26+", label: "Active Projects" },
];

const StatsBar = () => {
  return (
    <div className="p-6 md:p-12 container mx-auto px-4">
      <div className="bg-[#32008E] rounded-lg flex flex-col sm:flex-row gap-8 sm:gap-0 justify-center sm:justify-around items-stretch sm:items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center justify-center min-h-30 md:min-h-40 text-center px-2 sm:px-6"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-background drop-shadow-lg leading-none">
              {stat.value}
            </div>
            <div className="mt-2 md:mt-4 text-xs sm:text-sm md:text-base text-background font-medium tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
