import CommonCard from '../../../components/cards/CommonCard'

import bg from '../../../assets/images/bg-2.webp'
import img from '../../../assets/images/2_overlay_1.webp'
import img2 from '../../../assets/images/2_overlay_2.webp'
import img3 from '../../../assets/images/2_overlay_3.webp'

const SecondCard = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
      <CommonCard
        title="Screening, grading and assessment"
        content="We reach out to candidates who match your requirements and take them through
         a bespoke screening, grading, and assessment process.
          We use comprehensive and rigorous criteria to evaluate their skills,
           experience, and fit for your business.
            We ensure that only the best talents make it to the next stage."
      />

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
            className="absolute hidden md:block h-[40%] bottom-5 left-[-15%]"
            data-aos="fade-right"
          />
          <img
            src={img2}
            alt=""
            className="absolute hidden md:block h-[40%] bottom-[50%] right-[-15%]"
            data-aos="fade-left"
          />
          <img
            src={img3}
            alt=""
            className="absolute hidden md:block h-[20%] top-5 left-[-15%]"
            data-aos="fade-right"
          />
        </div>
      </div>
    </div>
  )
}

export default SecondCard
