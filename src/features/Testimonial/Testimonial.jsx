import { useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { ImQuotesLeft } from 'react-icons/im'
import { useTransition, animated } from 'react-spring'
import { testimonials } from '../../data/testimonial'
import personImg from '../../assets/images/person-img.jpg'

const Testimonial = () => {
  const [testimonialActive, setTestimonialActive] = useState(0)
  const [direction, setDirection] = useState('next') // Track direction (next or prev)

  const handelNext = () => {
    setDirection('next') // Set direction to next
    setTestimonialActive((prevIndex) => (prevIndex + 1) % testimonials.length) // Wrap to the start
  }

  const handlePrev = () => {
    setDirection('prev') // Set direction to prev
    setTestimonialActive(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length, // Wrap to the end
    )
  }

  const activeTestimonial = testimonials[testimonialActive]

  // Setting up the transition for the sliding animation
  const transitions = useTransition(activeTestimonial, {
    key: activeTestimonial.id,
    from: {
      opacity: 0,
      transform:
        direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)',
    }, // Slide in from right or left based on direction
    enter: { opacity: 1, transform: 'translateX(0%)' }, // Slide in to the center
    leave: {
      opacity: 0,
      transform:
        direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)',
    }, // Slide out to left or right based on direction
    config: { tension: 220, friction: 30 }, // Adjust the animation speed and smoothness
  })

  return (
    <div className="container py-20 text-primary">
      <div className="flex flex-col justify-between ">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-3 md:col-span-1">
            <h3 className="text-2xl md:text-[3rem] font-bold text-center md:text-left">
              Clients say
            </h3>
          </div>
          <div className="col-span-3 md:col-span-2 relative min-h-[300px]">
            {transitions((style, item) => (
              <animated.div
                style={{ ...style, position: 'absolute', width: '100%' }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <div className="px-5 mb-4 md:mb-0">
                    <ImQuotesLeft className="text-6xl md:text-9xl p-0 mt-0 md:mt-[-20px]" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-base md:text-xl leading-7 md:leading-9">
                      {item.text}
                    </p>
                    <div className="mt-5 md:mt-20 flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start">
                      <div>
                        <img
                          src={personImg}
                          className="h-14 w-14 rounded-full mr-4"
                          alt=""
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">{item.name}</h5>
                        <h5 className="text-md">{item.position}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-between mt-10 z-40">
          <button
            onClick={handlePrev}
            className="text-3xl md:text-4xl text-primary px-4 py-2 rounded-md"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={handelNext}
            className="text-3xl md:text-4xl text-primary px-4 py-2 rounded-md"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
