import React from 'react';
import { 
  LayoutDashboard, CalendarDays, Stethoscope, Hospital, 
  MessageSquare, ShoppingBag, Pill, Users, UserCog, 
  Search, Settings, Bell, LogOut, Menu, Home
} from 'lucide-react';

// ================= SIDEBAR =================
const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Appointments', icon: CalendarDays },
  { name: 'Find Doctor', icon: Stethoscope },
  { name: 'Find Clinic', icon: Hospital },
  { name: 'Chat', icon: MessageSquare },
  { name: 'Find Marketplace', icon: ShoppingBag },
  { name: 'Find Pharmacy', icon: Pill, active: true },
  { name: 'My Dependents', icon: Users },
  { name: 'My Account', icon: UserCog },
];

// ================= MEDICINE IMAGE (SVG داخلی) =================
const MedicineBox = ({ className = "" }) => (
  <svg viewBox="0 0 200 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6a1b9a" />
        <stop offset="100%" stopColor="#4a148c" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="180" height="100" rx="6" fill="url(#purpleGrad)" />
    <rect x="10" y="10" width="180" height="20" rx="6" fill="#7b1fa2" />
    <text x="22" y="24" fill="#fff" fontSize="9" fontWeight="bold">1X14 Capsules</text>
    <text x="100" y="65" fill="#fff" fontSize="28" fontWeight="900" textAnchor="middle" fontStyle="italic">ESSO</text>
    <text x="160" y="65" fill="#fff" fontSize="20" fontWeight="900" textAnchor="middle">40</text>
    <text x="100" y="85" fill="#e1bee7" fontSize="8" textAnchor="middle">(Esomeprazole, U.S.P) 40mg</text>
    <path d="M10 95 Q 100 115 190 95" stroke="#ce93d8" strokeWidth="2" fill="none" opacity="0.5"/>
  </svg>
);

// ================= LOGOS (لینک‌های واقعی داروخانه‌ها) =================
const PHARMACY_1 = 'https://mypihub.web.app/static/media/pharmacy1.d1b1a8ff2faf6ff84211.jfif';
const PHARMACY_2 = 'https://mypihub.web.app/static/media/pharmacy2.f3e67ba351c66d8563b2.jfif';
const PHARMACY_3 = 'https://mypihub.web.app/static/media/pharmacy3.76d980a7d8a274efe18e.jfif';
const PHARMACY_4 = 'https://mypihub.web.app/static/media/pharmacy4.d0238ce8a7760d86b4e3.jfif';

// ================= PRODUCTS =================
const products = [
  {
    id: 1,
    name: 'Esomephrazole',
    price: '10 RM',
    provider: 'Carry Medical',
    logo: PHARMACY_1,
    description: 'Carry Medical Provide Fresh and Excellent Quality Drugs',
  },
  {
    id: 2,
    name: 'Esomephrazole',
    price: '9 RM',
    provider: 'Pool Medical',
    logo: PHARMACY_2,
    description: 'High Quality is Our Strenght we provide good',
  },
  {
    id: 3,
    name: 'Esomephrazole',
    price: '8 RM',
    provider: 'OK Pharmacy',
    logo: PHARMACY_3,
    description: 'Different people have different taste, and various types of tablet.',
  },
  {
    id: 4,
    name: 'Esomephrazole',
    price: '11 RM',
    provider: 'Hamza Pharma',
    logo: PHARMACY_4,
    description: 'Different people have different taste, and various types of music.',
  }
];

// ================= TABLE DATA =================
const tableData = [
  { id: 1, name: 'Esso', category: 'Tablet', service: 'Caring Pharmacy', discount: 1, price: '5 RM', code: '8234', logo: PHARMACY_2 },
  { id: 2, name: 'Esso', category: 'Tablet', service: 'OK Pharmacy', discount: 3, price: '9 RM', code: '872', logo: PHARMACY_3 },
  { id: 3, name: 'Esso', category: 'Tablet', service: 'Hilton Medical', discount: 5, price: '7 RM', code: '0134', logo: PHARMACY_1 },
  { id: 4, name: 'Esso', category: 'Tablet', service: 'Hinucion Pharma', discount: 5, price: '9 RM', code: '113', logo: PHARMACY_4 },
  { id: 5, name: 'Esso', category: 'Tablet', service: 'Hamza Medical Pharmacy', discount: 7, price: '20 RM', code: '629', logo: PHARMACY_2 },
  { id: 6, name: 'Esso', category: 'Tablet', service: 'Food Panda', discount: 0, price: '20 RM', code: '634729', logo: PHARMACY_4 },
];

// ================= MAIN COMPONENT =================
const Pharmacy = ({ onPageChange }) => {
  return (
    <div className="flex h-screen bg-[#f5f6fa] text-[#2c3e50]" style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>

      {/* ================= SIDEBAR ================= */}
      <aside className="w-[260px] bg-white border-r border-[#ececec] hidden lg:flex flex-col">
        <div className="h-[95px] flex items-center px-7">
          <div className="flex items-center gap-3">
            <img src="https://mypihub.web.app/static/media/logo-ct.71dc3cd8882014cd0536.png" alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-[17px] font-bold text-[#2c3e50] tracking-tight">MyPatientHUB</span>
          </div>
        </div>

        <nav className="px-4 space-y-1 mt-3">
          {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  if (item.name === 'Find Marketplace') onPageChange('marketplace');
                }}
                className={`w-full flex items-center gap-4 px-4 py-[13px] rounded-xl transition-all duration-200 text-left ${
                  item.active
                    ? 'bg-gradient-to-r from-[#ec407a] to-[#ab47bc] text-white shadow-lg shadow-pink-200/50'
                    : 'text-[#7f8c8d] hover:bg-gray-50'
                }`}
              >
                <IconComponent size={19} className={item.active ? 'text-white' : 'text-[#95a5a6]'} />
                <span className={`text-[14.5px] ${item.active ? 'font-medium' : 'font-normal'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* ================= HEADER ================= */}
        <header className="h-[95px] bg-white flex items-center justify-between px-8">
          <div className="flex flex-col">
            <div className="text-[12.5px] text-[#95a5a6] mb-1 flex items-center gap-1.5">
              <Home size={13} /> <span>/</span> <span>Pharmacyplace</span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-[22px] font-bold text-[#2c3e50]">Pharmacyplace</h1>
              <Menu size={20} className="text-[#95a5a6] cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search size={18} className="absolute left-3.5 top-3 text-[#bdc3c7]" />
              <input
                type="text"
                placeholder="Type here..."
                className="pl-11 pr-4 py-2.5 bg-white border border-[#e0e6ed] rounded-lg text-[14px] text-[#7f8c8d] w-[280px] focus:outline-none focus:border-[#ec407a] placeholder-[#bdc3c7] transition-colors"
              />
            </div>

            <div className="flex items-center gap-6 text-[#7f8c8d]">
              <button className="flex items-center gap-2 text-[14px] font-medium hover:text-[#ec407a] transition-colors">
                <LogOut size={18} /> Log out
              </button>
              <button className="hover:text-[#ec407a] transition-colors"><Settings size={20} /></button>
              <button className="hover:text-[#ec407a] transition-colors"><Bell size={20} /></button>
            </div>
          </div>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 overflow-y-auto px-8 py-6">

          {/* ============ Cards Section ============ */}
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h2 className="text-[20px] font-bold text-[#2c3e50] mb-6">
              Search Pharmacies for Medicines
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col">
                  <div className="w-full h-[175px] rounded-xl overflow-hidden mb-4 bg-[#faf5ff] flex items-center justify-center p-4">
                    <MedicineBox className="w-full h-full" />
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[15px] text-[#2c3e50]">{product.name}</span>
                    <span className="text-[19px] font-bold text-[#00bcd4]">{product.price}</span>
                  </div>

                  {/* نمایش عکس مغازه داروخانه از لینک */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-[45px] h-[45px] rounded-full overflow-hidden border border-gray-200 shadow-sm bg-white flex items-center justify-center">
                      <img src={product.logo} alt={product.provider} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-[15.5px] text-[#2c3e50]">{product.provider}</span>
                  </div>

                  <p className="text-[13.5px] text-[#7f8c8d] leading-[1.6] mb-5 flex-1">
                    {product.description}
                  </p>

                  <button 
                    className="w-full py-[11px] text-white text-[13px] font-bold rounded-lg tracking-wide transition-all shadow-md hover:shadow-lg"
                    style={{ background: 'linear-gradient(to right, #ec407a, #ab47bc)' }}
                  >
                    BUY NOW
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ============ Table Section ============ */}
          <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">

            <div className="px-6 pt-6 pb-3">
              <h2 className="text-[20px] font-bold text-[#2c3e50]">
                6 Medicine returned for the keyword Esso
              </h2>
            </div>

            <div className="px-6 pb-5 flex justify-between items-center flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select className="appearance-none border border-[#e0e6ed] rounded-lg pl-3.5 pr-9 py-2 text-[14px] text-[#7f8c8d] focus:outline-none focus:border-[#ec407a] cursor-pointer bg-white w-[80px]">
                    <option>7</option>
                    <option>10</option>
                    <option>20</option>
                  </select>
                  <span className="absolute right-3 top-2.5 pointer-events-none text-[#bdc3c7]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
                <span className="text-[14px] text-[#7f8c8d]">entries per page</span>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-4 pr-4 py-2 border border-[#e0e6ed] rounded-lg text-[14px] text-[#7f8c8d] placeholder-[#bdc3c7] focus:outline-none focus:border-[#ec407a] w-[280px]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[11.5px] font-bold text-[#95a5a6] uppercase tracking-wider border-y border-[#f0f2f5] bg-[#f8f9fb]">
                    <th className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        NAME <span className="text-[#d5d8dc] text-[10px]">▲▼</span>
                      </div>
                    </th>
                    <th className="px-6 py-4">CATEGORY</th>
                    <th className="px-6 py-4">SERVICE BY</th>
                    <th className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        DISCOUNT <span className="text-[#d5d8dc] text-[10px]">▲▼</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        PRICE <span className="text-[#d5d8dc] text-[10px]">▲▼</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        ID <span className="text-[#d5d8dc] text-[10px]">▲▼</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f2f5]">
                  {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-[#fafbfc] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-[50px] h-[50px] rounded-md bg-[#f3e5f5] flex items-center justify-center overflow-hidden p-1">
                            <MedicineBox className="w-full h-full" />
                          </div>
                          <span className="font-medium text-[15px] text-[#2c3e50]">{row.name}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-[14px] text-[#7f8c8d]">{row.category}</td>

                      {/* نمایش عکس مغازه در جدول */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-[45px] h-[45px] rounded-md border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <img src={row.logo} alt={row.service} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-medium text-[15px] text-[#2c3e50]">{row.service}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center text-[14px] text-[#7f8c8d]">{row.discount}</td>
                      <td className="px-6 py-4 text-center text-[14px] font-medium text-[#7f8c8d]">{row.price}</td>
                      <td className="px-6 py-4 text-center text-[14px] text-[#7f8c8d]">{row.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-5 text-[14px] text-[#95a5a6] border-t border-[#f0f2f5]">
              Showing 1 to 6 of 6 entries
            </div>
          </div>
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="px-8 py-4 flex justify-between items-center text-[13.5px] text-[#7f8c8d] border-t border-[#f0f2f5] bg-white">
          <div className="flex items-center gap-1.5">
            © 2026, made with <span className="text-[#ec407a]">❤</span> by 
            <span className="font-bold text-[#2c3e50] ml-1">MyPiHUB</span> 
            <span className="ml-1">for a better web.</span>
          </div>
          <div className="flex items-center gap-7">
            <a href="#" className="hover:text-[#ec407a] transition-colors">MyPatientHUB</a>
            <a href="#" className="hover:text-[#ec407a] transition-colors">About Us</a>
            <a href="#" className="hover:text-[#ec407a] transition-colors">Blog</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Pharmacy;