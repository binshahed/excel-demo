
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function ScrollTriggerT () {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  let canvasRef = useRef(null);

  const tween = useRef();

  useGSAP(() => {
    tween.current = gsap.fromTo(
      canvasRef.current,
      {
        scale: 0.85,
      },
      {
        scaleX: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: canvasRef.current,
          start: 'top 25%',
          end: 'bottom bottom',
          scrub: 0.78,
        },
      }
    );

    ScrollTrigger.create({
      trigger: canvasRef.current,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.refresh();
  });


  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="h-20 bg-blue-100">Spacer</div>

      <div
        className="bg-gray-200 h-96 flex items-center justify-center mb-5"
        ref={canvasRef}
      >
        <span className="text-lg font-semibold">CANVAS</span>
      </div>

      <div className="h-20 bg-blue-100">Spacer 1</div>
      <div className="h-20 bg-blue-200">Spacer 2</div>
      <div className="h-20 bg-blue-300">Spacer 3</div>
      <div className="h-20 bg-blue-400">Spacer 4</div>
      <div className="h-20 bg-blue-500">Spacer 5</div>
      <div className="h-20 bg-blue-600">Spacer 6</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
      <div className="h-20 bg-blue-700">Spacer 7</div>
    </div>
  );
}

export default ScrollTriggerT ;
