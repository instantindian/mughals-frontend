import CTA from '@/components/CTA'
import Delivery from '@/components/Delivery'
import FAQs from '@/components/FAQs'
import Getintouch from '@/components/Getintouch'
import HeroBanner from '@/components/HeroBanner'
import Newsletter from '@/components/Newsletter'
import Services from '@/components/Services'
import Homemenu from '../components/Homemenu'


export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <Services/>
      {/* <Homemenu/> */}
      <CTA/>
      <Delivery/>
      <Newsletter/>
      <FAQs/>
      <Getintouch/>
    </main>
  )
}
