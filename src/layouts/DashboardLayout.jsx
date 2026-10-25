import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div
        className={`
          flex-1 flex flex-col min-w-0 transition-all duration-300
          ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}
        `}
      >
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 pb-0 p-4 lg:p-6">
          {/* This is where the Dashboard content will go later */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
