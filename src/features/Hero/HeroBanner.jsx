import bg from '../../assets/images/hero/bg.webp'
import skillImg from '../../assets/images/hero/skill.png'
import skillImg1 from '../../assets/images/hero/skill1.png'
import ImageAnimate from '../../components/imagesSection/ImageAnimate'
import virtualHr from '../../assets/images/hero/Virtual_HR.svg'
import Talent_Acquisition from '../../assets/images/hero/Talent_Acquisition.svg'
import Virtual_Team from '../../assets/images/hero/Virtual_Team.svg'
import Compliance from '../../assets/images/hero/Compliance.svg'
import avatars from '../../assets/images/hero/avatars.webp'

const HeroBanner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <ImageAnimate>
          <img src={bg} alt="Hero Illustration" className="bg-cover" />
        </ImageAnimate>
        <ImageAnimate styles={'hidden md:block absolute right-0 top-[10%]'}>
          <img src={avatars} alt="" className=" w-32 md:w-48 " />
        </ImageAnimate>
        <ImageAnimate styles={'absolute left-[5%] top-[20%]'}>
          <img src={skillImg} alt="" className="w-32 md:w-48 " />
        </ImageAnimate>
        <ImageAnimate styles={'absolute left-[40%] top-[50%]'}>
          <img src={skillImg1} alt="" className="w-32 md:w-48 " />
        </ImageAnimate>
        <img
          src={Talent_Acquisition}
          alt=""
          className="absolute hidden md:block top-[7%] h-10  hover:scale-110 ease-in duration-150"
        />
        <img
          src={Virtual_Team}
          alt=""
          className="absolute hidden md:block bottom-[15%] h-10  hover:scale-110 ease-in duration-150"
        />
        <img
          src={virtualHr}
          alt=""
          className="absolute hidden md:block bottom-[40%] right-0 h-10  hover:scale-110 ease-in duration-150"
        />
        <img
          src={Compliance}
          alt=""
          className="absolute hidden md:block bottom-[55%] left-[30%] h-10  hover:scale-110 ease-in duration-150"
        />
      </div>
    </div>
  )
}

export default HeroBanner
