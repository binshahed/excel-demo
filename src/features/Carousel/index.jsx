
import Marquee from 'react-fast-marquee'

// Import all images statically
import logo1 from '../../assets/images/carousel/logo1.webp'
import logo2 from '../../assets/images/carousel/logo2.webp'
import logo3 from '../../assets/images/carousel/logo3.webp'
import logo4 from '../../assets/images/carousel/logo4.webp'
import logo5 from '../../assets/images/carousel/logo5.webp'
import logo6 from '../../assets/images/carousel/logo6.webp'
import logo7 from '../../assets/images/carousel/logo7.webp'
import logo8 from '../../assets/images/carousel/logo8.webp'
import logo9 from '../../assets/images/carousel/logo9.webp'
import logo10 from '../../assets/images/carousel/logo10.webp'
import logo11 from '../../assets/images/carousel/logo11.webp'
import logo12 from '../../assets/images/carousel/logo12.webp'
import logo13 from '../../assets/images/carousel/logo13.webp'

const CarouselSection = () => {
  // Storing images in an array
  const images = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
    logo10, logo11, logo12, logo13
  ]

  return (
    <div className="border-y-2 border-secondary p-5">
      <Marquee speed={100} gradient={false}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="m-5 h-12"
            loading="lazy" // Enables lazy loading
          />
        ))}
      </Marquee>
    </div>
  )
}

export default CarouselSection
