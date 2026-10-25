import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  X, LayoutGrid, CalendarDays, Stethoscope, Hospital, 
  MessageSquare, Store, Pill, Users, UserCog, Wrench, HelpCircle
} from 'lucide-react';
import logoImage from '../assets/logo.png'; // Adjust path if needed

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutGrid },
  { path: '/appointments', label: 'Appointments', icon: CalendarDays },
  { path: '/find-doctor', label: 'Find Doctor', icon: Stethoscope },
  { path: '/find-clinic', label: 'Find Clinic', icon: Hospital },
  { path: '/chat', label: 'Chat', icon: MessageSquare },
  { path: '/marketplace', label: 'Find MarketPlace', icon: Store },
  { path: '/find-pharmacy', label: 'Find Pharmacy', icon: Pill },
  { path: '/dependents', label: 'My Dependents', icon: Users },
  { path: '/account', label: 'My Account', icon: UserCog },
  { path: '/settings', label: 'Settings', icon: Wrench },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  // Track manual toggle state separately from hover state
  const [isHovered, setIsHovered] = useState(false);

  // Determine if the sidebar should visually be expanded
  const isExpanded = isOpen || isHovered;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          fixed top-0 left-0 z-50 h-screen bg-[#F8F9FA] border-r border-gray-100 flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-20'}
          ${isHovered ? 'lg:w-64' : ''}
        `}
      >
        {/* Scrollable Area: Added p-2 for all-around padding */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col p-2">
          
          {/* 1. Top Logo Section */}
          <div className="flex items-center justify-between h-14 px-2 shrink-0 mt-2">
            <div className="flex items-center gap-2 overflow-hidden">
              <img 
                src={logoImage} 
                alt="MyPatientHUB Logo" 
                className="w-7 h-7 object-contain shrink-0" 
              />
              <span
                className={`text-[#3A416F] font-semibold text-sm whitespace-nowrap transition-opacity duration-300 ${
                  isExpanded ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                MyPatientHUB
              </span>
            </div>

            {/* Close Button (Only shows if manually opened on mobile, or if hovered on desktop) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors shrink-0 ${
                isExpanded ? "block" : "hidden"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* 2. The HR Separator */}
          <div className="w-full px-2 shrink-0 mb-4 mt-1">
            <hr className="w-[80%] mx-auto border-gray-200" />
          </div>

          {/* 3. Navigation Links */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={({ isActive }) => `
                  flex items-center gap-3 px-2 py-1.5 rounded-xl transition-colors group shrink-0
                  ${isActive ? "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]" : "hover:bg-gray-100/50"}
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* FIX: Icon wrapper is w-9 h-9 to match width exactly and prevent stretching */}
                    <div
                      className={`
                        flex items-center justify-center w-9 h-9 rounded-xl shrink-0 transition-colors
                        ${
                          isActive
                            ? "bg-[#CB0C9F] text-white"
                            : "bg-white border border-gray-100 text-[#6E7A93]"
                        }
                      `}
                    >
                      <item.icon
                        className="w-4 h-4" // Slightly smaller icon
                        strokeWidth={isActive ? 2 : 1.5}
                      />
                    </div>

                    <span
                      className={`
                        text-sm whitespace-nowrap transition-all duration-300
                        ${isActive ? "text-[#3A416F] font-medium" : "text-[#6E7A93]"}
                        ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0 hidden"}
                      `}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* 4. Promo Card */}
          <div
            className={`mt-4 shrink-0 transition-all duration-300 ${isExpanded ? "block" : "hidden"}`}
          >
            <div className="relative rounded-2xl p-4 text-white overflow-hidden bg-linear-to-br from-[#CE3E9F] via-[#C03BB3] to-[#9E4BBF] shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-20 -mt-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-xl -ml-10 -mb-10 pointer-events-none"></div>

              <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm relative z-10">
                <HelpCircle className="w-4 h-4 text-[#CB0C9F]" strokeWidth={2.5} />
              </div>

              <div className="relative z-10 mb-3">
                <h3 className="text-base font-bold mb-0.5 tracking-tight">Download</h3>
                <p className="text-xs font-medium text-white/90">MyPIHUB Mobile App</p>
              </div>

              <div className="flex gap-2 relative z-10">
                <button className="flex-1 h-8 bg-white hover:bg-gray-50 transition-colors rounded-lg flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#CB0C9F] fill-current">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.8 1.19-1.97 1.03-3.12-1.12.06-2.47.8-3.23 1.6-.65.7-1.17 1.88-1 3.03 1.24.1 2.47-.68 3.2-1.51z" />
                  </svg>
                </button>
                <button className="flex-1 h-8 bg-white hover:bg-gray-50 transition-colors rounded-lg flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#CB0C9F] fill-current">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
}