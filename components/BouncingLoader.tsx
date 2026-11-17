// const BouncingLoader = () => {
//   const dots = [
//     { bg: "bg-emerald-600", shadow: "shadow-emerald-600/40" },
//     { bg: "bg-emerald-500", shadow: "shadow-emerald-500/40" },
//     { bg: "bg-emerald-400", shadow: "shadow-emerald-400/40" },
//     { bg: "bg-teal-400",    shadow: "shadow-teal-400/60" },
//     { bg: "bg-cyan-400",    shadow: "shadow-cyan-400/50" },
//     { bg: "bg-cyan-400",    shadow: "shadow-cyan-300/40" },
//   ];

//   return (
//     <div className="flex items-center justify-center space-x-2.5 hidden scale-[1.6] h-20">
//       {dots.map((dot, index) => (
//         <span
//           key={index}
//           className={`w-3.5 h-3.5 rounded-full ${dot.bg} shadow-md ${dot.shadow} animate-bounce`}
//           style={{
//             animationDelay: `${index * 0.12}s`,
//             animationDuration: "0.85s",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default BouncingLoader;
import { useState, useEffect } from "react";

const BouncingLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate smooth incremental progress on mount
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment smoothly
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-4 mt-4 rounded-2xl shadow-s borde borde-slate-100 flex flex-col gap-3">
      <div className="flex justify-between  items-center text-xs font-medium text-slate-600">
        <span className=''>Loading...</span>
        <span className="text-emerald-700  font-semibold">
          {Math.min(progress, 100)}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-200">
        <div
          className="bg-emerald-600 h-full rounded-full transition-all duration-300 ease-out shadow-sm"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default BouncingLoader;
