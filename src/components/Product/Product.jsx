import ProductList from "./ProductList";

function Product() {
  return (
    <section className="w-full">
      <div className="pt-20 md:pt-0 mx-8">
        <div className="text-3xl font-bold mb-8 flex justify-between items-center">
          <h3>Our Product</h3>
        </div>
        <div id="slider" className="flex overflow-hidden relative gap-10 mb-5">
          <ProductList />
        </div>
      </div>
    </section>
  );
}

export default Product;
