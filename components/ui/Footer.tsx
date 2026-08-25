import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowForward, MdCheckCircle } from "react-icons/md";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

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
    { name: "Vexa Membership", path: "/services" },
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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="col-span-full md:col-span-4 flex flex-col justify-between">
            <div>
              <NavLink to="/" className="inline-block">
                <h2 className="text-3xl font-black tracking-wider text-white hover:text-emerald-400 transition-colors">
                  VEXA<span className="text-emerald-500">.</span>
                </h2>
              </NavLink>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-4">
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
          <p>© {new Date().getFullYear()} VEXA GLOBAL. All rights reserved.</p>

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
