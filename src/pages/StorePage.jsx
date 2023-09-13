import StoreCard from "../components/Store/StoreCard";

function StorePage() {
  return (
    <div className="w-full">
      <div className="pt-10 md:pt-5 mx-8 pb-16">
        <div>
          <h3 className="text-3xl font-bold">Store List</h3>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 mt-0">
          <StoreCard />
        </div>
      </div>
    </div>
  );
}

export default StorePage;
