// import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContextStore } from "../../../store/useAuthContext";
import API from "../../../api/api";
import { useState } from "react";
import type { AxiosError } from "axios";

const SignIn = () => {
  const { emailOnChange, passwordOnChange, email, password } =
    useAuthContextStore();
  const [isFetching, setIsFetching] = useState(false);

  // const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      const { data } = await API.post(
        "/user/login",
        { email, password },
        {
          withCredentials: true,
        },
      );

      localStorage.setItem("token", data?.token);
      setMessage(data?.message || "Account created successfully");
      navigate("/shop");
    } catch (error: unknown) {
      const err = error as AxiosError<{
        message: string;
        status: boolean;
      }>;
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsFetching(false);
      setTimeout(() => {
        setMessage("");
        // setError("");
      }, 5000);
    }
  };
  return (
    <div>
      <div className="bg-background text-on-background min-h-screen flex items-center justify-center max-md:w-[91%] max-md:mx-auto max-md:my-8">
        <main className="w-full min-h-screen flex flex-col md:flex-row">
          <section className="w-full md:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
            <div className="max-w-[440px] w-full flex flex-col gap-stack-lg max-lg:w-[90%] max-md:mx-auto">
              <header className="flex flex-col gap-stack-sm">
                {/* <span className="text-3xl font-black pb-8 tracking-tighter text-slate-900">
                  Vexa
                </span> */}
                <h1 className="font-semibold text-4xl max-lg:text-3xl pb-3  text-on-surface mt-stack-md">
                  Welcome Back To{" "}
                  <span className="text-nav-blue-active">VEXA</span>
                </h1>
                <p className="font-body-md text-body-md pb-8 text-slate-600/90">
                  Please enter your details to access your account.
                </p>
              </header>

              <div className="flex flex-col sm:flex-row gap-7">
                <button className="flex-1 flex items-center justify-center gap-2 py-4 px-4 border border-slate-400 rounded-lg cursor-pointer text-on-surface hover:bg-surface-container transition-all duration-300">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                  <p className="font-medium text-slate-800">Google</p>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-4 px-4 border border-slate-400 rounded-lg cursor-pointer text-label-md text-on-surface hover:bg-surface-container transition-all duration-300">
                  <svg
                    className="w-5 h-5 fill-current"
                    // viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.11.78.82-.04 2.11-.88 3.63-.73 1.44.14 2.52.68 3.16 1.64-2.88 1.74-2.39 5.86.51 7.05-.62 1.56-1.45 3.14-2.41 4.23zM12.03 7.25c-.02-2.6 2.13-4.7 4.67-4.74.06 2.67-2.45 4.91-4.67 4.74z"></path>
                  </svg>
                  <p className="font-medium text-slate-800">Apple</p>
                </button>
              </div>
              <div className="relative flex items-center py-8">
                <div className="grow border-t border-slate-400"></div>
                <span className="shrink mx-4 text-outline font-medium text-slate-600  tracking-wider text-sm">
                  OR CONTINUE WITH EMAIL
                </span>
                <div className="grow border-t border-slate-400  "></div>
              </div>

              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => submitForm(e)}
              >
                <div className="flex flex-col gap-2">
                  <label className="font-label-md">Email Address</label>
                  <input
                    onChange={(e) => emailOnChange(e)}
                    className="w-full px-4 py-3 bg-white border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md text-body-md"
                    id="email"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-label-md text-on-surface-variant"
                    // for="password"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => passwordOnChange(e)}
                    className="w-full px-4 py-3 bg-white border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md text-body-md"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                <div className="flex items-center justify-between mt-unit">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer transition-colors"
                      type="checkbox"
                    />
                    <span className=" group-hover:text-primary font-medium transition-colors">
                      Remember me
                    </span>
                  </label>
                  <NavLink
                    className="font-label-md text-label-md text-nav-blue-active font-medium hover:opacity-80 transition-opacity"
                    to="/forgot-password"
                  >
                    Forgot password?
                  </NavLink>
                </div>
                <button
                  disabled={isFetching}
                  className={`w-full py-3.5 bg-nav-blue-active text-white rounded-lg font-medium text-xl shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 cursor-pointer mt-3 ${isFetching ? "opacity-70" : "opacity-100"} `}
                  type="submit"
                >
                  {isFetching ? "Please wait..." : "Sign In"}
                </button>

                <p
                  className={` my-2 text-center font-medium ${message === "Login successful" ? " text-green-700 opacity-100" : "text-red-700"} transition-opacity`}
                >
                  {message}
                </p>
              </form>
              <p className="text-center mt-5 font-body-md text-body-md text-slate-700">
                Don't have an account?{" "}
                <NavLink
                  className="text-nav-blue-active font-semibold hover:underline"
                  to="/signup"
                >
                  Create an account
                </NavLink>
              </p>
            </div>
          </section>

          <section className="hidden md:block md:w-1/2 relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10"></div>
            <img
              alt="Vexa E-commerce Brand Aesthetic"
              className="w-full h-full object-cover grayscale-[20%] brightness-75"
              data-alt="A cinematic, high-end lifestyle photograph showcasing a sleek, minimalist desk setup featuring premium obsidian-black tech accessories. The lighting is low-key and dramatic, with a sharp spotlight highlighting the metallic textures and clean industrial design of the hardware. The color palette is dominated by deep slates and blacks, with a subtle glow of electric indigo light reflecting off the glass surfaces. The overall mood is sophisticated, professional, and captures the essence of technical excellence and luxury design."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVjVDjWhJ4fImfYTNwy6SKiZzHlfTkIQ9dmljvUV1RKiVuuB2gpfDlMAbqROe_C0wYukgPd5DIJE3du8OJumD_tfuB9tHZNwQv65Z8FSlATBO-UiTbcoUz8S_vH8KkpmPDYb7_1_d500cAypfq7DHrYoX6v1wpmMm3A4D6m9AF8GMugEKKWDYsxxanh6bhe0XRFoQnjW6as9Khg1BCgGgFVOQ681RJEvivAwvEK3d9U0XxY5tkA89Tmy58YleR4JWmXdMEWC1lxvs"
            />
            <div className="absolute bottom-margin-desktop left-margin-desktop right-margin-desktop z-20 text-white max-w-lg">
              <blockquote className="font-display-xl text-display-xl tracking-tighter leading-tight">
                "Precision in every detail, luxury in every interaction."
              </blockquote>
              <div className="mt-stack-lg flex items-center gap-gutter">
                {" "}
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-surface-container-high overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Close up portrait of a professional male designer in a minimalist studio setting, soft natural lighting."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8T5O5yOlYOP_52Odh-Otz-cDXUIZdrztngY0q_ITKeDddEA3v4naXmp44rj4RrwKbRBt61uXYxNIoYmAfeMHUP3IhrDQlC0PaUYCA44hpcwQCDfKEmsk4vyo3BxfaM9XmdkfCQKldsHNg3d7mFkWOryktJzCq_0MC9Ya2umhwMwSySz1JoVJgo1OE54Xq_tAxO1DCp59n1adepIr8LJhh0Nr59FjDnr3V5PlGDClBT4bJHIzopbY_ZLPcy2nHzAn3AGUaiqFU320"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-surface-container-high overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Close up portrait of a professional female executive, sharp studio lighting, high fashion aesthetic."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOiwC3c_Y9RKT6EXnQh5hnPJo1ASSJVWsv9wH4yyVkgMhRxsQFyXijJzVduY3y0W0yFypMrZwr8ig5BqizF_UJy-56Ei-vpuK840ohuzc_00hypfpGdyureaR8p8geR9BclMMmVG6BccgpYxY9acSz50uc0-02EqiVMTo9bzN1V7z6OT7AZvqNCthSNDX0eGDD5OdL_KHYJtlzV9li5usb-uoPCzWbHjfU172RkfR-aOCwbFE3_UTo0iApyNklSGN_jxmhNlUgiPE"
                    />
                  </div>
                </div>
                <p className="font-label-md text-label-md opacity-80">
                  Joined by over 50,000+ creators and professionals worldwide.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SignIn;
