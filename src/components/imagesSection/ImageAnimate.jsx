/* eslint-disable react/prop-types */
import { useSpring, animated } from 'react-spring'

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const calc = (x, y) => {
  return [-(y / 50), x / 50, 1]
}

const HeroBannerAnimate = ({ children, styles }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 50 },
  }))
  return (
    <animated.div
      className={styles}
      onMouseMove={(e) => {
        const { clientX: x, clientY: y } = e

        return set({ xys: calc(x, y) })
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </animated.div>
  )
}

export default HeroBannerAnimate
