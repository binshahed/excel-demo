import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'
import FirstCard from './sections/FirstCard'
import SecondCard from './sections/SecondCard'
import ThirdCard from './sections/ThirdCard'
import FourthCard from './sections/FourthCard'
import FifthCard from './sections/FifthCard'

function TopVotedTalentSection() {
  gsap.registerPlugin(ScrollTrigger)

  const canvasRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const canvasElement = canvasRef.current
    const sectionElement = sectionRef.current

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: sectionElement,
      start: 'top top',
      end: 'bottom bottom',
      pin: canvasElement,
      pinSpacing: false,
      scrub: true,
    })

    // Create fade out when leaving
    gsap.to(canvasElement, {
      opacity: 0,
      scrollTrigger: {
        trigger: sectionElement,
        start: 'bottom-=200 center',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className="bg-primary text-white">
      {/* Sticky Section */}
      <div ref={canvasRef} className="bg-primary z-50 sticky top-10">
        <div className="text-lg container py-10">
          <h3
            className="text-white text-2xl md:text-[3rem]  font-bold w-full md:w-[55%] md:leading-[55px]"
            data-aos="fade-up"
          >
            Ensuring access to top vetted talents
          </h3>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-10">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
        <FifthCard />
        <div className="container min-h-[30vh]" data-aos="fade-up">
          <h1 className="text-[3rem] font-semibold w-100 md:w-[70%]">
            We are just getting started, there is more to come...
          </h1>
        </div>
      </div>
    </div>
  )
}

export default TopVotedTalentSection
