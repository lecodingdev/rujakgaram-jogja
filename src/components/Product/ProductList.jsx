import { items } from "./ProductData"

function ProductList() {
    const filteredItems = items.filter((item) => item.id >= 1);
  return (
    <>
    {filteredItems.map((item) => (
      <div key={item.id} className="border flex flex-col items-center hover:border-black">
          <div className="w-80 h-80">
            <img src={item.img} alt="product" className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col justify-center items-start mb-5">
            <p className="text-lg">{item.description}</p>
            <p className="">Rp {item.price}</p>
          </div>
      </div>
    ))}
  </>
  )
}

export default ProductList