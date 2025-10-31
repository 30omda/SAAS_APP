import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import Cta from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id='123'
        name='Countsy the Number Wizard'
        topic='Derivatives & Integrals'
        subject='science'
        duration={30}
        color='#e5d0ff'
/>
        <CompanionCard 
        
        id='456'
        name='Verba the Vocabulary Builder'
        topic='Language Learning'
        subject='English Literature'
        duration={30}
        color='#BDE7FF'
/>
        <CompanionCard 
        
        id='789'
        name='Codey the Logic Hacker'
        topic='Intro to If-Else Statements'
        subject='Coding'
        duration={45}
        color='#ffda6e'
        
/>
      </section>
      <section className='home-section'>
        <CompanionsList 
          title='Recently completed sessions'
          cpmanions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page