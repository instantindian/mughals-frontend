import FAQs from '@/components/FAQs';
import Banner from '@/components/Franchise/Banner';
import Contact from '@/components/Franchise/Contact';
import Hero from '@/components/Franchise/Hero';
import SecondaryCTA from '@/components/Franchise/SecondaryCTA';
import React from 'react';



const index = () => {
  return (
    <main>
      <Banner/>
      <Hero/>
      <SecondaryCTA/>
      <Contact/>
      <FAQs/>
    </main>
  )
}

export default index