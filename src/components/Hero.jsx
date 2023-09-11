import logo from "../assets/navbar.png";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-full mb-14">
      <div className="pt-28 md:pt-5 mx-8">
        <div className="flex flex-wrap">
          <div className="w-full self-center text-center relative md:w-1/2 z-10">
            <h1 className="text-4xl">Rujakgaram Jogja</h1>
            <p className="text-sm">Bikin Meler, Bikin Melek</p>
            <div className="pt-5">
            <p className="text-xl font-bold uppercase">Business Hours</p>
            <p>Open Daily</p>
            <p>11.00 - 21.00 </p>
            </div>
            <div className="flex mt-5 justify-center">
              <div className="flex text-center items-center gap-4 cursor-pointer">
                <a
                  href="https://instagram.com/rujakgaram_jogja"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size="28px" color="red" />
                </a>
                <a
                  href="https://wa.me/6287711931345"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size="28px" color="green" />
                </a>
                <a
                  href="https://goo.gl/maps/H4mQdX6CfFTqFA3m9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaMapMarkerAlt size="28px" color="red" className="animate-bounce" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute opacity-20 top-20 md:top-0 md:opacity-100 md:w-1/2 md:relative">
            <img
              src={logo}
              alt=""
              className="sm:filter grayscale md:filter-none"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
