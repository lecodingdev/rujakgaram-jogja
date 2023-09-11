import ProductList from "./ProductList";
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs"

function Product() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <section className="w-full">
      <div className="pt-36 md:pt-0 mx-8">
        <div className="text-2xl font-bold mb-8 flex justify-between items-center">
          <h3>Our Product: </h3>
          <div className="flex gap-2 cursor-pointer">
            <button onClick={slideLeft}>
              <BsFillArrowLeftSquareFill size="28px" />
            </button>
            <button  onClick={slideRight}>
              <BsFillArrowRightSquareFill size="28px" />
            </button>
          </div>
        </div>
        <div id="slider" className="flex overflow-x-scroll overflow-hidden relative gap-10 mb-5">
          <ProductList />
        </div>
      </div>
    </section>
  );
}

export default Product;
