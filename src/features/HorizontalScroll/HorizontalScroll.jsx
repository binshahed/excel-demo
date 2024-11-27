import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import bg from '../../assets/images/bg-2.webp'
import img from '../../assets/images/6_overlay_1.png'

const HorizontalScroll = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let sections = gsap.utils.toArray('.panel')
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.intro_slide',
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.05,
          },
          end: '+=3500',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-nowrwap overflow-x-auto intro_slide">
      <section>
        <div className="h-[102vh] flex flex-col md:flex-row-reverse  bg-no-repeat bg-cover w-[100vw] panel">
          <div className="basis-full bg-primary  ">
            <div className="container">
              <div className=" min-h-[100vh] py-10 md:py-0 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                  <div>
                    <h1 className="text-[2.5rem] font-semibold">Onboarding</h1>
                    <p className="text-lg my-10">
                      We help you onboard the candidates by doing background
                      checks, extending the offer, and installing our
                      proprietary service culture pathway. We ensure a smooth
                      and hassle-free transition for you and the candidates.
                    </p>
                    <div className="flex justify-between">
                      <h2>01</h2>
                      <h2>02</h2>
                    </div>
                    <div className="h-2 w-full bg-white"></div>
                  </div>
                  <div>
                    <div className="flex items-center justify-end">
                      <div className="relative ">
                        <img
                          src={bg}
                          alt=""
                          className=" rounded-3xl bg-cover h-[20%] md:h-[50%] w-full md:w-[80%]"
                        />
                        <img
                          src={img}
                          alt=""
                          className="absolute hidden md:block top-[20%] h-[40%] left-[-15%]"
                          data-aos="fade-right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[102vh] flex flex-col md:flex-row-reverse  bg-no-repeat bg-cover w-[100vw] panel">
          <div className="basis-full bg-white text-primary  ">
            <div className="container">
              <div className=" min-h-[100vh] py-10 md:py-0 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                  <div>
                    <h1 className="text-[2.5rem] font-semibold">Compliance</h1>
                    <p className="text-lg my-10">
                      We handle the compliance issues for you and the
                      candidates. We make sure contracts are native and
                      efficiently handled to safeguard integrity,
                      confidentiality, continuity, and effectivity.
                    </p>
                    <div className="flex justify-between">
                      <h2>02</h2>
                      <h2>03</h2>
                    </div>
                    <div className="h-2 w-full bg-[#085FD1]"></div>
                  </div>
                  <div>
                    <div className="flex items-center justify-end">
                      <div className="relative ">
                        <img
                          src={bg}
                          alt=""
                          className=" rounded-3xl bg-cover h-[50%] w-full md:w-[80%]"
                        />
                        <img
                          src={img}
                          alt=""
                          className="absolute hidden md:block top-[20%] h-[40%] left-[-15%]"
                          data-aos="fade-right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[102vh] flex flex-col md:flex-row-reverse  bg-no-repeat bg-cover w-[100vw] panel">
          <div className="basis-full bg-[#085FD1]  ">
            <div className="container">
              <div className=" min-h-[100vh] py-10 md:py-0 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                  <div>
                    <h1 className="text-[2.5rem] font-semibold">
                      Team Management
                    </h1>
                    <p className="text-lg my-10">
                      We help you better manage your team with strategic
                      consultation, sprint management, training and development,
                      and reporting standard management. We suggest the best
                      practices and tools to optimize your remote team’s
                      performance and productivity.
                    </p>
                    <div className="flex justify-between">
                      <h2>03</h2>
                      <h2>04</h2>
                    </div>
                    <div className="h-2 w-full bg-white"></div>
                  </div>
                  <div>
                    <div className="flex items-center justify-end">
                      <div className="relative ">
                        <img
                          src={bg}
                          alt=""
                          className=" rounded-3xl bg-cover h-[50%] w-full md:w-[80%]"
                        />
                        <img
                          src={img}
                          alt=""
                          className="absolute hidden md:block top-[20%] h-[40%] left-[-15%]"
                          data-aos="fade-right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[102vh] flex flex-col md:flex-row-reverse  bg-no-repeat bg-cover w-[100vw] panel">
          <div className="basis-full bg-primary  ">
            <div className="container">
              <div className="min-h-[100vh] py-10 md:py-0 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                  <div>
                    <h1 className="text-[2.5rem] font-semibold">
                      HR Management
                    </h1>
                    <p className="text-lg my-10">
                      We take care of the entire HR Management for your remote
                      team. We handle the contract fees, attendance, leaves,
                      holiday calendars, performance evaluation, and appraisals.
                      We ensure that your team is happy, motivated, and
                      productive.
                    </p>
                    <div className="flex justify-between">
                      <h2>04</h2>
                      <h2>05</h2>
                    </div>
                    <div className="h-2 w-full bg-white"></div>
                  </div>
                  <div>
                    <div className="flex items-center justify-end">
                      <div className="relative ">
                        <img
                          src={bg}
                          alt=""
                          className=" rounded-3xl bg-cover h-[50%] w-full md:w-[80%]"
                        />
                        <img
                          src={img}
                          alt=""
                          className="absolute hidden md:block top-[20%] h-[40%] left-[-15%]"
                          data-aos="fade-right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HorizontalScroll
