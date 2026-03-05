import Banner from '@/components/commonLayout/HomePage/banner'
import FeaturedGames from '@/components/commonLayout/HomePage/FeaturedGames'
import StatsBar from '@/components/commonLayout/HomePage/StatsBar'
import TeamSection from '@/components/commonLayout/HomePage/TeamSection'
import React from 'react'

export default function page() {
  return (
    <section>
      <Banner />
      <StatsBar />
      <FeaturedGames />
      <TeamSection />
    </section>
  )
}
