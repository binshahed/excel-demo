import { FaArrowRight, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import logo from '../../assets/logo_light.svg'
import footer_img from '../../assets/footer_img.webp'
import CommonButton from '../buttons/CommonButton'

const Footer = () => {
  return (
    <div>
      <div className="bg-primary pt-20 pb-5">
        <div className=" container">
          <div className="grid grid-cols-1 md:grid-cols-3  md:gap-48">
            <div className="">
              <img src={logo} alt="" className="h-12" />
              <div className="flex space-x-10 text-3xl my-6 text-secondary">
                <FaYoutube />
                <FaFacebook />
                <FaLinkedin />
              </div>

              <div className="bg-secondary p-4 rounded-2xl">
                <img src={footer_img} alt="" className="rounded-2xl" />

                <div className=" mt-8">
                  <p className="font-semibold mb-3 text-center">
                    Join our community:
                  </p>

                  <p className="text-xs text-center mb-4">
                    Join our community of talents from across the globe to get
                    access to new job opportunities, ideas, and collaborate with
                    like-minded individuals.
                  </p>
                  <CommonButton>
                    Join <FaArrowRight className="mt-1 ml-2" />
                  </CommonButton>
                </div>
              </div>
            </div>
            <div className="col-span-2 text-white">
              <p className="my-10 md:my-0">
                Remote Office is an end-to-end remoteOps platform that helps you
                build and manage global remote teams. We provide you with access
                to top-vetted talents, handle compliance and HR issues, and
                offer strategic consultation and support to optimise your team’s
                performance and productivity. Whether you want to supercharge
                your existing team or build your dream team from scratch, we
                have the solution. Join us today and discover the benefits of
                working with a Remote Office.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 footer-link">
                <div className="col-span-3 md:col-span-1">
                  <ul role="list">
                    <li>
                      <span className="font-semibold">Popular Hires</span>
                    </li>
                    <li>
                      <a href="/">Developers</a>
                    </li>
                    <li>
                      <a href="/">Marketers</a>
                    </li>
                    <li>
                      <a href="/">Designers</a>
                    </li>
                    <li>
                      <a href="/">Support Agents</a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <ul role="list">
                    <li>
                      <span className="font-semibold">Company</span>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Blogs</a>
                    </li>
                    <li>
                      <a href="/">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <ul role="list">
                    <li>
                      <span className="font-semibold">Trust Centre</span>
                    </li>
                    <li>
                      <a href="/">Become an Ambassador</a>
                    </li>
                    <li>
                      <a href="/">Become a Partner</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Cookie Statement</a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul role="list">
                    <li>
                      <span className="font-semibold">Contact</span>
                    </li>
                    <li>
                      <a href="/">
                        Suite No. 1445 17 Gould Road, Herston, QLD 4006,
                        Australia
                      </a>
                    </li>
                    <li>
                      <a href="/">Ph: +610755289947</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-4">
        <p className="text-center">©2024 Remote Office</p>
      </div>
    </div>
  )
}

export default Footer
