import shopeeDesktop from "../../assets/shopee-logo.png"
import shopeeMobile from "../../assets/shopee-logo-0.png"
import {Link} from "react-router-dom"

function OtherOption() {
  return (
    <section className="w-full mt-10">
      <div className="pt-12 md:pt-10 mx-10 pb-16 flex justify-around items-center">
        <div className="w-1/2">
          <h3 className="text-3xl font-bold">Out of Area?</h3>
          <p>No Need to Worry!</p>
          <p className="">Order through our <span>official store</span> </p>
        </div>
        <div className="w-1/2 cursor-pointer">
            <Link to="https://shopee.co.id/bernadeteayu" target="_blank">
            <img className="block md:hidden" src={shopeeMobile} alt="" />
            <img className="hidden md:block" src={shopeeDesktop} alt="" />
            </Link>
        </div>
      </div>
    </section>
  )
}

export default OtherOption