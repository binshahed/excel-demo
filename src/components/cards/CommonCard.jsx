/* eslint-disable react/prop-types */
import icon from '../../assets/icons/button-icon.svg'

const CommonCard = ({ title, content }) => {
  return (
    <div className="flex justify-start items-center" data-aos="fade-up">
      <div className="w-[80%]">
        <h3 className="text-[2.5rem] font-semibold">{title}</h3>
        <p className="font-light text-gray-300 my-8">{content}</p>
        <button className="flex hover:scale-90 ease-in duration-150">
          Learn more <img className="w-4 mt-1 ml-3 " src={icon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default CommonCard
