import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { carouselProducts } from "../../data/home_page_carousel";

type FeaturedSlide = (typeof carouselProducts)[0];

const LandingPage = () => {
  return (
    <section className="relative h-[86vh] max-md:h-[75vh] w-full overflow-hidden bg-surface-container-lowest pt-">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 6000,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        className="h-full"
      >
        {carouselProducts.map((slide: FeaturedSlide) => (
          <SwiperSlide key={slide.id}>
            {/* <div className="absolute inset-0 z-0">
              <img alt={slide.alt} src={slide.image} />
              <div className="absolute inset-0 "></div>
            </div> */}
              <div
          className="bg-cover bg-center relative h-[85vh] max-md:h-[75vh] w-full overflow-hidden  pb- "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${slide.image})`,
          }}
        >

            <div className="relative z-10 flex flex-col justify-center  h-full px-6 md:px-16 max-w-360 mx-auto">
              <span className="font-sm text-slate-300   tracking-[0.3em] uppercase mb-4">
                {slide.title}
              </span>
              <h2 className=" text-5xl  max-md:text-4xl font-extrabold mb-6  leading-[1.1] max-w-3xl text-white">
                {/* The Convergence of{" "}
                <span className="text-nav-blue-active italic">Precision</span>{" "}
                &amp; Style */}
                {slide.productName}
              </h2>
              <p className="font-body-lg text-base md:text-body-lg text-white/80 max-w-lg mb-10">
                {slide.description}
              </p>
              <div className="flex gap-4 max-md:flex-co">
                <button className="px-5 py-2.5 bg-nav-blue-active cursor-pointer text-white font-label-md rounded-lg shadow-xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 font-semibold">
                  {slide.cta}
                </button>
                <button className="px-5 py-2.5 bg-white cursor-pointer font-label-md rounded-lg hover:bg-surface-container-low transition-all active:scale-95 font-semibold">
                  Explore Categories
                </button>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LandingPage;
