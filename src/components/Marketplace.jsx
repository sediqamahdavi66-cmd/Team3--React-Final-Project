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
  { name: 'Find Marketplace', icon: ShoppingBag, active: true },
  { name: 'Find Pharmacy', icon: Pill },
  { name: 'My Dependents', icon: Users },
  { name: 'My Account', icon: UserCog },
];

// ================= LOGOS (SVG داخلی - دقیقاً شبیه لوگوهای اصلی) =================
const FoodPandaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full object-contain p-1">
    <rect width="100" height="100" fill="#e91e63" rx="15" />
    <circle cx="50" cy="40" r="18" fill="white" />
    <circle cx="42" cy="38" r="4" fill="#e91e63" />
    <circle cx="58" cy="38" r="4" fill="#e91e63" />
    <path d="M 45 48 Q 50 53 55 48" stroke="#e91e63" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M 30 30 Q 40 15 50 25" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M 70 30 Q 60 15 50 25" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
    <text x="50" y="85" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="Arial">foodpanda</text>
  </svg>
);

const GrabLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full object-contain p-1">
    <rect width="100" height="100" fill="#00b14f" rx="15" />
    <text x="50" y="65" fill="white" fontSize="45" fontWeight="bold" textAnchor="middle" fontFamily="Arial">G</text>
  </svg>
);

const DeliverooLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full object-contain p-1">
    <rect width="100" height="100" fill="#00ccbc" rx="15" />
    <text x="50" y="65" fill="white" fontSize="45" fontWeight="bold" textAnchor="middle" fontFamily="Arial">D</text>
  </svg>
);

// ================= PRODUCTS =================
const products = [
  {
    id: 1,
    name: 'Healthy Diet',
    price: '5 RM',
    provider: 'Food Panda',
    logo: <FoodPandaLogo />,
    description: 'As Uber works through a huge amount of internal management turmoil.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Healthy Diet',
    price: '10 RM',
    provider: 'Grab Food',
    logo: <GrabLogo />,
    description: 'Music is something that every person has his or ing that every person has his or',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Healthy Diet',
    price: '15 RM',
    provider: 'Deliveroo',
    logo: <DeliverooLogo />,
    description: 'Different people have different taste, and various types of music.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Healthy Diet',
    price: '20 RM',
    provider: 'Food Panda',
    logo: <FoodPandaLogo />,
    description: 'Different people have different taste, and various types of music.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

// ================= TABLE DATA =================
const tableData = [
  { id: 1, name: 'Healthy Diet', category: 'Food', service: 'Grab Food', discount: 5, price: '9 RM', code: '877712', logo: <GrabLogo />, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Healthy Diet', category: 'Food', service: 'Delivroo', discount: 9, price: '25 RM', code: '0134729', logo: <DeliverooLogo />, image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Healthy Diet', category: 'Food', service: 'Food Panda', discount: 5, price: '15 RM', code: '113213', logo: <FoodPandaLogo />, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  { id: 4, name: 'Healthy Diet', category: 'Food', service: 'Food Panda', discount: 7, price: '25 RM', code: '634729', logo: <FoodPandaLogo />, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  { id: 5, name: 'Healthy Diet', category: 'Food', service: 'Food Panda', discount: 0, price: '20 RM', code: '634729', logo: <FoodPandaLogo />, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
];

// ================= MAIN COMPONENT =================
const Marketplace = ({ onPageChange }) => {
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
                  if (item.name === 'Find Pharmacy') onPageChange('pharmacy');
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
              <Home size={13} /> <span>/</span> <span>Marketplace</span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-[22px] font-bold text-[#2c3e50]">Marketplace</h1>
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
              Search Marketplaces and order what you need
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col">
                  {/* عکس واقعی غذا */}
                  <div className="w-full h-[175px] rounded-xl overflow-hidden mb-4 bg-gray-50 flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[15px] text-[#2c3e50]">{product.name}</span>
                    <span className="text-[19px] font-bold text-[#00bcd4]">{product.price}</span>
                  </div>

                  {/* لوگوی داخلی رستوران */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                      {product.logo}
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
                Other results for healthy diet search
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
                    <th className="px-6 py-4">NAME</th>
                    <th className="px-6 py-4">CATEGORY</th>
                    <th className="px-6 py-4">SERVICE BY</th>
                    <th className="px-6 py-4 text-center">DISCOUNT</th>
                    <th className="px-6 py-4 text-center">PRICE</th>
                    <th className="px-6 py-4 text-center">ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f2f5]">
                  {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-[#fafbfc] transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-[50px] h-[50px] rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                             <img src={row.image} alt="food" className="w-full h-full object-cover" />
                          </div>
                          <span className="font-medium text-[15px] text-[#2c3e50]">{row.name}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-[14px] text-[#7f8c8d]">{row.category}</td>

                      {/* لوگوی داخلی در جدول */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-[45px] h-[45px] rounded-md border border-gray-100 overflow-hidden bg-white shadow-sm flex items-center justify-center">
                            {row.logo}
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
              Showing 1 to 5 of 5 entries
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

export default Marketplace;