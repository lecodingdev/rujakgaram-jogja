import { Link } from "react-router-dom";
import logo from "../assets/navbar.png";


export default function Home() {
  return (
    <main className="w-full">
      <div className="pt-20 md:pt-0 mx-8">
        <div className="flex flex-wrap">
          <div className="w-full self-center text-center relative md:w-1/2">
            <h1 className="text-4xl font-bold">Rujakgaram Jogja</h1>
            <p className="text-sm">Bikin Meler, Bikin Melek</p>
            <div className="pt-5">
            <p className="text-xl font-bold uppercase">Business Hours</p>
            <p>Open Daily</p>
            <p>11.00 - 21.00 </p>
            </div>
            <div className="flex pt-10 justify-center">
              <div className="flex text-center items-center gap-4 cursor-pointer">
                <Link to="/store" className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">Store</Link>
                <Link to="/menu" className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">Menu</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:top-0 md:w-1/2 md:flex">
            <img
              src={logo}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
