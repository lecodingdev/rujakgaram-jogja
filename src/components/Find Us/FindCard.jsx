import { cardList } from "./FindList";

export default function FindCard() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-md w-full"
        >
          <img src={card.img} alt="box_img" className=" w-[75px] mb-4" />
          <a href={card.link}></a>
          <p className=" text-[24px] font-bold uppercase mb-5">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}
