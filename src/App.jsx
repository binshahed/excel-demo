import './App.css'
import 'aos/dist/aos.css'
import HorizontalScroll from './features/HorizontalScroll/HorizontalScroll'

import CarouselSection from './features/Carousel'
import HeroSection from './features/Hero'
import { useEffect } from 'react'
import Aos from 'aos'
import TopVotedTalentSection from './features/TopVotedTalents'
import TeamSection from './features/Team/TeamSection'
import PlatformTour from './features/PlatformTour/PlatformTour'
import Footer from './components/common/Footer'
import Testimonial from './features/Testimonial/Testimonial'
import NabBar from './components/common/NabBar'
import WhyRemoteOffice from './features/WhyRemoteOffice/WhyRemoteOffice'

function App() {
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])
  return (
    <div className="font-poppins">
      <NabBar />
      <HeroSection />
      <CarouselSection />
      <TopVotedTalentSection />
      <HorizontalScroll />
      <TeamSection />
      <PlatformTour />
      <WhyRemoteOffice />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
