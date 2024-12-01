import { MdOutlineCancel } from 'react-icons/md'
import { SiTicktick } from 'react-icons/si'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { remoteOk } from '../../data/remoteOfficeData'
import logo from '../../assets/logo.svg'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState('next')

  const handleNext = () => {
    setDirection('next')
    setCurrentSlide((prevIndex) => (prevIndex + 1) % remoteOk.length)
  }

  const handlePrev = () => {
    setDirection('prev')
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + remoteOk.length) % remoteOk.length,
    )
  }

  const activeSlide = remoteOk[currentSlide]

  const transitions = useTransition(activeSlide, {
    key: currentSlide,
    from: {
      opacity: 0,
      transform:
        direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)',
    },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: {
      opacity: 0,
      transform:
        direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)',
    },
    config: { tension: 220, friction: 30 },
  })

  return (
    <div className="container my-10">
      <div className="bg-[#f7fdd4] rounded-2xl shadow-lg">
        {/* Header Section */}
        <div className="bg-white p-4 rounded-t-2xl flex justify-between items-center">
          <button onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <h3 className="font-semibold text-center">{activeSlide.Criteria}</h3>
          <button onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>

        {/* Slider Content */}
        <div className="p-4 ">
          {transitions((style, item) => (
            <animated.div
              style={{ ...style }}
              className="grid grid-cols-3 gap-y-4 "
            >
              <div className="col-span-2 font-semibold text-lg">
                Freelance Market
              </div>
              <div className="flex justify-center items-center">
                {item.freelance_Market === 'No' ? (
                  <MdOutlineCancel className="text-2xl text-red-500" />
                ) : item.freelance_Market === 'Yes' ? (
                  <SiTicktick className="text-xl text-green-500" />
                ) : (
                  item.freelance_Market
                )}
              </div>
              <div className="col-span-2 font-semibold text-lg bg-white p-4">
                <img src={logo} className="" alt="" />
              </div>
              <div className="flex justify-center items-center bg-white text-center font-bold">
                {item.remote_office === 'No' ? (
                  <MdOutlineCancel className="text-2xl text-red-500" />
                ) : item.remote_office === 'Yes' ? (
                  <SiTicktick className="text-xl text-green-500" />
                ) : (
                  item.remote_office
                )}
              </div>
              <div className="col-span-2 font-semibold text-lg">In-house</div>
              <div className="flex justify-center items-center">
                {item.in_house === 'No' ? (
                  <MdOutlineCancel className="text-2xl text-red-500" />
                ) : item.in_house === 'Yes' ? (
                  <SiTicktick className="text-xl text-green-500" />
                ) : (
                  item.in_house
                )}
              </div>
              <div className="col-span-2 font-semibold text-lg">Agencies</div>
              <div className="flex justify-center items-center">
                {item.Agencies === 'No' ? (
                  <MdOutlineCancel className="text-2xl text-red-500" />
                ) : item.Agencies === 'Yes' ? (
                  <SiTicktick className="text-xl text-green-500" />
                ) : (
                  item.Agencies
                )}
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
