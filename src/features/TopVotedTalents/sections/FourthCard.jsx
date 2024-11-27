import CommonCard from '../../../components/cards/CommonCard'

import bg from '../../../assets/images/bg-4.webp'
import img from '../../../assets/images/4_overlay_1.png'

const FourthCard = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
      <CommonCard
        title="Technical challenge"
        content="We assist you in conducting the technical test through our outlined discipline. We co-create a tailored challenge relevant to the skills you need. Our platform allows the candidates to complete the challenge in a realistic and interactive environment. This allows you to review the code quality, logic, and efficiency of the candidates."
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
            className="absolute hidden md:block top-[20px] h-[40%] right-[-5%]"
            data-aos="fade-right"
          />
        </div>
      </div>
    </div>
  )
}

export default FourthCard
