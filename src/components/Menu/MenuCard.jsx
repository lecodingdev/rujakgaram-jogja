import { useState } from "react";
import { menuList } from "./MenuData";

function MenuCard() {
  const [selectedCategory, setSelectedCategory] = useState("Small");
  const filteredMenu = menuList.filter(
    (menu) => menu.category === selectedCategory
  );

  return (
    <div className="pt-10 px-4 md:flex">
      <div className="w-full md:w-28">
        <ul className="flex md:flex-col gap-5 justify-around pb-5">
          <li className="flex w-14 h-10 text-center justify-center">
            <button
              className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              onClick={() => setSelectedCategory("Small")}
            >
              Small
            </button>
          </li>
          <li className="flex w-14 h-10 text-center justify-center">
            <button
              className="relative border-2 border-gray-800 bg-transparent py-2.5 px-9 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              onClick={() => setSelectedCategory("Big")}
            >
              Big
            </button>
          </li>
          <li className="flex w-14 h-10 text-center justify-center">
            <button
              className="relative border-2 border-gray-800 bg-transparent py-2.5 px-6 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              onClick={() => setSelectedCategory("Other")}
            >
              Other
            </button>
          </li>
        </ul>
      </div>

      <div className="w-full md:flex md:gap-5 overflow-x-scroll overflow-hidden relative">
        {filteredMenu.map((menu, id) => (
          <div
            key={id}
            className="flex flex-col bg-white justify-center pb-6 px-8 mt-5 md:mt-0 text-left items-center rounded-tl-[35px] rounded-br-[35px] shadow-md hover:shadow-xl"
          >
            <p className=" text-[24px] font-bold uppercase mb-5 text-left">{menu.name}</p>
            <p className="text-[15px] font-medium leading-2 w-full">
              Rp {menu.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
