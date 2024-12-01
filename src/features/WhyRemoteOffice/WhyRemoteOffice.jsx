import CommonButton from '../../components/buttons/CommonButton'
import Slider from './Slider'
import Table from './Table'

const WhyRemoteOffice = () => {
  return (
    <div className="bg-secondary">
      <div className="container py-36">
        <div className="grid grid-cols-3 md:gap-10">
          <div className="col-span-3 md:col-span-2 ">
            {/* table grid start  */}
            <div className="hidden md:block">
              <Table />
            </div>

            <div className="block md:hidden">
              <Slider />
            </div>

            {/* table grid end  */}
          </div>
          <div className="col-span-4 md:col-span-1 order-first md:order-last text-center md:text-left">
            <div className="h-full flex items-center justify-center">
              <div>
                <h5 className="text-[3rem] font-bold">Why Remote Office?</h5>
                <p className="py-5 ">
                  Remote Office helps you hire and manage top global talents.
                  You can find, onboard, pay, and manage your remote workers
                  using our platform. Remote Office also supports you with
                  insights and feedback to optimise your remote team. We are
                  your vHR for building and managing high-performing remote
                  teams.
                </p>
                <CommonButton className="justify-center">
                  Get Started
                </CommonButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyRemoteOffice
