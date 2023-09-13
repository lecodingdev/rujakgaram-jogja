import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../Button";
import logo from "../../assets/navbar.png";

function Store() {
  return (
    <section className="w-full">
      <div className="pt-12 md:pt-10 mx-10 pb-16">
        <div>
          <h3 className="text-3xl font-bold">Our Store</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center ">
          <div className="gap-7 h-full mb-5 grayscale hover:grayscale-0">
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
          </div>
          <div className="gap-7 h-full grayscale hover:grayscale-0">
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
          </div>
        </div>
        <div className="mt-24 text-center cursor-pointer flex justify-center">
            <Button
                text="more info"
                goTo="/store"
              />
        </div>
      </div>
    </section>
  );
}

export default Store;
