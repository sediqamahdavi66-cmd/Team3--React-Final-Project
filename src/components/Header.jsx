
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, Search, LogOut, Settings, Bell, Home } from "lucide-react";

const pageTitles = {
  "/": "Dashboard",
  "/appointments": "Appointments",
  "/find-doctor": "Find Doctor",
  "/find-clinic": "Find Clinic",
  "/chat": "Chat",
  "/marketplace": "Find MarketPlace",
  "/find-pharmacy": "Find Pharmacy",
  "/dependents": "My Dependents",
  "/account": "My Account",
  "/settings": "Settings",
};

export default function Header({ toggleSidebar }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-3 z-30 transition-all duration-300 ${
        scrolled
          ? "mt-4 mx-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-gray-100/50"
          : "mt-4 mx-0 rounded-none bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-1.5 text-md text-gray-700 mb-0.5">
              <Home className="w-4 h-4" />
              <span>/</span>
              <span>{currentTitle}</span>
            </div>
            
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3" />
            <input
              type="text"
              placeholder="Type here..."
              className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#CB0C9F] text-gray-600 w-64 bg-white/50"
            />
          </div>

          <div className="flex items-center gap-4 text-[#3A416F]">
            <button className="flex items-center gap-1.5 text-sm  transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Log out</span>
            </button>
            <button className=" transition-colors">
              <Settings className="w-4 h-4" />
            </button>
            <button className=" transition-colors">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
