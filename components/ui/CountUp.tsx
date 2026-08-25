import { useEffect, useRef, useState } from "react";
import { Users, Star, PackageCheck, Headphones } from "lucide-react";

interface StatItem {
  icon: typeof Users;
  targetValue: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    icon: Users,
    targetValue: 20000,
    suffix: "+",
    label: "Happy Customers",
    sublabel: "Across Nigeria",
  },
  {
    icon: Star,
    targetValue: 99,
    suffix: "%",
    label: "Positive Reviews",
    sublabel: "5-star rating average",
  },
  {
    icon: PackageCheck,
    targetValue: 10000,
    suffix: "+",
    label: "Products",
    sublabel: "In verified stock",
  },
  {
    icon: Headphones,
    targetValue: 24,
    suffix: "/7",
    label: "Customer Support",
    sublabel: "Always here for you",
  },
];

// Lightweight Animated Counter Component
const AnimatedStatCard = ({
  stat,
  isVisible,
}: {
  stat: StatItem;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);
  const IconComponent = stat.icon;

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.targetValue;
    const duration = 2000; // 2 seconds animation
    const increment = end / (duration / 16); // ~60 FPS

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, stat.targetValue]);

  // Format large numbers (e.g. 20000 -> 20K)
  const formatValue = (num: number) => {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}K`;
    }
    return num.toString();
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 text-center shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
      {/* Icon Badge */}
      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shadow-xs">
        <IconComponent className="w-6 h-6 stroke-[2]" />
      </div>

      {/* Number Display */}
      <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-0.5">
        <span>{formatValue(count)}</span>
        <span className="text-emerald-700">{stat.suffix}</span>
      </div>

      {/* Title & Subtext */}
      <p className="mt-2 text-sm sm:text-base font-bold text-slate-800">
        {stat.label}
      </p>
      <p className="text-xs text-slate-500 font-medium mt-0.5">
        {stat.sublabel}
      </p>
    </div>
  );
};

const CountUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger animation once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="bg-slate-50/80 rounded-3xl border border-slate-200/70 max-md:py-4.5 max-xs:px-2 max-md:px-4  sm:p-10 lg:p-12 shadow-xs">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
            Trusted By Thousands Nationwide
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {STATS.map((stat) => (
            <AnimatedStatCard
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountUpPage;
