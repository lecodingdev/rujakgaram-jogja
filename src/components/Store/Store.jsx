import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/navbar.png";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigationContext } from "../context";
import scrollToTop from "../ScrollToTop";

function Store() {
  const { setSelectedNavLink } = useNavigationContext();

  return (
    <section className="w-full">
      <div className="pt-12 md:pt-10 mx-10 pb-16">
        <div>
          <h3 className="text-3xl font-bold">Our Store</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <Link
            to="https://goo.gl/maps/H4mQdX6CfFTqFA3m9"
            target="_blank"
            className="gap-7 h-full mb-5 grayscale hover:grayscale-0"
          >
            <div className="relative w-80 h-80">
              <div className="ease-in duration-[0.4s] p-6 ">
                <img src={logo} alt="" />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-center">Wahid Hasyim</p>
                  <div className="flex items-center gap-2 justify-center">
                    <a
                      href="https://goo.gl/maps/H4mQdX6CfFTqFA3m9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaMapMarkerAlt
                        size="20px"
                        color="red"
                        className="cursor-pointer animate-bounce"
                      />
                    </a>
                    <p>Jl Wahid Hasyim no 173</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://goo.gl/maps/bANV6GBdMVG4fXoG7"
            target="_blank"
            className="gap-7 h-full grayscale hover:grayscale-0"
          >
            <div className="relative w-80 h-80">
              <div className="ease-in duration-[0.4s] p-6 ">
                <img src={logo} alt="" />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-center">Monjali</p>
                  <div className="flex items-center gap-2 justify-center">
                    <a
                      href="https://goo.gl/maps/bANV6GBdMVG4fXoG7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaMapMarkerAlt
                        size="20px"
                        color="red"
                        className="cursor-pointer animate-bounce"
                      />
                    </a>
                    <p>Jl Monjali no 13D</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-24 text-center cursor-pointer flex justify-center">
          <Link
            onClick={() => {
              setSelectedNavLink("/store");
              scrollToTop();
            }}
            className="relative flex -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
            to="/store"
          >
            More Info <BsArrowRightShort size="26px" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Store;
