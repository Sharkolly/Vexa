import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContextStore } from "../../../store/useAuthContext";
import API from "../../../api/api";
import { useState } from "react";
import type { AxiosError } from "axios";

const SignUp = () => {
  const {
    emailOnChange,
    passwordOnChange,
    firstNameOnChange,
    lastNameOnChange,
    email,
    password,
    firstName,
    lastName,
  } = useAuthContextStore();

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      const { data } = await API.post(
        "/user/signup",
        { email, password, firstName, lastName },
        {
          withCredentials: true,
        },
      );      
      localStorage.setItem("token", data?.token);
      setMessage(data?.message || "Account created successfully");
      navigate("/login");
    } catch (error: unknown) {
      const err = error as AxiosError<{
        message: string;
        status: boolean;
        type?: string;
      }>;

      // toast.error(message, { position: "top-center" });
      setError(err.response?.data?.type || "");
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsFetching(false);
      setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000);
    }
  };
  return (
    <div>
      <div className="antialiased selection:bg-primary-fixed selection:text-on-primary-fixed overflow-hidden">
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
          <section className="relative hidden md:flex items-center justify-center bg-surface-container-highest overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                alt="Vexa Editorial Campaign"
                className="w-full h-full object-cover"
                data-alt="A high-end cinematic product shot of sleek luxury sneakers arranged artistically on a minimalist stone pedestal. The lighting is soft and directional, casting long, elegant shadows across a pristine white gallery space. The color palette is dominated by muted slate tones and crisp whites, reflecting a modern corporate luxury aesthetic. The mood is sophisticated, exclusive, and technologically advanced, emphasizing craftsmanship and premium materials."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1gbYNhY5fJhQPpZLJGbKEER6TcWWPC7XFK1585zQMysILuBC-4OQKEezRXtUAynkJzQhBCB8upGBY6cG8lkqM4xuSP1VeFXDNhiqgGltkOElT11t6nc467PrSVl_f94lZPVpEhU7sQ2m1vZNJCKuMakZ-_Lnd95iM7MuSqKuGEWMpByjTe3U6azP1gmIjG-fm-HTYPgw9XayPDjiju5ANULIUgtWERI6fJ-mcfmMEpYJ6quGRX_DpNhqBUOMuk9zG3aQWBPQU_zE"
              />
            </div>

            <div className="relative z-10 p-16 max-lg:p-10 w-full h-full flex flex-col justify-between">
              <div className="flex items-center gap-2 max-md:hidden">
                <span className="text-5xl font-black tracking-tighter text-white">
                  VEXA
                </span>
              </div>
              <div className="max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl ">
                <h2 className="font-display-xl text-4xl text-white mb-3 font-bold leading-tight">
                  Elevate Every Step.
                </h2>
                <p className="font-body-lg text-body-lg text-white/90">
                  Join our exclusive community of innovators and trendsetters.
                  Experience the future of premium retail.
                </p>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface overflow-y-auto max-lg:w-[90%] max-lg:mx-auto">
            <div className="w-full max-w-md space-y-stack-lg py-12 max-md:pt-5">
              <div className="md:hidden flex justify-center mb-stack-lg">
                <span className="text-2xl font-black tracking-tighter text-primary max-md:hidden">
                  Vexa
                </span>
              </div>
              <header className="space-y-stack-sm">
                <h1 className="font-semibold text-3xl pb-3 text-on-surface">
                  Create your account
                </h1>
                <p className="font-body-md text-body-md text-slate-500 pb-7 ">
                  Join Vexa for a personalized shopping experience and exclusive
                  early access.
                </p>
              </header>
              <form
                className="space-y-stack-md"
                onSubmit={(e) => submitForm(e)}
              >
                <div className="space-y-1.5 mb-5">
                  {" "}
                  <label className="font-medium text-label-md text-slate-700 block">
                    First name
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      {/* person */}
                    </span>
                    <input
                      onChange={(e) => firstNameOnChange(e)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-400 rounded-lg font-medium focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      id="first_name"
                      name="first_name"
                      placeholder="Enter your first name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 mb-5">
                  {" "}
                  <label className="font-medium text-label-md text-slate-700 block">
                    last name
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      {/* person */}
                    </span>
                    <input
                      onChange={(e) => lastNameOnChange(e)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-400 rounded-lg font-medium focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      id="last_name"
                      name="last_name"
                      placeholder="Enter your last name"
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 mb-5">
                  <label className="font-medium text-label-md text-slate-700 block">
                    Email address
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      {/* mail */}
                    </span>
                    <input
                      onChange={(e) => emailOnChange(e)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-400  rounded-lg font-medium focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      type="email"
                    />
                  </div>
                  <p className="text-slate-700 mt-2 font-medium">
                    {error === "EMAIL" && message}
                  </p>
                </div>

                <div className="space-y-1.5 mb-5">
                  <label className="font-medium text-slate-700 block">
                    Password
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      {/* lock */}
                    </span>
                    <input
                      onChange={(e) => passwordOnChange(e)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                  <p className="text-red-500 mt-2 font-medium">
                    {/* Must be at least 8 characters. */}

                    {error === "PASSWORD" && message}
                  </p>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center mt-1">
                      <input
                        className="peer h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary transition-all"
                        name="newsletter"
                        type="checkbox"
                        // checked={false}
                      />
                    </div>
                    <span className="font-body-md text-slate-700 select-none">
                      I'd like to receive exclusive offers and news via email.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center mt-1">
                      <input
                        className="peer h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary transition-all"
                        name="terms"
                        // required=""
                        type="checkbox"
                      />
                    </div>
                    <span className="font-body-md pt-2 text-slate-700 select-none">
                      I accept the{" "}
                      <NavLink
                        className="text-nav-blue-active hover:underline font-medium"
                        to="/"
                      >
                        Terms of Service
                      </NavLink>{" "}
                      and{" "}
                      <NavLink
                        className="text-nav-blue-active hover:underline font-medium"
                        to="/"
                      >
                        Privacy Policy
                      </NavLink>
                      .
                    </span>
                  </label>
                </div>
                <div className="pt-3">
                  <button
                    disabled={isFetching}
                    className={`w-full py-4 mt-3 bg-nav-blue-active text-white font-label-md text-lg  rounded-lg shadow-lg hover:bg-primary-container active:scale-[0.98] transition-all duration-200 uppercase tracking-wider font-bold ${isFetching ? "opacity-70" : "opacity-100"} `}
                    type="submit"
                  >
                    {isFetching ? "Please wait..." : "Create Account"}
                  </button>

                  <p className="text-green-700 mt-4 text-center font-medium">
                    {message === "Account Created Successfully" && message}
                  </p>
                </div>
              </form>

              <footer className="text-center  mt-8  border-t border-slate-300">
                <p className="mt-5 font-body-md text-body-md text-secondary">
                  Already have an account?
                  <NavLink
                    className="text-nav-blue-active font-semibold hover:underline ml-1"
                    to="/login"
                  >
                    Sign In
                  </NavLink>
                </p>
              </footer>

              <div className="mt-5">
                <div className="relative flex items-center">
                  <div className="grow border-t border-slate-400"></div>
                  <span className="text-outline font-medium text-slate-600  tracking-wider text-sm mx-4">
                    OR REGISTER WITH
                  </span>{" "}
                  <div className="grow border-t border-slate-400"></div>
                </div>
                <div className="grid grid-cols-2 gap-7 mt-5">
                  <button className="flex items-center justify-center gap-2 py-3 px-4 border cursor pointer rounded-lg bg-white hover:bg-surface-container-low transition-colors">
                    <img
                      alt="Google"
                      className="w-5 h-5"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzpaVg6g-cEzIjdNg5ruBeouM2A9rai0CPllTqmJUcS6__TTymL2pwSJZx335Su3imBpBoNG2-NOucE8f6SVJadnjVjPPQFOb3_XZSwzqR5fOoBaHDhSCmEMbEcWjnTjg2gABZWKQK6F6Hx_hTFjQyYZcFiHe2A9pQeQAdNSE5qjq5iVcAJFAhvnYXzcnAk2owKVtkTujSkUKbAFvUd6nubiPKc2NK3GWYlV6BPhptDHZ9AJNc8RhB2z3KG1Gj_bkigDky4xa8gMg"
                    />
                    <span className="font-medium text-slate-800">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 px-4 border cursor pointer rounded-lg bg-white hover:bg-surface-container-low transition-colors">
                    <span
                      className="material-symbols-outlined text-on-surface"
                      data-weight="fill"
                    >
                      ios
                    </span>
                    <span className="font-medium text-slate-800">Apple</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SignUp;

// <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-100 shadow-sm shadow-slate-200/50">
//   <div className="flex items-center justify-between py-4 w-full px-4 md:px-margin-desktop">
//     <div className="flex items-center gap-stack-lg">
//       <button className="text-slate-500 hover:text-indigo-500 transition-colors active:opacity-70">
//         <span className="material-symbols-outlined" data-icon="menu">
//           menu
//         </span>
//       </button>
//       <span className="text-2xl font-black tracking-tighter text-slate-900">
//         VEXA
//       </span>
//     </div>
//     <nav className="hidden md:flex items-center gap-stack-lg">
//       <a
//         className="font-label-md text-label-md text-indigo-600 font-semibold transition-colors"
//         href="#"
//       >
//         Tech
//       </a>
//       <a
//         className="font-label-md text-label-md text-slate-500 hover:text-indigo-500 transition-colors"
//         href="#"
//       >
//         Fashion
//       </a>
//       <a
//         className="font-label-md text-label-md text-slate-500 hover:text-indigo-500 transition-colors"
//         href="#"
//       >
//         Shoes
//       </a>
//       <a
//         className="font-label-md text-label-md text-slate-500 hover:text-indigo-500 transition-colors"
//         href="#"
//       >
//         Cars
//       </a>
//       <a
//         className="font-label-md text-label-md text-slate-500 hover:text-indigo-500 transition-colors"
//         href="#"
//       >
//         Services
//       </a>
//     </nav>
//     <div className="flex items-center gap-stack-md">
//       <button className="text-slate-500 hover:text-indigo-500 transition-colors active:opacity-70">
//         <span className="material-symbols-outlined" data-icon="search">
//           search
//         </span>
//       </button>
//       <button className="text-slate-500 hover:text-indigo-500 transition-colors active:opacity-70">
//         <span
//           className="material-symbols-outlined"
//           data-icon="shopping_bag"
//         >
//           shopping_bag
//         </span>
//       </button>
//     </div>
//   </div>
// </header>
