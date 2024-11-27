import team1 from '../../assets/images/team_1.png'
import team2 from '../../assets/images/team_2.png'
import icon from '../../assets/icons/button-icon.svg'
import icon1 from '../../assets/icons/button-icon_dark.svg'

const TeamSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#085FD1] ">
        <div className="container md:pl-[30%]">
          <div className="flex justify-start items-center min-h-[80vh] text-white py-28 md:py-16">
            <div>
              <h3 className="text-[3rem] font-semibold">
                Supercharge your team
              </h3>
              <p className="my-10">
                You want to empower your current team of high performers by
                adding specialists with niche experience. Hand-pick the best
                resources to contribute to the project.
              </p>
              <img src={team1} alt="" />
              <button className="flex hover:scale-90 ease-in duration-150 mt-10 font-semibold">
                Learn more <img className="w-4 mt-1 ml-3 " src={icon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary min-h-[70vh]">
        <div className="container md:pr-[30%]">
          <div className="flex justify-start items-center min-h-[80vh] py-36 md:py-0">
            <div>
              <h3 className="text-[3rem] font-semibold">
                Supercharge your team
              </h3>
              <p className="my-10">
                You want to empower your current team of high performers by
                adding specialists with niche experience. Hand-pick the best
                resources to contribute to the project.
              </p>
              <img src={team2} alt="" />
              <button className="flex hover:scale-90 ease-in duration-150 mt-10 font-semibold">
                Learn more{' '}
                <img className="w-4 mt-1 ml-3  " src={icon1} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
