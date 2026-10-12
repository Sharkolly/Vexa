import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  AlertCircle,
  KeyRound,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  Lock,
} from "lucide-react";

const SplitOtpForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  // --- STATES ---
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [step, setStep] = useState<"REQUEST_OTP" | "VERIFY_OTP">("REQUEST_OTP");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  // Input refs for auto-focusing next OTP field
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const isValidEmail = (emailStr: string) => /\S+@\S+\.\S+/.test(emailStr);

  // --- STEP 1: REQUEST OTP ---
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim()) {
      setErrorMessage("Please enter your registered email address.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate backend OTP generation & dispatch
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      setStep("VERIFY_OTP");
      startResendTimer();
    } catch (err) {
      setIsLoading(false);
      setErrorMessage("Unable to send OTP. Please try again.");
    }
  };

  // --- OTP INPUT HANDLERS ---
  const handleOtpChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // Digit only

    const updatedOtp = [...otp];
    updatedOtp[index] = value.substring(value.length - 1);
    setOtp(updatedOtp);

    // Auto-focus next input box
    if (value && index < 5 && otpInputRefs.current[index + 1]) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp(digits);
      otpInputRefs.current[5]?.focus();
    }
  };

  // --- STEP 2: VERIFY OTP ---
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      setErrorMessage("Please enter the complete 6-digit verification code.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate backend OTP validation
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsLoading(false);
      // Navigate to Reset New Password screen or Dashboard
      navigate("/reset-password", { state: { email, verifiedOtp: fullOtp } });
    } catch (err) {
      setIsLoading(false);
      setErrorMessage("Invalid OTP code. Please check and try again.");
    }
  };

  const startResendTimer = () => {
    setResendCooldown(60);
    const timer = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendOtp = () => {
    if (resendCooldown === 0) {
      setOtp(new Array(6).fill(""));
      startResendTimer();
      // Resend OTP API trigger
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden selection:bg-emerald-100 selection:text-emerald-800">
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-white z-10">
        <div className="flex items-center justify-between max-w-xl w-full mx-auto">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="https://res.cloudinary.com/daqmey5dq/image/upload/v1791612665/fexa-dark-logo.svg"
              alt="FEXA Logo"
              width="180"
            />
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors bg-slate-100 hover:bg-emerald-50 px-3.5 py-2 rounded-xl"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Sign In</span>
          </Link>
        </div>

        <div className="my-auto py-12 max-w-md w-full mx-auto">
          {errorMessage && (
            <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-2xl text-xs font-medium flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {step === "REQUEST_OTP" ? (
            <div>
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center mb-4 shadow-xs">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Forgot Password?
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  Enter your email address to receive a 6-digit One-Time
                  Verification Code (OTP).
                </p>
              </div>

              <form onSubmit={handleRequestOtp} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="merchant@FEXA.ng"
                      disabled={isLoading}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-3.5 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-slate-400 disabled:opacity-60"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 px-6 rounded-xl text-sm shadow-md shadow-emerald-700/20 transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending OTP...</span>
                    </>
                  ) : (
                    <span>Send OTP Code</span>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* --- STEP 2: VERIFY 6-DIGIT OTP --- */
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center mb-4 shadow-xs">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Enter 6-Digit OTP
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  We sent a code to{" "}
                  <span className="font-bold text-slate-800 font-mono">
                    {email}
                  </span>
                  . Please enter it below.
                </p>
              </div>
              0

              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div
                  className="flex justify-between gap-2 sm:gap-3"
                  onPaste={handlePaste}
                >
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      ref={(el) => {
                        otpInputRefs.current[index] = el;
                      }}
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-11 h-12 sm:w-13 sm:h-14 text-center text-lg sm:text-xl font-bold font-mono bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-slate-900"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 px-6 rounded-xl text-sm shadow-md shadow-emerald-700/20 transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying Code...</span>
                    </>
                  ) : (
                    <span>Verify Code & Proceed</span>
                  )}
                </button>
              </form>

              <div className="mt-6 space-y-3 text-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendCooldown > 0}
                  className="w-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200 hover:border-emerald-200 font-semibold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 ${resendCooldown > 0 ? "animate-spin" : ""}`}
                  />
                  {resendCooldown > 0
                    ? `Resend OTP in ${resendCooldown}s`
                    : "Resend Verification OTP"}
                </button>

                <button
                  type="button"
                  onClick={() => setStep("REQUEST_OTP")}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Entered wrong email address? Change email
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Encrypted One-Time Authentication Security</span>
          </div>
        </div>

        <div className="text-xs text-slate-400 flex justify-between items-center border-t border-slate-100 pt-6">
          <span>&copy; {new Date().getFullYear()} FEXA Platform.</span>
          <a
            href="mailto:support@FEXA.ng"
            className="hover:text-emerald-700 font-semibold transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-slate-950 relative overflow-hidden flex-col justify-between p-16 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600"
            alt="Dark Aesthetic Wallpaper"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Merchant Portal
          </span>
          <span className="text-xs font-mono text-slate-500">
            OTP Auth Service
          </span>
        </div>

        <div className="relative z-10 my-auto max-w-lg space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Instant authentication for your{" "}
              <span className="text-emerald-400">vendor operations.</span>
            </h2>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              Verify your identity securely with One-Time Passwords sent
              directly to your registered contact channel.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-bold">Real-time OTP</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Sub-5-second dispatch delivery
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <ShoppingBag className="w-4 h-4" />
                <span className="text-xs font-bold">256-bit Security</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Bank-level encryption standards
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-slate-800/80 pt-6">
          <p className="text-xs text-slate-400 italic">
            "The 2-step OTP system makes vendor account management both secure
            and effortless."
          </p>
          <p className="text-xs font-bold text-slate-200 mt-2">
            — Apex Tech Hub{" "}
            <span className="text-slate-500 font-normal">
              ・ Verified Merchant
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplitOtpForgotPassword;
