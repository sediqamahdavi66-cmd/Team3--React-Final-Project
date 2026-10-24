
import React from "react";
import { mainMenu } from "../../../config/Config";
import MenuItem from "./MenuItem";

const Sidebar = ({ collapsed, isMobile, setIsMobile }) => {
  const [isHover, setIsHover] = React.useState(false);

  // Expand the sidebar when hovered or when it is not collapsed.
  const isMinimize = !collapsed || isHover;

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setIsMobile(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col
          overflow-y-auto border-r border-gray-100
          bg-[#f8f9fa] px-4 pt-3
          transition-all duration-300 ease-in-out
          lg:sticky lg:z-20 lg:translate-x-0
          ${isMinimize ? "w-64" : "w-[72px]"}
          ${
            isMobile
              ? "m-1.5 translate-x-0 rounded-2xl bg-[#f8f9fa]"
              : "-translate-x-full"
          }
        `}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* Logo */}
        <div
          className={`flex h-[64px] shrink-0 items-center ${
            isMinimize ? "gap-2 px-2" : "justify-center"
          }`}
        >
          <img
            src="/logo.png"
            alt="MyPatientHUB Logo"
            className="h-9 w-9 shrink-0 object-contain"
          />

          {isMinimize && (
            <span className="whitespace-nowrap text-[18px] font-semibold text-[#344767]">
              MyPatientHUB
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="my-3 h-px w-full shrink-0 bg-[#344767]/10" />

        {/* Navigation */}
        <nav className="flex flex-col gap-2 pb-5">
          {mainMenu.map((item) => (
            <MenuItem
              key={item.path}
              path={item.path}
              collapsed={isMinimize}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
