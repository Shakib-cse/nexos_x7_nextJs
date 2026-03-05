import AllGames from '@/components/commonLayout/gamePage/AllGames'
import GameHeroCard from '@/components/commonLayout/gamePage/GameHeroCard'
import React from 'react'

export default function page() {
  return (
    <section>
        <GameHeroCard />
        <AllGames />
    </section>
  )
}
