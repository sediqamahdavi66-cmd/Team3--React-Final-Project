import { useState } from "react";
import Footer from "../components/Footer";
import { HelpCircle, Menu, MoreVertical, Expand } from "lucide-react";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Legend,
} from "recharts";

// --- IMAGES ---
import img1 from "../assets/1.png";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";
import img4 from "../assets/4.svg";
import img5 from "../assets/5.svg";
import docImage from "../assets/doctor.jfif";

// --- COLORS ---
const colors = {
  blue: "#008FFB",
  green: "#00E396",
  orange: "#FEB019",
  red: "#FF4560",
};

// --- DATA ---
const clinicData = [
  { name: "Klinik Lee Healthcare", value: 19, color: "#E91E63", img: img1 },
  { name: "Klinik Bandar Baru Nilai", value: 4, color: "#2196F3", img: img2 },
  { name: "Klinik Mediviron Giant Nilai", value: 10, color: "#FFC107", img: img3 },
  { name: "KLINIK NILAI IMPIAN", value: 21, color: "#00C853", img: img4 },
  { name: "Klinik Mediviron", value: 2, color: "#3A416F", img: img5 },
];

const pharmacyData = [
  { name: "ALPRO PHARMACY NILAI", value: 15, color: "#E91E63", img: img1 },
  { name: "ALPRO PHARMACY PEKAN NILAI", value: 12, color: "#2196F3", img: img2 },
  { name: "OK PHARMACY", value: 5, color: "#FFC107", img: img3 },
  { name: "PHARMART PHARMACY NILAI", value: 9, color: "#00C853", img: img4 },
  { name: "Health Lane Family Pharmacy", value: 14, color: "#3A416F", img: img5 },
  { name: "Other", value: 5, color: "#B0BEC5", img: img1 },
];

const smartMarketData = [
  { name: "Food Panda", value: 25, color: "#E91E63", img: img1 },
  { name: "Grab Food", value: 3, color: "#2196F3", img: img2 },
  { name: "Zomato", value: 12, color: "#FFC107", img: img3 },
  { name: "Lazada", value: 7, color: "#00C853", img: img4 },
  { name: "Uber Eats", value: 10, color: "#3A416F", img: img5 },
  { name: "Other", value: 43, color: "#B0BEC5", img: img1 },
];

const radarData = [
  { subject: "2017", Malaria: 80, Cold: 60, Typhoid: 50, Cough: 40 },
  { subject: "2018", Malaria: 50, Cold: 90, Typhoid: 70, Cough: 30 },
  { subject: "2019", Malaria: 30, Cold: 40, Typhoid: 90, Cough: 80 },
  { subject: "2020", Malaria: 60, Cold: 70, Typhoid: 40, Cough: 100 },
  { subject: "2021", Malaria: 90, Cold: 30, Typhoid: 60, Cough: 50 },
  { subject: "2022", Malaria: 40, Cold: 80, Typhoid: 100, Cough: 70 },
];

const appointmentData = [
  { month: "Jan", Emergency: 44, Eximination: 13, Consultation: 11, Routine: 21 },
  { month: "Feb", Emergency: 55, Eximination: 23, Consultation: 17, Routine: 7 },
  { month: "Mar", Emergency: 41, Eximination: 20, Consultation: 15, Routine: 25 },
  { month: "Apr", Emergency: 67, Eximination: 8, Consultation: 15, Routine: 13 },
  { month: "May", Emergency: 22, Eximination: 13, Consultation: 21, Routine: 22 },
  { month: "Jun", Emergency: 43, Eximination: 27, Consultation: 14, Routine: 8 },
];

// --- CUSTOM COMPONENTS ---
const CustomChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#4B5563] text-white px-3 py-1.5 rounded shadow-lg flex items-center gap-2 text-sm z-50">
        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: data.color }}></div>
        <span>{data.name}: {data.value}%</span>
      </div>
    );
  }
  return null;
};

const IconTooltip = ({ text }) => (
  <div className="relative group flex items-center">
    <button className="text-gray-400 hover:text-gray-600 transition-colors">
      <HelpCircle className="w-5 h-5" strokeWidth={1.5} />
    </button>
    <div className="absolute bottom-full right-0 mb-2 w-max max-w-50 bg-black text-white text-xs px-3 py-1.5 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
      {text}
      <div className="absolute top-full right-2 border-4 border-transparent border-t-black"></div>
    </div>
  </div>
);

// --- MAIN DASHBOARD COMPONENT ---
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Days");

  const previousAppointments = [
    { name: "Dr. Mustafa", type: "Emergency", date: "Tuesday, April 5", img: docImage },
    { name: "DR. KHIRULLAH", type: "consultation", date: "Friday, November 2", img: docImage },
    { name: "DR. Bilal", type: "Eximination", date: "Monday, March 9", img: docImage },
  ];

  const upcomingAppointments = [
    { name: "Dr.Mustafa", type: "Emergency", date: "Tuesday, April 5", img: docImage },
    { name: "DR. KHIRULLAH", type: "consultation", date: "Friday, November 2", img: docImage },
    { name: "DR. Bilal", type: "Eximination", date: "Monday, March 9", img: docImage },
  ];

  const doctorsTableData = [
    { name: "Dr Ahmad", specialty: "Neurologist", fee: "RM 100", discount: "10%", img: docImage },
    { name: "Dr Azam Shah", specialty: "Autrhopedic MD", fee: "RM 130", discount: "20%", img: docImage },
    { name: "Dr Hanif", specialty: "Primary Care MD", fee: "RM 200", discount: "20%", img: docImage },
    { name: "Dr Affan", specialty: "Cardiologist", fee: "RM 400", discount: "40%", img: docImage },
  ];

  return (
    <div className=" p-4 lg:p-6 lg:pb-0 w-full max-w-[1600px] mx-auto space-y-6">
      {/* Welcome Text */}
      <h2 className="text-[26px] font-bold text-[#3A416F] mb-2">
        Welcome To MyPatientHUB!
      </h2>

      {/* ================= ROWS 1 to 3 (Charts) ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Card 1: Clinics */}
        <div className="bg-white rounded-[20px] pb-0 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#3A416F] text-lg font-semibold">
                Promotion by Clinics
              </h3>
              <IconTooltip text="See which clinics are providing you promos." />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0" style={{ width: "180px", height: "180px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={clinicData} innerRadius={45} outerRadius={75} paddingAngle={2} dataKey="value" stroke="none">
                      {clinicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomChartTooltip />} cursor={{ fill: "transparent" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 w-full min-w-0 space-y-3">
                {clinicData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={item.img} alt={item.name} className="w-8 h-8 object-contain shrink-0" />
                      <span className="text-sm text-[#3A416F] font-medium leading-tight truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm text-[#6E7A93] shrink-0">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-[#7C8DB5] hover:bg-[#6A7A9E] text-white text-xs font-bold px-5 py-2 rounded-lg transition-colors shadow-sm">
              MORE DETAILS
            </button>
          </div>
        </div>

        {/* Card 2: Pharmacies */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#3A416F] text-lg font-semibold">
                Promotion by Pharmacies
              </h3>
              <IconTooltip text="See which pharmacies are providing you promos." />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0" style={{ width: "180px", height: "180px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pharmacyData} innerRadius={45} outerRadius={75} paddingAngle={2} dataKey="value" stroke="none">
                      {pharmacyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomChartTooltip />} cursor={{ fill: "transparent" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 w-full min-w-0 space-y-3">
                {pharmacyData.filter((d) => d.name !== "Other").map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={item.img} alt={item.name} className="w-8 h-8 object-contain shrink-0" />
                      <span className="text-sm text-[#3A416F] font-medium leading-tight truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm text-[#6E7A93] shrink-0">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-[#7C8DB5] hover:bg-[#6A7A9E] text-white text-xs font-bold px-5 py-2 rounded-lg transition-colors shadow-sm">
              MORE DETAILS
            </button>
          </div>
        </div>

        {/* Card 3: Smart Market */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#3A416F] text-lg font-semibold">
                Smart Market Usage by app
              </h3>
              <IconTooltip text="See app usage stats." />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0" style={{ width: "180px", height: "180px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={smartMarketData} innerRadius={45} outerRadius={75} paddingAngle={2} dataKey="value" stroke="none">
                      {smartMarketData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomChartTooltip />} cursor={{ fill: "transparent" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 w-full min-w-0 space-y-3">
                {smartMarketData.filter((d) => d.name !== "Other").map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={item.img} alt={item.name} className="w-8 h-8 object-contain shrink-0" />
                      <span className="text-sm text-[#3A416F] font-medium leading-tight truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm text-[#6E7A93] shrink-0">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-[#7C8DB5] hover:bg-[#6A7A9E] text-white text-xs font-bold px-5 py-2 rounded-lg transition-colors shadow-sm">
              SEE ALL REFERRALS
            </button>
          </div>
        </div>

        {/* Card 4: Area Charts */}
        <div className="flex flex-col gap-4 min-w-0">
          <div className="bg-white rounded-[20px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex-1 min-h-40 flex flex-col">
            <div className="mb-2">
              <h3 className="text-[#6E7A93] text-sm font-semibold">Health Index</h3>
              <p className="text-xl font-bold text-[#3A416F]">
                70% <span className="text-green-500 text-sm">+3%</span>
              </p>
            </div>
            <div className="w-full h-25">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { x: 1, y: 30 }, { x: 2, y: 40 }, { x: 3, y: 35 }, { x: 4, y: 60 },
                    { x: 5, y: 50 }, { x: 6, y: 80 }, { x: 7, y: 70 }, { x: 8, y: 100 },
                  ]}
                  margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F8F9FA" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="y" stroke="#3A416F" strokeWidth={2} fill="url(#colorY)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex-1 min-h-40 flex flex-col">
            <div className="mb-2">
              <h3 className="text-[#6E7A93] text-sm font-semibold">Symptoms</h3>
              <p className="text-xl font-bold text-[#3A416F]">
                70% <span className="text-green-500 text-sm">+3%</span>
              </p>
            </div>
            <div className="w-full h-25">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { x: 1, y: 50 }, { x: 2, y: 40 }, { x: 3, y: 60 }, { x: 4, y: 45 },
                    { x: 5, y: 70 }, { x: 6, y: 55 }, { x: 7, y: 80 }, { x: 8, y: 75 },
                  ]}
                  margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorY2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F8F9FA" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="y" stroke="#3A416F" strokeWidth={2} fill="url(#colorY2)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Card 5: Radar Chart */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] min-w-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#3A416F] text-lg font-semibold">
              Chronic wellness Tracker
            </h3>
            <Menu className="w-5 h-5 text-gray-400" />
          </div>
          <div className="w-full h-75 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#8884d8", fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 120]} tick={{ fontSize: 10 }} />
                <Radar name="Malaria" dataKey="Malaria" stroke={colors.blue} fill={colors.blue} fillOpacity={0.3} />
                <Radar name="Cold" dataKey="Cold" stroke={colors.green} fill={colors.green} fillOpacity={0.3} />
                <Radar name="Typhoid" dataKey="Typhoid" stroke={colors.orange} fill={colors.orange} fillOpacity={0.3} />
                <Radar name="Cough" dataKey="Cough" stroke={colors.red} fill={colors.red} fillOpacity={0.3} />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
                  formatter={(value) => (
                    <span style={{ color: "#373d3f", fontSize: "12px" }}>{value}</span>
                  )}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 6: Stacked Bar Chart */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] min-w-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#3A416F] text-lg font-semibold">Appointment</h3>
            <Menu className="w-5 h-5 text-gray-400" />
          </div>
          <div className="w-full h-75">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={appointmentData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#373d3f" }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#373d3f" }} />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend
                  iconType="square"
                  wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
                  formatter={(value) => (
                    <span style={{ color: "#373d3f", fontSize: "12px" }}>{value}</span>
                  )}
                />
                <Bar dataKey="Emergency" stackId="a" fill={colors.blue} barSize={40} />
                <Bar dataKey="Eximination" stackId="a" fill={colors.green} barSize={40} />
                <Bar dataKey="Consultation" stackId="a" fill={colors.orange} barSize={40} />
                <Bar dataKey="Routine" stackId="a" fill={colors.red} radius={[5, 5, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ================= ROW 4 (Map & Appointments) ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-4 items-stretch">
        {/* Left Side: Map */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] relative min-h-125">
          <div className="absolute top-4 left-4 z-10 flex bg-white rounded-md shadow-sm overflow-hidden border border-gray-200">
            <button className="px-4 py-1.5 text-sm font-medium bg-[#E9ECEF] text-[#3A416F]">Map</button>
            <button className="px-4 py-1.5 text-sm font-medium bg-white text-gray-600 hover:bg-gray-50">Satellite</button>
          </div>

          <div className="absolute top-4 right-4 z-10 bg-white p-1.5 rounded-md shadow-sm border border-gray-200 text-gray-500 cursor-pointer">
            <Expand className="w-4 h-4" />
          </div>

          <iframe
            title="Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020080.628597078!2d100.89625899240549!3d3.138492670950034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b1f9c1f41!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full min-h-125 rounded-[20px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side: Appointments List */}
        <div className="flex flex-col gap-4">
          {/* Previous Appointments */}
          <div className="bg-white rounded-[20px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex-1">
            <h3 className="text-[#3A416F] text-lg font-semibold mb-4">
              Previous Appointments
            </h3>
            <div className="space-y-4">
              {previousAppointments.map((doc, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={doc.img} alt={doc.name} className="w-10 h-10 rounded-full border border-gray-100 object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-[#3A416F]">{doc.name}</p>
                      <p className="text-xs text-[#6E7A93]">{doc.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-[#6E7A93] hidden sm:block">{doc.date}</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Up Coming Appointments */}
          <div className="bg-white rounded-[20px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex-1 flex flex-col">
            <h3 className="text-[#3A416F] text-lg font-semibold mb-4">
              Up Coming Appointments
            </h3>
            <div className="flex bg-[#E0F2FE] rounded-md overflow-hidden mb-4">
              {["Days", "Months", "Years"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-1.5 mx-1.5 my-1.5 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-white text-[#3A416F] shadow-sm"
                      : "text-[#6E7A93] hover:bg-white/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {upcomingAppointments.map((doc, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={doc.img} alt={doc.name} className="w-10 h-10 rounded-full border border-gray-100 object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-[#3A416F]">{doc.name}</p>
                      <p className="text-xs text-[#6E7A93]">{doc.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-[#6E7A93] hidden sm:block">{doc.date}</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= ROW 5 (Doctors Table) ================= */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] w-full min-w-0">
        <div className="p-5 border-b border-gray-100">
          <h3 className="text-[#3A416F] text-lg font-semibold">Doctors</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-150">
            <tbody>
              {doctorsTableData.map((doc, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-5 w-1/4">
                    <div className="flex items-center gap-3">
                      <img src={doc.img} alt={doc.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-[10px] text-[#6E7A93]">Name:</p>
                        <p className="text-sm font-medium text-[#3A416F]">{doc.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5 w-1/4">
                    <p className="text-[10px] text-[#6E7A93]">Specialty:</p>
                    <p className="text-sm font-medium text-[#3A416F]">{doc.specialty}</p>
                  </td>
                  <td className="py-4 px-5 w-1/4">
                    <p className="text-[10px] text-[#6E7A93]">Consultation_fee:</p>
                    <p className="text-sm font-medium text-[#3A416F]">{doc.fee}</p>
                  </td>
                  <td className="py-4 px-5 w-1/4">
                    <p className="text-[10px] text-[#6E7A93]">Discount:</p>
                    <p className="text-sm font-medium text-[#3A416F]">{doc.discount}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}