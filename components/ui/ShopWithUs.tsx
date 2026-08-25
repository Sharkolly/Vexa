import { Truck, ShieldCheck, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    desc: "Nationwide shipping within 24-72 hours right to your doorstep.",
    icon: Truck,
  },
  {
    title: "Secure Payments",
    desc: "Protected checkout powered by modern, trusted payment gateways.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    desc: "Dedicated customer service team standing by whenever you need help.",
    icon: Headphones,
  },
  {
    title: "Easy Returns",
    desc: "Hassle-free 7-day return policy on all eligible marketplace items.",
    icon: RefreshCw,
  },
];

const ShopWithUs = () => {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 border-y border-slate-200/60">
      <div className="w-[90%] max-md:w-[95%] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why Shop With Us?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium">
            Everything you need for a seamless, trusted online shopping experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 text-center shadow-xs hover:shadow-xl hover:border-emerald-200/80 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                {/* Icon Wrapper with Hover Inversion */}
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shadow-xs">
                  <IconComponent className="w-7 h-7 stroke-[1.75]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopWithUs;
