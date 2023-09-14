import { storeList } from "./StoreData";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function StoreCard() {
  return (
    <>
      {storeList.map((store, id) => (
        <div
          key={id}
          className="flex flex-col bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl w-full"
        >
          <p className=" text-xl font-bold uppercase pt-5">{store.title}</p>
          <p className="text-xs pb-10 text-slate-500">{store.address}</p>
          <p className="text-sm uppercase mb-2">Find us</p>
          <div className="flex text-center items-center gap-8 cursor-pointer pb-10">
            <a href={store.sosmed} target="_blank" rel="noreferrer">
              <FaInstagram size="38px" color="red" />
            </a>
            <a href={store.contact} target="_blank" rel="noreferrer">
              <FaWhatsapp size="38px" color="green" />
            </a>
            <a href={store.location} target="_blank" rel="noreferrer">
              <FaMapMarkerAlt size="38px" color="red" className="animate-bounce" />
            </a>
          </div>
          <p className="text-sm uppercase mb-4">Click to order online</p>
          <div className="flex justify-around gap-14 cursor-pointer">
            <Link to={store.link1}>
            <img src={store.img1} alt="box_img" className=" w-[75px] mb-4" />
            </Link>
            <Link to={store.link2}>
            <img src={store.img2} alt="box_img" className=" w-[75px] mb-4" />
            </Link>
            <Link to={store.link3}>
            <img src={store.img3} alt="box_img" className=" w-[75px] mb-4" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default StoreCard;
