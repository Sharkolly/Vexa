import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

import CountUpPage from "../../components/ui/CountUp";
import Categories from "../../components/ui/Categories";
import ShopWithUs from "../../components/ui/ShopWithUs";
import FeaturedProduct from "../../components/ui/FeaturedProduct";

interface HeroSlide {
  id: number;
  badge: string;
  badgeBg: string;
  title: string;
  highlightText: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "UP TO 70% OFF",
    badgeBg: "bg-rose-500",
    title: "Discover The Best Deals On",
    highlightText: "Premium Products",
    description:
      "Shop trending fashion, tech gadgets, and lifestyle essentials with secure payments and fast delivery.",
    primaryCtaText: "Shop Now",
    primaryCtaLink: "/shop",
    secondaryCtaText: "Explore Deals",
    secondaryCtaLink: "/search?discount=true",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 2,
    badge: "NEW SEASON ARRIVALS",
    badgeBg: "bg-emerald-600",
    title: "Elevate Your Style With Our",
    highlightText: "Latest Collection",
    description:
      "Upgrade your daily wardrobe and lifestyle with handpicked top-tier items curated for modern living.",
    primaryCtaText: "Browse Collection",
    primaryCtaLink: "/shop?sort=newest",
    secondaryCtaText: "View Categories",
    secondaryCtaLink: "/shop",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 3,
    badge: "EXCLUSIVE ELECTRONICS",
    badgeBg: "bg-amber-500 text-slate-950",
    title: "Cutting-Edge Tech &",
    highlightText: "Smart Devices",
    description:
      "Unbeatable prices on original accessories, smart appliances, and sleek audio equipment.",
    primaryCtaText: "Explore Tech",
    primaryCtaLink: "/search?category=Electronics",
    secondaryCtaText: "Learn More",
    secondaryCtaLink: "/services",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1800&auto=format&fit=crop",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  }, []);

  // Auto-play interval switching every 4 seconds (4000ms)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16">
      {/* Announcement Bar */}
      <div className="bg-emerald-900 text-emerald-100 text-center text-xs sm:text-sm font-semibold py-2.5 px-4 flex items-center justify-center gap-2 tracking-wide border-b border-emerald-800">
        <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
        <span>Free Nationwide Delivery On Orders Above ₦100,000</span>
      </div>

      {/* Hero Carousel Section */}
      <section
        className="relative w-full h-[540px] sm:h-[600px] lg:h-[640px] overflow-hidden bg-slate-950 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Featured Promotions Carousel"
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              {/* Background Image & Overlays */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-10000 ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30" />
              <div className="absolute inset-0 bg-slate-950/20" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <div className="max-w-2xl sm:max-w-3xl">
                    {/* Badge */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg mb-6 transition-all duration-700 transform ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      } ${slide.badgeBg}`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Dynamic Title */}
                    <h1
                      className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-4 transition-all duration-700 delay-100 transform ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.title}{" "}
                      <span className="text-emerald-400 block sm:inline">
                        {slide.highlightText}
                      </span>
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-sm sm:text-lg text-slate-200 leading-relaxed max-w-xl mb-8 transition-all duration-700 delay-200 transform ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.description}
                    </p>

                    {/* Call to Actions */}
                    <div
                      className={`flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-700 delay-300 transform ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      <Link to={slide.primaryCtaLink}>
                        <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer">
                          <span>{slide.primaryCtaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>

                      <Link to={slide.secondaryCtaLink}>
                        <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 cursor-pointer">
                          {slide.secondaryCtaText}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Manual Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/40 hover:bg-emerald-700 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer active:scale-90"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/40 hover:bg-emerald-700 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer active:scale-90"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Pagination Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? "w-8 bg-emerald-500 shadow-sm"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Main Content Sections */}
      <CountUpPage />
      <Categories />
      <FeaturedProduct />
      <ShopWithUs />
    </div>
  );
};

export default Home;
