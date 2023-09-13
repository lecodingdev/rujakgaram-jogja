import FindCard from "./FindCard";

function Find() {
  return (
    <section className="w-full bg-rose-200">
      <div className="pt-12 md:pt-10 mx-10 pb-16">
        <div className="text-3xl font-bold">
          <h3>Find us</h3>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 mt-0">
            <FindCard />
        </div>
      </div>
    </section>
  );
}

export default Find;
