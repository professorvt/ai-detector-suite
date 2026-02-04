import { NavLink } from "react-router-dom";
import { Scan, Sparkles, Zap, LayoutDashboard, ArrowLeft } from "lucide-react";

const Sidebar = () => {
  // Helper for Link Styles (Solana Neon Active State)
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 font-medium ${
      isActive
        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)]"
        : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
    }`;

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-white/10 bg-black/50 backdrop-blur-xl h-full flex-shrink-0">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-white/5">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-4"
        >
          <ArrowLeft size={14} /> Back to Home
        </NavLink>
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <LayoutDashboard className="text-purple-500" /> Workspace
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="p-4 space-y-2 flex-1">
        <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 px-2">
          Your Tools
        </h3>

        {/* Tool 1: AI Detector */}
        <NavLink to="/tool/detector" className={linkClass}>
          <Scan size={20} />
          <span>AI Detector</span>
        </NavLink>

        {/* Tool 2: Humanizer */}
        <NavLink to="/tool/humanizer" className={linkClass}>
          <Sparkles size={20} />
          <span>Humanizer</span>
        </NavLink>
      </div>

      {/* Upgrade Banner (Bottom) */}
      <div className="p-4 border-t border-white/10">
        <NavLink
          to="/pricing"
          className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-200 hover:text-white hover:from-yellow-600/30 hover:to-orange-600/30 border border-yellow-500/30 transition-all group"
        >
          <Zap size={18} className="group-hover:fill-current" />
          <span className="font-bold">Upgrade Plan</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
