import icon from '../../assets/icons/platformTour.svg'
import dashboard from '../../assets/gif/1.gif'

const PlatformTour = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left image */}
          <div className="min-h-[70vh] flex items-center">
            <div>
              <img className="" src={icon} alt="Platform Tour Icon" />
              <h3 className="text-[3rem] font-bold leading-none my-8">
                Take a <br /> quick look <br />
                at our platform
              </h3>
              <p className="pr-10">
                You want to empower your current team of high performers by
                adding specialists with niche experience. Hand-pick the best
                resources to contribute to the project.
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="min-h-[70vh] flex items-center">
            <img
              src={dashboard}
              className="rounded-xl"
              alt="Platform Tour Icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlatformTour
