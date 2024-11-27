import CommonCard from '../../../components/cards/CommonCard'

import bg from '../../../assets/images/bg-5.webp'
import img from '../../../assets/images/5_overlay_1.webp'

const FifthCard = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
      <CommonCard
        title="Client review"
        content="Our platform encapsulates all the data and feedback from the previous stages, 
        so you can easily compare and evaluate the candidates. 
        You only go for a face-to-face interview with the candidates
         that you feel have met all the criteria so far. This contributes 
         to hiring the right fit at the right time."
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
            className="absolute hidden md:block bottom-[30%] h-[60%] left-[-15%]"
            data-aos="fade-right"
          />
        </div>
      </div>
    </div>
  )
}

export default FifthCard
