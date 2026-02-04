import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
// Footer bhi yahan aa sakta hai

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar /> {/* Standard Navbar */}
      <main className="flex-1">
        <Outlet /> {/* Yahan Home/About/Contact render hoga */}
      </main>
    </div>
  );
};

export default MainLayout;
