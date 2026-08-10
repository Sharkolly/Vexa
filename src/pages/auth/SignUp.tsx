import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

import API from "../../../api/api";
import { useAuthContextStore } from "../../../store/useAuthContext";

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
  // In browser environments, setTimeout returns a number, not NodeJS.Timeout
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
    setError("");
    setMessage("");

    try {
      const { data } = await API.post(
        "/user/signup",
        { email, password, firstName, lastName },
        { withCredentials: true }
      );

      const successMsg = data?.message || "Account created successfully!";
      setMessage(successMsg);

      timerRef.current = setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error: unknown) {
      const err = error as AxiosError<{
        message: string;
        status: boolean;
        type?: string;
      }>;

      setError(err.response?.data?.type || "GENERAL");
      setMessage(err.response?.data?.message || "Something went wrong. Please try again.");

      timerRef.current = setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans antialiased text-slate-900 selection:bg-slate-900 selection:text-white">
      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12">
        {/* Left Hero Panel */}
        <section className="relative hidden lg:flex lg:col-span-5 xl:col-span-6 flex-col justify-between p-12 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0 opacity-60 mix-blend-luminosity">
            <img
              alt="Vexa Editorial Cover"
              className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out hover:scale-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1gbYNhY5fJhQPpZLJGbKEER6TcWWPC7XFK1585zQMysILuBC-4OQKEezRXtUAynkJzQhBCB8upGBY6cG8lkqM4xuSP1VeFXDNhiqgGltkOElT11t6nc467PrSVl_f94lZPVpEhU7sQ2m1vZNJCKuMakZ-_Lnd95iM7MuSqKuGEWMpByjTe3U6azP1gmIjG-fm-HTYPgw9XayPDjiju5ANULIUgtWERI6fJ-mcfmMEpYJ6quGRX_DpNhqBUOMuk9zG3aQWBPQU_zE"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Top Branding */}
          <div className="relative z-20 flex items-center gap-3">
            <span className="text-2xl font-black tracking-widest text-white uppercase">
              VEXA
            </span>
            <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-slate-300 uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/10">
              Editorial
            </span>
          </div>

          {/* Bottom Card */}
          <div className="relative z-20 max-w-lg backdrop-blur-2xl bg-white/10 border border-white/15 p-8 rounded-3xl shadow-2xl">
            <p className="text-xs font-semibold tracking-widest text-slate-300 uppercase mb-2">
              Elevate Every Step
            </p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
              Crafted for the modern trendsetter.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Join an exclusive community of curators. Enjoy priority access to limited releases and bespoke retail experiences.
            </p>
          </div>
        </section>

        {/* Right Form Panel */}
        <section className="lg:col-span-7 xl:col-span-6 flex items-center justify-center p-6 sm:p-12 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div>
              <div className="lg:hidden flex items-center gap-2 mb-8">
                <span className="text-2xl font-black tracking-widest text-slate-900 uppercase">
                  VEXA
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Create an account
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Start your journey with Vexa today. Free forever.
              </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 px-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all shadow-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 px-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.68-.83 1.14-1.99.1-3.32-1.01.09-2.28.73-3 1.57-.64.74-1.2 1.93-1.05 3.08 1.14.09 2.33-.58 2.95-1.33z" />
                </svg>
                Apple
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-slate-200" />
              <span className="bg-slate-50/50 px-3 text-[11px] font-semibold tracking-wider text-slate-400 uppercase absolute">
                Or sign up with email
              </span>
            </div>

            {/* Main Form */}
            <form className="space-y-4" onSubmit={submitForm}>
              {/* Name Row (Side by side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="first_name"
                    className="text-xs font-semibold text-slate-700 block"
                  >
                    First name
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    required
                    value={firstName}
                    onChange={firstNameOnChange}
                    placeholder="Jane"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all outline-none font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="last_name"
                    className="text-xs font-semibold text-slate-700 block"
                  >
                    Last name
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    required
                    value={lastName}
                    onChange={lastNameOnChange}
                    placeholder="Doe"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all outline-none font-medium"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-slate-700 block"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={emailOnChange}
                  placeholder="jane.doe@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all outline-none font-medium"
                />
                {error === "EMAIL" && (
                  <p className="text-xs text-rose-600 font-medium mt-1">
                    {message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold text-slate-700 block"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={passwordOnChange}
                  placeholder="At least 8 characters"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all outline-none font-medium"
                />
                {error === "PASSWORD" && (
                  <p className="text-xs text-rose-600 font-medium mt-1">
                    {message}
                  </p>
                )}
              </div>

              {/* General Banner Error */}
              {error === "GENERAL" && message && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {message}
                </div>
              )}

              {/* Terms & Newsletter */}
              <div className="pt-2 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 rounded border-slate-300 text-slate-900 focus:ring-slate-900 transition-all cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-normal">
                    I agree to Vexa's{" "}
                    <NavLink
                      to="/terms"
                      className="text-slate-900 font-semibold underline underline-offset-2 hover:text-slate-700"
                    >
                      Terms of Service
                    </NavLink>{" "}
                    and{" "}
                    <NavLink
                      to="/privacy"
                      className="text-slate-900 font-semibold underline underline-offset-2 hover:text-slate-700"
                    >
                      Privacy Policy
                    </NavLink>
                    .
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isFetching}
                  className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wider uppercase rounded-xl shadow-lg shadow-slate-900/10 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isFetching && (
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}
                  {isFetching ? "Creating account..." : "Create Account"}
                </button>

                {/* Success Banner */}
                {message && !error && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {message}
                  </div>
                )}
              </div>
            </form>

            {/* Footer Redirect */}
            <p className="text-center text-xs text-slate-500 pt-2">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-semibold text-slate-900 hover:underline underline-offset-2 ml-0.5"
              >
                Sign in here
              </NavLink>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUp;