import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import Cta from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>
      <section className='home-section'>
        <CompanionsList />
        <Cta />
      </section>
    </main>
  )
}

export default Page