import { TypeAnimation } from 'react-type-animation'
import arrowIcon from '../../assets/icons/arrow-icon.png'
import { BsInfoLg } from 'react-icons/bs'
import CommonButton from '../../components/buttons/CommonButton'

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center text-center md:text-left">
      <h1 className="text-4xl md:text-6xl  font-bold text-primary  ">
        Build and <br /> Manage Global <br />
        <TypeAnimation
          sequence={[
            'HR Operations',
            1500,
            'Compliances',
            1500,
            'Remote Teams',
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="text-lg md:text-2xl font-normal my-10 md:mr-10">
        We are an end-to-end remoteOps platform that solves all things global HR
      </p>

      <div>
        <CommonButton className="">Looking fot talent</CommonButton>
        <div className="flex justify-center md:justify-start">
          <img src={arrowIcon} alt="" />

          <span className="flex bg-[#EDECA2] text-sm mt-7 py-2 px-5 rounded-full">
            <BsInfoLg className="mt-1 mr-1" /> Pay only for results
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
