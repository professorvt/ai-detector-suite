import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "@/components/Sidebar"; // Tumhara existing sidebar
import { Menu, X, Home, Info, Mail } from "lucide-react";

const ToolLayout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] w-full bg-black text-white overflow-hidden">
      {/* 1. LEFT SIDEBAR (Always Visible on Desktop) */}
      <Sidebar />

      {/* 2. RIGHT WORKSPACE */}
      <div className="flex-1 flex flex-col relative bg-gradient-to-br from-black via-[#050505] to-[#0a0a0a]">
        {/* --- TOP RIGHT HAMBURGER (Collapsed Navbar) --- */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md transition-all text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Collapsed Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-14 right-0 w-48 bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
              <NavLink
                to="/"
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg text-sm text-gray-300"
              >
                <Home size={16} /> Home
              </NavLink>
              <NavLink
                to="/about"
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg text-sm text-gray-300"
              >
                <Info size={16} /> About
              </NavLink>
              <NavLink
                to="/contact"
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg text-sm text-gray-300"
              >
                <Mail size={16} /> Contact
              </NavLink>
            </div>
          )}
        </div>

        {/* --- TOOL CONTENT RENDER AREA --- */}
        <div className="flex-1 overflow-y-auto scroll-smooth w-full h-full">
          <Outlet /> {/* Yahan Detector/Humanizer render hoga */}
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;

// import { useState } from "react";
// import { Outlet, NavLink } from "react-router-dom";
// import Sidebar from "@/components/Sidebar";
// import { Menu, X, Home, Info, Mail } from "lucide-react";
// import AdBanner from "@/components/AdBanner";

// const ToolLayout = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="flex h-[100dvh] w-full bg-black text-white overflow-hidden">
//       {/* 1. LEFT SIDEBAR */}
//       <Sidebar />

//       {/* 2. RIGHT WORKSPACE */}
//       <div className="flex-1 flex flex-col relative bg-gradient-to-br from-black via-[#050505] to-[#0a0a0a]">
//         {/* Hamburger Menu (Mobile) */}
//         <div className="absolute top-4 right-4 z-50">
//           <button
//             onClick={() => setMenuOpen(!isMenuOpen)}
//             className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md transition-all text-gray-300 hover:text-white shadow-lg"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {isMenuOpen && (
//             <div className="absolute top-14 right-0 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1 z-50">
//               <NavLink
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors"
//               >
//                 <Home size={16} /> Home
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors"
//               >
//                 <Info size={16} /> About
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors"
//               >
//                 <Mail size={16} /> Contact
//               </NavLink>
//             </div>
//           )}
//         </div>

//         {/* --- TOOL CONTENT RENDER AREA --- */}
//         <div className="flex-1 overflow-y-auto scroll-smooth w-full h-full relative">
//           <div className="max-w-7xl mx-auto flex flex-col min-h-full">
//             {/* 💰 TOP AD BANNER */}
//             <div className="w-full flex justify-center py-4 px-4">
//               <div className="w-full max-w-[728px] min-h-[90px] bg-white/5 rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
//                 {/* ✅ FIXED: "Top" (Capital T) */}
//                 <AdBanner position="Top" darkMode={true} />
//               </div>
//             </div>

//             {/* 🛠️ MAIN TOOL */}
//             <div className="flex-1 px-4 pb-4">
//               <Outlet />
//             </div>

//             {/* 💰 BOTTOM AD BANNER */}
//             <div className="w-full flex justify-center py-6 px-4 mt-auto">
//               <div className="w-full max-w-[728px] min-h-[90px] bg-white/5 rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
//                 {/* ✅ FIXED: "Bottom" (Capital B) */}
//                 <AdBanner position="Bottom" darkMode={true} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToolLayout;
