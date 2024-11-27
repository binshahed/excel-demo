import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

const CarouselSection = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    // Dynamically import images
    const loadImages = async () => {
      const imageImports = await Promise.all(
        Array.from(
          { length: 13 },
          (_, i) => import(`../../assets/images/carousel/logo${i + 1}.webp`),
        ),
      )
      setImages(imageImports.map((module) => module.default))
    }

    loadImages()
  }, [])

  return (
    <div className="border-y-2 border-secondary p-5">
      <Marquee speed={100} gradient={false}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="m-5 h-12 "
            loading="lazy" // Enables lazy loading
          />
        ))}
      </Marquee>
    </div>
  )
}

export default CarouselSection
