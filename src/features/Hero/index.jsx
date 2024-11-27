import HeroBanner from './HeroBanner'
import HeroContent from './HeroContent'

const HeroSection = () => {
  return (
    <section className="min-h-screen py-40 flex items-center justify-center ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <HeroContent />
          {/* Right Content */}
          <HeroBanner />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
