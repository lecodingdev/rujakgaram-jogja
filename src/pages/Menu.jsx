import MenuCard from "../components/Menu/MenuCard";

function MenuPage() {
  return (
    <div className="w-full">
      <div className="pt-10 md:pt-16 mx-8 pb-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold uppercase">Menu Rujakgaram Jogja</h3>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 mt-0">
          <MenuCard />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
