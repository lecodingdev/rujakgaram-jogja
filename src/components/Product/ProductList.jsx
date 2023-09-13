import { items } from "./ProductData"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper/modules";

function ProductList() {
    const filteredItems = items.filter((item) => item.id >= 1);
  return (
    <>
    <Swiper  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 2000, pauseOnMouseEnter: true}}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true, hide: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  1380: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}>

    {filteredItems.map((item) => (
      <SwiperSlide key={item.id} className="flex flex-col items-center">
          <div className="w-80 h-80">
            <img src={item.img} alt="product" className="w-full h-full object-cover rounded-t-[35px]"/>
          </div>
          <div className="flex flex-col justify-center items-start pb-10">
            <p className="text-lg">{item.description}</p>
          </div>
      </SwiperSlide>
    ))}
    </Swiper>
  </>
  )
}

export default ProductList