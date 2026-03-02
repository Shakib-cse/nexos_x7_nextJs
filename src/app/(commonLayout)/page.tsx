import Banner from '@/components/commonLayout/HomePage/banner'
import Footer from '@/components/commonLayout/HomePage/footer'
import StatsBar from '@/components/commonLayout/HomePage/StatsBar'
import TeamSection from '@/components/commonLayout/HomePage/TeamSection'
import React from 'react'

export default function page() {
  return (
    <section>
      <Banner />
      <StatsBar />
      <TeamSection />
      <Footer />
    </section>
  )
}
