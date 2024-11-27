import CommonCard from '../../../components/cards/CommonCard'

import bg from '../../../assets/images/bg-1.webp'
import img from '../../../assets/images/Ensure_item_1_p_500.png'

const FirstCard = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
      <CommonCard
        title="Ad blueprint with credits + internal community"
        content="We provide you with a proven ad blueprint to attract 
        the best talents for your business. Plus, you get free credits to post 
        your jobs on popular platforms like LinkedIn, Indeed, and Monster. 
        And as a bonus, you get access to our exclusive community of over
         30,000 pre-vetted professionals from around the world."
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
            className="absolute hidden md:block top-[-20px] h-[50%] left-[-15%]"
            data-aos="fade-right"
          />
        </div>
      </div>
    </div>
  )
}

export default FirstCard
