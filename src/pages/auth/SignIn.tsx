import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContextStore } from "../../../store/useAuthContext";
import API from "../../../api/api";
import type { AxiosError } from "axios";

// Icons
import {
  MdOutlineMail,
  MdErrorOutline,
  MdCheckCircleOutline,
} from "react-icons/md";
import {
  IoLockClosedOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignIn = () => {
  const { emailOnChange, passwordOnChange, email, password } =
    useAuthContextStore();
  const [isFetching, setIsFetching] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({
    text: "",
    type: "",
  });

  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
    setMessage({ text: "", type: "" });

    try {
      const { data } = await API.post(
        "/user/login",
        { email, password },
        { withCredentials: true },
      );

      localStorage.setItem("token", data?.token);
      setMessage({
        text: data?.message || "Sign in successful!",
        type: "success",
      });

      // Redirect after brief delay for UX
      setTimeout(() => {
        navigate("/shop");
      }, 800);
    } catch (error: unknown) {
      const err = error as AxiosError<{
        message: string;
        status: boolean;
      }>;
      setMessage({
        text:
          err.response?.data?.message ||
          "Invalid credentials. Please try again.",
        type: "error",
      });
    } finally {
      setIsFetching(false);
      setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex items-center justify-center font-sans antialiased">
      <main className="w-full min-h-screen flex flex-col md:flex-row">
        {/* Form Section */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-slate-950">
          <div className="max-w-[420px] w-full flex flex-col gap-6">
            {/* Header */}
            <header className="flex flex-col gap-2">
              <NavLink to="/" className="inline-block mb-4">
                <span className="text-2xl font-black tracking-wider text-white hover:text-blue-500 transition-colors">
                  VEXA
                </span>
              </NavLink>
              <h1 className="font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Welcome back
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enter your credentials to access your account and workspace.
              </p>
            </header>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 px-4 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800/80 hover:border-slate-700 text-slate-200 text-sm font-medium transition-all duration-200 cursor-pointer group"
              >
                <FcGoogle className="text-xl group-hover:scale-110 transition-transform" />
                <span>Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 px-4 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800/80 hover:border-slate-700 text-slate-200 text-sm font-medium transition-all duration-200 cursor-pointer group"
              >
                <FaApple className="text-xl text-white group-hover:scale-110 transition-transform" />
                <span>Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center my-2">
              <div className="grow border-t border-slate-800"></div>
              <span className="shrink mx-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Or continue with email
              </span>
              <div className="grow border-t border-slate-800"></div>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4" onSubmit={submitForm}>
              {/* Alert Feedback Banner */}
              {message.text && (
                <div
                  className={`flex items-center gap-3 p-3.5 rounded-xl text-sm border animate-in fade-in duration-200 ${
                    message.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                  }`}
                >
                  {message.type === "success" ? (
                    <MdCheckCircleOutline className="text-lg shrink-0" />
                  ) : (
                    <MdErrorOutline className="text-lg shrink-0" />
                  )}
                  <span>{message.text}</span>
                </div>
              )}

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <MdOutlineMail className="absolute left-4 text-slate-500 text-lg pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email || ""}
                    onChange={emailOnChange}
                    placeholder="name@company.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <NavLink
                    to="/forgot-password"
                    className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot password?
                  </NavLink>
                </div>
                <div className="relative flex items-center">
                  <IoLockClosedOutline className="absolute left-4 text-slate-500 text-lg pointer-events-none" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password || ""}
                    onChange={passwordOnChange}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-500 hover:text-slate-300 transition-colors"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <IoEyeOffOutline className="text-lg" />
                    ) : (
                      <IoEyeOutline className="text-lg" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500/20 focus:ring-offset-slate-950 cursor-pointer"
                  />
                  <span className="text-xs font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                    Remember for 30 days
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isFetching}
                className="w-full mt-3 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isFetching ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Footer Prompt */}
            <p className="text-center text-sm text-slate-400 pt-2">
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition-all"
              >
                Create an account
              </NavLink>
            </p>
          </div>
        </section>

        {/* Visual Hero Section */}
        <section className="hidden md:block md:w-1/2 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />

          <img
            alt="Vexa Modern Aesthetic"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 hover:scale-100"
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
          />

          <div className="absolute bottom-12 left-12 right-12 z-20 text-white max-w-lg">
            <blockquote className="text-2xl font-semibold tracking-tight leading-snug text-slate-100">
              "Precision in every detail, luxury in every digital interaction."
            </blockquote>

            <div className="mt-6 flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  alt="Creator Avatar 1"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  alt="Creator Avatar 2"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  alt="Creator Avatar 3"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                />
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Joined by over{" "}
                <span className="text-slate-200 font-semibold">50,000+</span>{" "}
                creators globally.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignIn;
