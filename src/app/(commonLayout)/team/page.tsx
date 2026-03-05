import TeamHeroCard from "@/components/commonLayout/teamPage/TeamHeroCard";
import TeamMember from "@/components/commonLayout/teamPage/TeamMember";
import React from "react";

export default function page() {
  return (
    <section>
      <TeamHeroCard />
      <TeamMember />
    </section>
  );
}
