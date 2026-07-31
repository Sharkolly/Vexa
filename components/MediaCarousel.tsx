// import React, { useState } from "react";

// export interface MediaItem {
//   id: string | number;
//   type: "image" | "video";
//   src: string;
//   alt?: string;
//   poster?: string;
// }

// // Sample fallback media matching your requirements (4 images, 1 video)
// const DEFAULT_MEDIA: MediaItem[] = [
//   {
//     id: 1,
//     type: "image",
//     src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
//     alt: "Product view 1",
//   },
//   {
//     id: 2,
//     type: "image",
//     src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80",
//     alt: "Product view 2",
//   },
//   {
//     id: 3,
//     type: "image",
//     src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
//     alt: "Product view 3",
//   },
//   {
//     id: 4,
//     type: "image",
//     src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80",
//     alt: "Product view 4",
//   },
//   {
//     id: 5,
//     type: "video",
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//   },
// ];

// type CarouselType = {
//   images: string[];
//   video: string | File | null | undefined;
// };

// export const MediaCarousel = ({
//   //   media = DEFAULT_MEDIA,
//   images,
//   video,
// }: CarouselType) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   const media = [...images, video];
//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//     const resolveVideo = (video: string | File | null | undefined) =>
//     typeof video === "string"
//       ? video
//       : video instanceof File
//         ? URL.createObjectURL(video)
//         : undefined;

//   return (
//     <div className="relative w-full max-w-4xl mx-auto group">
//       {/* 1. Main Viewport Container */}
//       <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-square md:aspect-video shadow-xl">
//         {/* Slider Track */}
//         <div
//           className="flex w-full h-full transition-transform duration-500 ease-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {media.map((item, index) => (
//             <div
//               key={index}
//               /* 
//                 CRITICAL TAILWIND CLASSES FOR 1-ITEM AT A TIME:
//                 - 'w-full': Forces child to span 100% width of container
//                 - 'flex-shrink-0': Prevents flex box from squeezing slides together
//                 - 'min-w-full': Guarantees 1 slide width across all screen sizes
//               */
//               className="w-full h-full flex-shrink-0 min-w-full flex items-center justify-center relative"
//             >
//               {typeof item === "string" && item?.includes("/image/upload") ? (
//                 <img
//                   src={item}
//                   alt={item || `Slide ${index}`}
//                   className="w-full h-full object-cover select-none"
//                 />
//               ) : (
//                 <video
//                   controls
//                   playsInline
//                   preload="metadata"
//                   //   poster={item.poster}
//                   className="w-full h-full object-contain bg-black"
//                 >
//                   <source src={resolveVideo(item)} type="video/mp4" />
//                   Your browser does not support HTML5 video.
//                 </video>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* 2. Previous Arrow Button */}
//         <button
//           onClick={prevSlide}
//           type="button"
//           aria-label="Previous Slide"
//           className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:outline-none"
//         >
//           <svg
//             className="w-5 h-5 md:w-6 md:h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2.5}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         {/* 3. Next Arrow Button */}
//         <button
//           onClick={nextSlide}
//           type="button"
//           aria-label="Next Slide"
//           className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:outline-none"
//         >
//           <svg
//             className="w-5 h-5 md:w-6 md:h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2.5}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>

//         {/* 4. Slide Counter Badge (Top Right) */}
//         <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide">
//           {currentIndex + 1} / {media.length}
//         </div>
//       </div>

//       {/* 5. Dots / Thumbnail Indicators below slider */}
//       <div className="flex items-center justify-center gap-2 mt-4">
//         {media.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             type="button"
//             aria-label={`Go to slide ${index + 1}`}
//             className={`transition-all duration-300 rounded-full ${
//               currentIndex === index
//                 ? "w-8 h-2.5 bg-indigo-600"
//                 : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };



import React from "react";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css"; // Required CSS file

// 1. Define responsive breakpoints
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, // Number of items to show at once
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const MultiCarouselExample: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container rounded-2xl overflow-hidden shadow-lg"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        showDots={true}
      >
        <div className="bg-indigo-600 text-white h-64 flex items-center justify-center text-2xl font-bold">
          Slide 1
        </div>
        <div className="bg-emerald-600 text-white h-64 flex items-center justify-center text-2xl font-bold">
          Slide 2
        </div>
        <div className="bg-purple-600 text-white h-64 flex items-center justify-center text-2xl font-bold">
          Slide 3
        </div>
        <div className="bg-rose-600 text-white h-64 flex items-center justify-center text-2xl font-bold">
          Slide 4
        </div>
      </Carousel>
    </div>
  );
};