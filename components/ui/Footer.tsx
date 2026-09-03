import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowForward, MdCheckCircle } from "react-icons/md";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

// SVG Logo Component (Configured for Dark Footer Background)
const FexaLogo = ({
  isDark = true,
  className = "h-10 sm:h-12 w-auto",
}: {
  isDark?: boolean;
  className?: string;
}) => (
  <svg
    viewBox="0 0 320 90"
    className={`${className} transition-transform group-hover:scale-105`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="fexaGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="50%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    {/* E-Commerce Shopping Bag & 'F' Mark */}
    <g transform="translate(5, 0) scale(0.65)">
      <path
        d="M 46 42 C 46 22, 84 22, 84 42"
        fill="none"
        stroke="url(#fexaGradFooter)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <rect x="25" y="42" width="18" height="85" rx="6" fill="url(#fexaGradFooter)" />
      <path
        d="M 43 42 H 105 C 111 42, 114 48, 110 54 L 98 72 C 95 76, 89 78, 82 78 H 43 V 42 Z"
        fill="url(#fexaGradFooter)"
      />
      <path
        d="M 43 90 H 88 C 94 90, 97 96, 93 102 L 84 114 C 81 118, 75 120, 68 120 H 43 V 90 Z"
        fill="url(#fexaGradFooter)"
        opacity="0.9"
      />
      <circle cx="112" cy="30" r="6" fill="#34D399" />
    </g>
    {/* Typography */}
    <g transform="translate(100, 62)">
      <text
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="52"
        letterSpacing="2"
        fill={isDark ? "#F8FAFC" : "#0F172A"}
      >
        FEX<tspan fill="url(#fexaGradFooter)">A</tspan>
      </text>
    </g>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  const shopLinks = [
    { name: "Cars", path: "/search?category=automobile" },
    { name: "Phones & Laptops", path: "/search?category=electronics" },
    { name: "Women's Fashion", path: "/search?category=fashion" },
    { name: "Games", path: "/search?category=gaming" },
  ];

  const serviceLinks = [
    { name: "Graphics Design", path: "/services" },
    { name: "Web Development", path: "/services" },
    { name: "Copywriting", path: "/services" },
    { name: "Fexa Membership", path: "/services" },
    { name: "Support Center", path: "/services" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Accessibility", path: "/accessibility" },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="w-[90%] max-md:w-[95%] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="col-span-full md:col-span-4 flex flex-col justify-between">
            <div>
              <NavLink to="/" className="inline-block group" aria-label="FEXA Home">
                <FexaLogo isDark={true} />
              </NavLink>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg max-md:w-full mt-4">
                Redefining modern e-commerce through technical precision and editorial style. Your premier destination for curated tech, fashion, and digital services.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-700 hover:border-emerald-600 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop Column */}
          <div className="col-span-6 sm:col-span-3 md:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Shop
            </h5>
            <ul className="space-y-3 text-sm">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-slate-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-6 sm:col-span-3 md:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Services
            </h5>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-slate-400 hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-full md:col-span-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Newsletter
            </h5>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Subscribe to receive first access to limited product drops, discount codes, and insider updates.
            </p>

            {status === "success" ? (
              <div className="flex items-center gap-2.5 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm animate-in fade-in duration-300">
                <MdCheckCircle className="text-xl shrink-0 text-emerald-400" />
                <span>You're subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all pr-12"
                    disabled={status === "loading"}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="absolute right-1.5 p-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center cursor-pointer active:scale-95"
                    aria-label="Subscribe to newsletter"
                  >
                    {status === "loading" ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <MdArrowForward className="text-lg" />
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-xs text-rose-500 mt-1">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FEXA GLOBAL. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="hover:text-slate-300 transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
