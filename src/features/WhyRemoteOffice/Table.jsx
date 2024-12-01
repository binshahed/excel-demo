import { SiTicktick } from 'react-icons/si'
import { remoteOk } from './../../data/remoteOfficeData'
import { MdOutlineCancel } from 'react-icons/md'
import logo from '../../assets/logo.svg'

const Table = () => {
  const name = remoteOk.map((remote) => remote.Criteria)
  const freelanceMarket = remoteOk.map((remote) => remote.freelance_Market)
  const remoteOffice = remoteOk.map((remote) => remote.remote_office)
  const agencies = remoteOk.map((remote) => remote.Agencies)
  const inHouse = remoteOk.map((remote) => remote.in_house)
  return (
    <div className="grid grid-cols-5 text-sm font-semibold text-black">
      <div className="my-5 ">
        {/* heading  */}
        <div className=" bg-white rounded-tl-xl opacity-90 p-4 h-[5rem] flex justify-start items-center"></div>

        {name.map((item) => (
          <div
            key={item}
            className=" bg-[#fffc] p-4 h-[5rem] flex justify-start items-center mt-1"
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="my-5 ">
        {/* heading  */}
        <div className=" bg-white  opacity-90 p-4 h-[5rem] flex justify-center items-center">
          <p>Freelance Market</p>
        </div>
        {freelanceMarket?.map((item, index) => (
          <div
            key={index}
            className=" bg-[#fff6] p-4 h-[5rem] flex justify-center items-center mt-1"
          >
            {item === 'No' ? (
              <MdOutlineCancel className="text-2xl text-red-500" />
            ) : (
              item
            )}
          </div>
        ))}
      </div>

      {/* center start */}

      <div className=" bg-white rounded-xl ">
        {/* heading  */}
        <div className=" mt-5 p-4 h-[5rem] flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
        {remoteOffice?.map((item, index) => (
          <div
            key={index}
            className=" bg-[#fffc] p-4 h-[5rem] flex justify-center items-center mt-1"
          >
            {item === 'Yes' ? (
              <SiTicktick className="text-2xl text-green-500" />
            ) : (
              item
            )}
          </div>
        ))}
      </div>
      {/* center end */}

      <div className="my-5 ">
        {/* heading  */}
        <div className=" bg-white  opacity-90 p-4 h-[5rem] flex justify-center items-center">
          <p>In-house</p>
        </div>

        {inHouse?.map((item, index) => (
          <div
            key={index}
            className=" bg-[#fff6] p-4 h-[5rem] flex justify-center items-center mt-1"
          >
            {item === 'Yes' ? (
              <SiTicktick className="text-2xl text-green-500" />
            ) : item === 'No' ? (
              <MdOutlineCancel className="text-2xl text-red-500" />
            ) : (
              item
            )}
          </div>
        ))}
      </div>

      <div className="my-5 ">
        {/* heading  */}
        <div className=" bg-white rounded-tr-xl opacity-90 p-4 h-[5rem] flex justify-start items-center">
          <p>Agencies</p>
        </div>

        {agencies?.map((item, index) => (
          <div
            key={index}
            className=" bg-[#fffc] p-4 h-[5rem] flex justify-start items-center mt-1"
          >
            {item === 'No' ? (
              <MdOutlineCancel className="text-2xl text-red-500" />
            ) : (
              item
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table
