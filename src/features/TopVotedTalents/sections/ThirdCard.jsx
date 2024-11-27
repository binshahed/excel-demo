import CommonCard from '../../../components/cards/CommonCard'

import bg from '../../../assets/images/bg-3.webp'
import img from '../../../assets/images/3_overlay_1.webp'

const ThirdCard = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
      <CommonCard
        title="Machine-led interview"
        content="Our platform allows the candidates to showcase their skills and personality conveniently and flexibly. We then evaluate their performance both by our hiring team and by you. This ensures that you only meet with candidates who match your preferences and expectations."
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
            className="absolute hidden md:block bottom-[20px] h-[30%] left-[-15%]"
            data-aos="fade-right"
          />
        </div>
      </div>
    </div>
  )
}

export default ThirdCard
