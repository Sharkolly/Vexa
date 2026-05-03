import LandingPage from "../../components/ui/LandingPage";
import Collections from "../../components/ui/Collections";
import Categories from "../../components/ui/Categories";
import Trends from "../../components/ui/Trends";
import Experience from "../../components/ui/Experience";

const Home = () => {
  return (
    <div>
      <div className="font-body-md text-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        <main className="pt-10">
          <LandingPage />
          <Collections />
          <Categories />
          <Trends />
          <Experience />
        </main>
      </div>
    </div>
  );
};

export default Home;
//    <div className="hidden fixed inset-0 z-60" id="drawer">
//           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
//           <aside className="absolute left-0 top-0 h-full w-80 bg-white dark:bg-slate-900 rounded-r-3xl shadow-2xl flex flex-col py-8 overflow-y-auto">
//             <h2 className="text-xl font-bold text-slate-900 dark:text-white px-6 py-4">
//               Explore Vexa
//             </h2>
//             <nav className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
//               <a
//                 className="px-6 py-4 flex items-center gap-4 text-indigo-600 bg-indigo-50 font-bold hover:pl-8 transition-all duration-300"
//                 href="#"
//               >
//                 <span
//                   className="material-symbols-outlined"
//                   data-icon="smart_toy"
//                 >
//                   smart_toy
//                 </span>{" "}
//                 Tech
//               </a>
//               <a
//                 className="px-6 py-4 flex items-center gap-4 text-slate-600 hover:pl-8 transition-all duration-300"
//                 href="#"
//               >
//                 <span
//                   className="material-symbols-outlined"
//                   data-icon="checkroom"
//                 >
//                   checkroom
//                 </span>{" "}
//                 Fashion
//               </a>
//               <a
//                 className="px-6 py-4 flex items-center gap-4 text-slate-600 hover:pl-8 transition-all duration-300"
//                 href="#"
//               >
//                 <span className="material-symbols-outlined" data-icon="Steps">
//                   steps
//                 </span>{" "}
//                 Shoes
//               </a>
//               <a
//                 className="px-6 py-4 flex items-center gap-4 text-slate-600 hover:pl-8 transition-all duration-300"
//                 href="#"
//               >
//                 <span
//                   className="material-symbols-outlined"
//                   data-icon="directions_car"
//                 >
//                   directions_car
//                 </span>{" "}
//                 Cars
//               </a>
//               <a
//                 className="px-6 py-4 flex items-center gap-4 text-slate-600 hover:pl-8 transition-all duration-300"
//                 href="#"
//               >
//                 <span className="material-symbols-outlined" data-icon="build">
//                   build
//                 </span>{" "}
//                 Services
//               </a>
//             </nav>
//           </aside>
//         </div>
