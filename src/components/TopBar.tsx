import { Info, Mail, Home } from "lucide-react";

interface TopBarProps {
  currentView: string;
  setView: (view: string) => void;
  darkMode: boolean;
}

const TopBar = ({ currentView, setView, darkMode }: TopBarProps) => {
  return (
    <div
      className={`flex items-center justify-end gap-4 p-4 mb-4 border-b ${darkMode ? "border-borderDark" : "border-gray-200"}`}
    >
      <button
        onClick={() => setView("home")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${currentView === "home" ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"}`}
      >
        <Home size={18} /> Home
      </button>

      <button
        onClick={() => setView("about")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${currentView === "about" ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"}`}
      >
        <Info size={18} /> About Us
      </button>

      <button
        onClick={() => setView("contact")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium ${currentView === "contact" ? "bg-indigo-600 text-white" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"}`}
      >
        <Mail size={18} /> Contact
      </button>
    </div>
  );
};

export default TopBar;
