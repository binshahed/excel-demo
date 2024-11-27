import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Testimonial = () => {
  const [testimonialActive, setTestimonialActive] = useState(2);
  const [prevTestimonial, setPrevTestimonial] = useState(2);

  const testimonials = [
    {
      text: "Leverage agile frameworks to provide a robust synopsis for high level overviews...",
      name: "John Doe",
      position: "CEO, ABC Inc.",
    },
    {
      text: "Bring to the table win-win survival strategies to ensure proactive domination...",
      name: "Winter Doe",
      position: "CTO, XYZ Corp.",
    },
    {
      text: "Capitalize on low hanging fruit to identify a ballpark value added activity...",
      name: "John Wick",
      position: "Product Manager, Fake Corp.",
    },
  ];

  useEffect(() => {
    if (testimonialActive > prevTestimonial || (testimonialActive === 1 && prevTestimonial === testimonials.length)) {
      // Next Slide Animation
      gsap.fromTo(
        `.testimonial-${testimonialActive}`,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      );
      gsap.fromTo(
        `.testimonial-${prevTestimonial}`,
        { x: 0, opacity: 1 },
        { x: -300, opacity: 0, duration: 1 }
      );
    } else {
      // Previous Slide Animation
      gsap.fromTo(
        `.testimonial-${testimonialActive}`,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      );
      gsap.fromTo(
        `.testimonial-${prevTestimonial}`,
        { x: 0, opacity: 1 },
        { x: 300, opacity: 0, duration: 1 }
      );
    }
  }, [testimonialActive, prevTestimonial, testimonials.length]);

  const handlePrev = () => {
    setPrevTestimonial(testimonialActive);
    setTestimonialActive(testimonialActive === 1 ? testimonials.length : testimonialActive - 1);
  };

  const handleNext = () => {
    setPrevTestimonial(testimonialActive);
    setTestimonialActive(testimonialActive >= testimonials.length ? 1 : testimonialActive + 1);
  };

  return (
    <div className="my-10 md:my-24 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
      <div className="relative w-full py-2 md:py-24 bg-indigo-700 md:w-1/2 flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>

        <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
          <span className="md:block">What Our</span>
          <span className="md:block">Customers</span>
          <span className="block">Are Saying!</span>
        </div>

        <div className="absolute right-0 bottom-0 mr-4 mb-4 flex">
          <button
            className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <button
            className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="bg-gray-100 md:w-1/2">
        <div className="flex flex-col h-full relative">
          <div className="h-full relative z-10">
            <div className={`testimonial-${testimonialActive} testimonial`}>
              <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                {testimonials[testimonialActive - 1].text}
              </p>
              <p className="text-right text-gray-500 italic px-6 md:px-16">
                - {testimonials[testimonialActive - 1].name}, {testimonials[testimonialActive - 1].position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
