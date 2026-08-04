import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useState } from "react";
import type { AllProductType } from "../../types/product.types";

const Carousel = ({ product }: { product: AllProductType | null }) => {
 const fallback = URL.createObjectURL(product?.images[0]) || undefined
  const resolveImage = (
    img: string | File | null | undefined,
    //fallback: string | undefined
    // fallback: string
  ) =>
     typeof img === "string"
    ? img
    : img instanceof File
        ? URL.createObjectURL(img)
       : fallback;
    

  const resolveVideo = (video: string | File | null | undefined) =>
    typeof video === "string"
      ? video
      : video instanceof File
        ? URL.createObjectURL(video)
        : undefined;

  const [carouselNumber, setCarouselNumber] = useState(0);

 // const media = [...(product?.images ?? []), product?.video ?? null].filter((item) => item !== null && item !== undefined && item !== "");
const media = [...(product?.images ?? []), product?.video ?? null]
  const mediaLength = media.length ?? 0;

  const nextSlide = () => {
    if (mediaLength === 0) return;

    if (carouselNumber >= mediaLength - 1) {
      setCarouselNumber(0);
      return;
    }

    setCarouselNumber((prev) => prev + 1);
    if (carouselNumber === mediaLength - 1 && !product?.video) {
      setCarouselNumber(0);
    }
  };

  const prevSlide = () => {
    if (mediaLength === 0) return;

    if (carouselNumber <= 0) {
      setCarouselNumber(mediaLength - 1);
      return;
    }
    setCarouselNumber((prev) => prev - 1);
    if (carouselNumber === mediaLength - 1 && !product?.video) {
      setCarouselNumber(0);
    }

  };

  return (
    <div className="basis-[55%] max-md:mb-10  relative ">
      <div className="w-full h-fit ">
        <div className="flex items-center gap-3 ">
          <div
            onClick={prevSlide}
            className="absolute cursor-pointer top-[50%] left-[2%] p-5 max-md:p-0   "
          >
            <MdNavigateBefore className="w-12  h-12 max-md:w-10 max-md:h-10 bg-white rounded-full" />
          </div>
          <div className="rounded-md w-full h-full  overflow-hidden  cursor-pointer   transition-all">
            {carouselNumber === mediaLength - 1 && media[carouselNumber] ? (
              //   <div className="w-full h-full rounded-xl overflow-hidden shadow-sm">
              <video
                className="w-full h-160 max-md:h-130 object-cover"
                controls
                //   style={{ marginTop: "10px" }}
              >
                <source src={resolveVideo(media[carouselNumber])} />
                {/* <source src={resolveVideo(updatedMedia[carouselNumber])} /> */}
              </video>
            ) : (
              //   </div>
              <img
                className="w-full h-160 max-md:h-130 object-center  object-cover"
                data-alt={product?.description}
                src={resolveImage(
                  //   product?.images?.[carouselNumber] ?? undefined,
                  media[carouselNumber], 
                  //media[0] 
                  // 'https://lh3.googleusercontent.com/aida-public/AB6AXuADpcuApAMNwgTNOJuk0lE8Missb02pVKQbFi3oA_cyXAssxt5GcreNbWEFuDdo4ZVW3LaDWWC7jxoT60kK6VSslKL8LcCDS7YHvcqfjYwISqnsTqT18kOpV-eGpJUAh3E_dpheOaKTQ9pFzN_beS7ZboTw9R6UnBBACBqu5Fdhs6dfAm5WVDV5yVjCh_6J6k5_7MlSNhMR2J9mqHBdTQ9DkQQ8E7sDsyt9yKEydvb0tcllN8Z9V7Cv7FkEhYz16yRcbeyPENlTjjY'
                  // updatedMedia[carouselNumber] ?? undefined,
                   )}
              />
            )}
          </div>

          <div
            onClick={nextSlide}
            className="absolute top-[50%] cursor-pointer right-[2%] max-md:p-0 p-5 "
          >
            <MdNavigateNext className="w-12  h-12 max-md:w-10 max-md:h-10 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
