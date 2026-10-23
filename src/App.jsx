import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import LoginPage from './LoginPage'

function Check({ ck, setCk, label }) {
  return (
    <label className='flex items-center gap-3 mb-[18px] cursor-pointer'>
      <div onClick={() => setCk(!ck)} className={ck ? 'w-[18px] h-[18px] rounded-[4px] bg-[#344767] flex items-center justify-center' : 'w-[18px] h-[18px] rounded-[4px] border border-gray-300 bg-white'}>
        {ck && <span className='text-white text-[11px]'>✓</span>}
      </div>
      <span className='text-[13px] text-[#344767] font-medium'>{label}</span>
    </label>
  )
}
function ClockIcon(){
  return (<div className="w-[18px] h-[18px] rounded-full bg-[#8a94a6] flex items-center justify-center shrink-0"><svg className="w-[11px] h-[11px] fill-white" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2zm.5 11H7v-2h3.5V7h2v6z"/></svg></div>)
}
function FilterSelect({ id, value, options, open, setOpen, focused, setFocused, onSelect }) {
  const isOpen = open === id
  const isFocused = focused === id || isOpen
  return (
    <div className="relative w-full mb-3">
      <div onClick={() => { setOpen(isOpen ? null : id); setFocused(id) }} className="w-full h-10 rounded-lg px-3 flex items-center justify-between cursor-pointer bg-white outline-none" style={{ border: isFocused ? '2px solid #2bc4e1' : '1px solid #e5e7eb' }}>
        <span className="text-[13px] text-[#9ca3af]">{value}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}><path d="M3 5l3.5 3.5L10 5" stroke="#344767" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      {isOpen && (
        <div className="absolute z-[100] mt-1 w-full bg-white rounded-lg shadow border overflow-hidden max-h-[160px] overflow-y-auto">
          {options.map(opt => (<div key={opt} onClick={() => { onSelect(opt); setOpen(null); setFocused(null) }} className="px-3 py-2 cursor-pointer text-[13px] hover:bg-[#f0f8ff]" style={{ background: value === opt ? '#f3f4f6' : 'white', color: '#4b5563' }}>{opt}</div>))}
        </div>
      )}
    </div>
  )
}

function HospitalDetail({ onBack, goToLogin }) {
  const [openAcc, setOpenAcc] = useState(null)
  const [active, setActive] = useState('basic-info')
  const goTo = (id) => { setActive(id); window.location.hash = id; document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  useEffect(() => { const h = window.location.hash.replace('#',''); if(h) setActive(h) }, [])

  const team = [
    { name: 'PROF DR.\nMuhammad\nshamsir', img: '/doctor1.jpg' },
    { name: 'PROF DR.\nMADYA DR.\nKhairullah', img: '/doctor2.jpg' },
    { name: 'Dr. Mohd\nRadzniwan', img: '/doctor3.jpg' },
    { name: 'Dr. Fatima\nBegum', img: '/doctor4.jpg' },
    { name: 'Dr. Sharifah\nNajwa', img: '/doctor5.jpg' },
  ]
  const itemClass = (id) => `flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer ${active===id ? 'bg-[#f0f2f5] font-bold text-[#344767]' : 'text-[#67748e]'}`

  const faqs = [
    { title: 'Guest Services', type: 'list', items: ['Service one', 'Service Two'] },
    { title: 'International Patient Services', type: 'text', text: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.' },
    { title: 'Language Disability Services', type: 'text', text: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.' },
    { title: 'Patient Relations', type: 'text', text: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.' },
    { title: 'Spiritual, Religious and Chaplaincy Services for Adults', type: 'text', text: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.' },
    { title: 'What to Bring for your Hospital Stay', type: 'text', text: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.' },
  ]

  return (
    <div style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }} className="min-h-screen bg-[#f0f2f5] p-3">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl overflow-hidden relative" style={{ height: '340px' }}>
          <img src="/Klinik.jpg" className="absolute inset-0 w-full h-full object-cover" alt="" />
          <div className="absolute top-0 left-0 right-0 p-5 flex justify-between">
            <span onClick={onBack} className="text-white text-sm cursor-pointer bg-black/30 px-3 py-1 rounded-lg">← / hospital</span>
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-xl h-10 w-64 flex items-center px-3 gap-2 shadow"><span className="material-icons-round text-xl" style={{ color: '#344767' }}>search</span><input placeholder="Type here..." className="w-full outline-none text-sm text-black" /></div>
              <div className="text-white text-sm flex gap-3"><span className="cursor-pointer" onClick={goToLogin}>Log out</span><span className="material-icons-round">settings</span><span className="material-icons-round">notifications</span></div>
            </div>
          </div>
        </div>
        <div className="relative -mt-16 mx-6 bg-white rounded-xl shadow p-6 flex gap-4 items-center"><div className="w-16 h-16 bg-white rounded-xl shadow overflow-hidden"><img src="/KlinikLogo.jpg" className="w-full h-full object-contain" /></div><div><h2 className="font-bold text-[18px] text-[#2D3748]">Klinik Pakar Kesihatan USIM</h2><p className="text-[13px] text-[#718096]">Malaysia</p></div></div>
        <div className="grid grid-cols-3 gap-4 mt-6 mx-2"><div className="bg-white rounded-xl p-5 shadow-sm"><p className="font-bold text-[#E53E3E] text-[15px]">Top Ranking</p><p className="text-[13px] text-[#4A5568] mt-1">Ranked among best hospital in UK</p></div><div className="bg-white rounded-xl p-5 shadow-sm"><p className="font-bold text-[#DD6B20] text-[15px]">Excellent Services</p><p className="text-[13px] text-[#4A5568] mt-1">InPatient and outpatient high quality services</p></div><div className="bg-white rounded-xl p-5 shadow-sm"><p className="font-bold text-[#DD6B20] text-[15px]">Experienced Doctors</p><p className="text-[13px] text-[#4A5568] mt-1">High Quality healthcare by professional and experienced Doctors</p></div></div>
        
        {/* باکس چپ فقط تا عکس دکترها میچسبد */}
        <div className="mt-6 mx-2 flex gap-6 items-start">
          <div className="w-[220px] shrink-0 bg-white rounded-xl p-4 shadow-sm sticky top-6 self-start">
            <div className="flex flex-col gap-1 text-[13px]">
              <div onClick={()=>goTo('profile')} className={itemClass('profile')}><span className="material-icons-round text-[18px]">rocket_launch</span> Profile</div>
              <div onClick={()=>goTo('basic-info')} className={itemClass('basic-info')}><span className="material-icons-round text-[18px]">article</span> Basic Info</div>
              <div onClick={()=>goTo('change-password')} className={itemClass('change-password')}><span className="material-icons-round text-[18px]">inventory_2</span> Change Password</div>
              <div onClick={()=>goTo('2fa')} className={itemClass('2fa')}><span className="material-icons-round text-[18px]">storefront</span> 2FA</div>
              <div onClick={()=>goTo('sessions')} className={itemClass('sessions')}><span className="material-icons-round text-[18px]">build</span> Sessions</div>
              <div onClick={()=>goTo('delete-account')} className={itemClass('delete-account')}><span className="material-icons-round text-[18px]">credit_card</span> Delete Account</div>
            </div>
          </div>
          <div id="profile"></div>
          <div id="basic-info" className="flex-1 bg-white rounded-xl p-7 shadow-sm">
            <h3 className="font-bold text-[18px] text-[#2D3748] mb-4">About Us</h3>
            <p className="text-[13.5px] text-[#4A5568] leading-6">Klinik Pakar kesihatan USIM mula beroperasi pasa 1 April 2015. Klinik yang berkonsepkan wakaf ini menawarkan pelbagai perkhidmatan kepakaran perubatan,perubatan am, perubatan keluarga, perkhidmatan pergigian dan lain-lain lagi dengan caj yang berpatutan.untuk senarai penuh perkhidmatan yang disediakan,sila KLIK DI SINI.</p>
            <div className="mt-6 text-[13.5px] text-[#4A5568] leading-6">Lot 193,194 Jalan Nilai Square 6, Bandar<br/>Baru Nilai, 71800 Nilai, Negeri Sembilan<br/>Malaysia<br/>https://klinikpakar.usim.edu.my<br/>+60126504921<br/>RQFV+HC Nilai, Negeri Sembilan, Malaysia</div>
            <h3 className="font-bold text-[16px] text-[#2D3748] mt-8 mb-4">Our Team</h3>
            <div className="grid grid-cols-5 gap-5">
              {team.map((d,i)=>(
                <div key={i} className="text-center">
                  <div className="w-full h-[145px] flex items-end justify-center bg-transparent overflow-hidden"><img src={d.img} className="w-full h-full object-contain object-bottom" alt="" /></div>
                  <p className="text-[12px] text-[#2D3748] mt-3 min-h-[36px] whitespace-pre-line leading-[13px]">{d.name}</p>
                  <button className="mt-2 w-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white font-bold rounded-lg py-2 text-[10px]">VIEW<br/>PROFILE</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="change-password" className="mt-6 mx-2 bg-white rounded-xl p-7 shadow-sm">
          <h3 className="font-bold text-[16px] mb-4">Medical and Surgical Specilities in Klinik Pakar Kesihatan USIM</h3>
          <div className="grid grid-cols-3 gap-8 text-[13px] text-[#718096] leading-6"><div>Klinik Pakar kesihatan USIM mula beroperasi pasa 1 April 2015.</div><div>Klinik Pakar kesihatan USIM mula beroperasi pasa 1 April 2015.</div><div>Klinik Pakar kesihatan USIM mula beroperasi pasa 1 April 2015.</div></div>
        </div>

        <div id="2fa" className="mt-6 mx-2 bg-white rounded-xl p-7 shadow-sm">
          <h3 className="font-bold text-[16px] mb-4">Patient and Family Support</h3>
          <div className="flex gap-10">
            <div className="flex-1">
              {faqs.map((faq, idx)=>(
                <div key={idx} className="border-b border-gray-100">
                  <div className="py-3 flex justify-between items-center cursor-pointer" onClick={()=>setOpenAcc(openAcc===idx?null:idx)}>
                    <span className="text-[13.5px] text-[#2D3748] pr-4">{faq.title}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: openAcc===idx?'rotate(180deg)':'none', transition:'0.2s' }}><path d="M3 5l3.5 3.5L10 5" stroke="#4A5568" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {openAcc===idx && (
                    <div className="pb-4 pt-1 text-[13px] text-[#67748e] leading-6">
                      {faq.type==='list' ? <div className="space-y-2">{faq.items.map((it,i)=><div key={i} className="py-2 border-b border-gray-50 last:border-0">{it}</div>)}</div> : <p>{faq.text}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-[48%] space-y-3">{[1,2,3].map(i=>(<div key={i} className="bg-[#fafafa] rounded-lg p-4"><p className="font-bold text-[#E53E3E] text-[14px]">Excellent Services</p><p className="text-[12.5px] text-[#4A5568]">InPatient and outpatient high quality services</p></div>))}</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">{[1,2,3].map(i=>(<div key={i} className="bg-[#fafafa] rounded-lg p-4"><p className="font-bold text-[#E53E3E] text-[14px]">Excellent Services</p><p className="text-[12.5px] text-[#4A5568]">InPatient and outpatient high quality services</p></div>))}</div>
        </div>

        <div className="mt-6 mx-2 bg-white rounded-xl p-7 shadow-sm"><h3 className="font-bold text-[16px] mb-2">Our Location</h3><p className="text-[13px] text-[#4A5568]">Klinik Pakar Kesihatan USIM</p><div className="mt-4 space-y-2 text-[13px] text-[#2D3748]"><div className="flex gap-2"><span className="material-icons-round text-[18px]">call</span> +60126504921</div><div className="flex gap-2"><span className="material-icons-round text-[18px]">location_on</span> Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia</div></div></div>

        <div className="mt-6 mx-2 bg-white rounded-[12px] p-7 shadow-sm"><h3 className="font-bold text-[16px] text-[#2D3748]">Treatments</h3><div className="flex justify-between mt-6 text-[13.5px] font-medium text-[#2D3748] flex-wrap"><span>Birthing Care</span><span>Heart Care</span><span>Emergency</span><span>Femily Medicine</span><span>Cancer Care</span><span>Orthopedics</span></div></div>

        <div id="sessions" className="mt-6 mx-2 bg-white rounded-[12px] p-7 shadow-sm">
          <h3 className="font-bold text-[16px] text-[#2D3748]">For Our Patients</h3>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="text-center bg-[#fcfcfd] rounded-[12px] p-6 border border-gray-100"><span className="material-icons-round" style={{ fontSize: '32px', color: '#CB0C9F' }}>schedule</span><p className="font-medium text-[15px] mt-2 text-[#2D3748]">Visiting Hours</p><p className="text-[13px] text-[#67748e] mt-1">Guest are encouraged to visit loved one during their hospital stay.</p><p className="text-[12.5px] text-[#CB0C9F] font-bold mt-3">Learn More About Our Visiting Hours</p></div>
            <div className="text-center bg-[#fcfcfd] rounded-[12px] p-6 border border-gray-100"><span className="material-icons-round" style={{ fontSize: '32px', color: '#CB0C9F' }}>wifi</span><p className="font-medium text-[15px] mt-2 text-[#2D3748]">For Our Patients</p><p className="text-[13px] text-[#67748e] mt-1">Free Wifi is available to Patients and Visior</p></div>
          </div>
        </div>

        <div className="mt-6 mx-2 bg-white rounded-[12px] p-7 shadow-sm">
          <span className="material-icons-round" style={{ fontSize: '28px', color: '#CB0C9F' }}>smoke_free</span>
          <p className="font-bold text-[15px] text-[#2D3748] mt-2">Smoke-Free Policy</p>
          <p className="text-[13px] text-[#67748e] mt-1">Smoke Free Services for in_Room and hospital services</p>
        </div>

        <div id="delete-account" className="mt-6 mx-2 bg-white rounded-[12px] p-7 shadow-sm">
          <h3 className="font-bold text-[16px] text-[#2D3748]">Insurance Plans Accepted</h3>
          <p className="text-[13px] text-[#8a94a6] mt-2">This Provider Accepts the following insurance plans.</p>
          <div className="mt-5 space-y-1 text-[13px] font-bold text-[#2D3748]"><p>AXA EMedic Plus</p><p>Allianz Diabetic</p><p>Manulife Medical Insurance</p></div>
        </div>

        <div className="mt-6 mx-2 flex justify-between items-center py-8 text-[13px] text-[#67748e] bg-transparent">
          <span>© 2026, made with ♥ by MyPiHUB for a better web.</span>
          <div className="flex gap-6"><span>MyPatientHUB</span><span>About Us</span><span>Blog</span></div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const mapDiv = useRef(null); const mapRef = useRef(null); const tileRef = useRef(null); const gestureRef = useRef(null)
  const [type, setType] = useState(''); const [terrain, setTerrain] = useState(true); const [labels, setLabels] = useState(false)
  const [showHint, setShowHint] = useState(false); const [allowMap, setAllowMap] = useState(false)
  const [all, setAll] = useState(false); const [child, setChild] = useState(false); const [adult, setAdult] = useState(false)
  const [online, setOnline] = useState(false); const [prim, setPrim] = useState(false); const [notifOpen, setNotifOpen] = useState(false)
  const [page, setPage] = useState('find'); const [clinicTab, setClinicTab] = useState('map')
  const [showDetail, setShowDetail] = useState(false)
  const [filterOpen, setFilterOpen] = useState(null)
  const [filterFocused, setFilterFocused] = useState(null)
  const [filterVals, setFilterVals] = useState({ specialty: 'Specialty', gender: 'Gender', condition: 'Condition', languages: 'languages' })

  useEffect(()=>{ if(window.location.pathname.includes('sign-in')) setPage('login') },[])
  const goToLogin = () => { setPage('login'); window.history.pushState({}, '', '/authentication/sign-in/basic') }
  const goToFind = () => { setPage('find'); setShowDetail(false); window.history.pushState({}, '', '/') }

  useEffect(() => {
    if (page==='login' || !mapDiv.current || mapRef.current || showDetail) return
    mapRef.current = L.map(mapDiv.current, { center: [3.15, 101.65], zoom: 10, zoomControl: false, attributionControl: false, dragging: true, scrollWheelZoom: false, doubleClickZoom: false, tap: false })
    tileRef.current = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}').addTo(mapRef.current)
    const pin = L.icon({ iconUrl: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png', iconSize: [27, 43], iconAnchor: [13, 43] })
    const pts = [[3.42,101.60],[3.26,101.51],[3.22,101.52],[3.17,101.50],[3.20,101.62],[3.18,101.71],[3.08,101.52]]
    pts.forEach(p => L.marker([p[0], p[1]], { icon: pin }).addTo(mapRef.current))
  }, [page, clinicTab, showDetail])

  useEffect(() => {
    if (!tileRef.current || !type) return
    let url = ''; if (type === 'map') url = terrain ? 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}' : 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
    else url = labels ? 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}' : 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    tileRef.current.setUrl(url)
  }, [type, terrain, labels])

  useEffect(() => {
    const el = gestureRef.current; if (!el) return; let timer=null
    const onTouchStart = (e) => { if (e.touches.length === 1) { setShowHint(true); setAllowMap(false) } else if (e.touches.length >= 2) { setShowHint(false); setAllowMap(true); clearTimeout(timer) } }
    const onTouchEnd = (e) => { if (e.touches.length === 0) { clearTimeout(timer); timer = setTimeout(() => { setShowHint(false); setAllowMap(false) }, 1200) } }
    el.addEventListener('touchstart', onTouchStart, { passive: true }); el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => { el.removeEventListener('touchstart', onTouchStart); el.removeEventListener('touchend', onTouchEnd) }
  }, [])

  if(page==='login') return <LoginPage onBack={goToFind} />
  if(showDetail) return <HospitalDetail onBack={()=>setShowDetail(false)} goToLogin={goToLogin} />

  return (
    <div style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }} className="min-h-screen bg-[#f0f2f5] p-3">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-2xl overflow-visible p-6 relative" style={{ backgroundImage: "url('/wave.jpg')", backgroundSize: "cover", minHeight: "380px" }}>
          <div className="flex justify-between text-white text-sm">
            <div><div className="flex gap-1 items-center"><span onClick={goToLogin} className="material-icons-round text-lg cursor-pointer hover:bg-white/20 rounded-full p-1">home</span><span className="cursor-pointer" onClick={goToLogin}>/ findhospital</span></div><div className="font-bold mt-1 cursor-pointer" onClick={goToLogin}>Findhospital</div></div>
            <div className="flex gap-3 items-center relative">
              <div className="bg-white rounded-xl h-11 w-72 flex items-center px-3 gap-2 shadow"><span className="material-icons-round text-xl" style={{ color: '#344767' }}>search</span><input placeholder="Type here..." className="w-full outline-none text-sm text-black" /></div>
              <div className="flex items-center gap-3 ml-2"><div onClick={goToLogin} className="flex items-center gap-1 cursor-pointer hover:bg-white/20 rounded-lg px-2 py-1"><span className="material-icons-round text-[20px]">account_circle</span><span>Log out</span></div><span className="material-icons-round cursor-pointer">settings</span>
                <div className="relative"><button onClick={()=>setNotifOpen(!notifOpen)} className="material-icons-round text-white hover:bg-white/20 rounded-full p-1">notifications</button>
                  {notifOpen && (<><div className="fixed inset-0 z-[40]" onClick={()=>setNotifOpen(false)}></div><div className="absolute right-0 top-[46px] z-[50] w-[360px] bg-white rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] py-2 px-2">
                        <div className="flex gap-3 px-3 py-3 hover:bg-[#f8f9fa] rounded-[8px] cursor-pointer"><div className="w-[42px] h-[42px] rounded-[12px] bg-[#FF9A2B] overflow-hidden shrink-0"><img src="https://i.pravatar.cc/150?img=33" className="w-full h-full object-cover" /></div><div><div className="text-[14px]"><span className="font-bold text-[#344767]">New Message</span> <span className="text-[#67748e]">From Laur</span></div><div className="flex items-center gap-2 mt-1 text-[13px] text-[#7b809a]"><ClockIcon/> 13 minutes ago</div></div></div>
                        <div className="flex gap-3 px-3 py-3 hover:bg-[#f8f9fa] rounded-[8px] cursor-pointer"><div className="w-[42px] h-[42px] rounded-[12px] bg-[#191414] flex items-center justify-center shrink-0"><svg viewBox="0 0 168 168" className="w-[22px] h-[22px] fill-[#1ED760]"><path d="M84 0C37.7 0 0 37.7 0 84s37.7 84 84 84 84-37.7 84-84S130.3 0 84 0zm29.8 121.1c-1.1 1.8-3.5 2.4-5.3 1.3-14.6-8.9-33-10.9-54.6-6-2.1.6-4.3-.6-4.9-2.7-.6-2.1.6-4.3 2.7-4.9 24.2-5.5 45.1-3.1 61.8 7 1.9 1.1 2.4 3.5 1.3 5.3zm15.9-22.8c-1.4 2.3-4.4 3-6.7 1.6-16.7-10.2-42.2-13.2-62-7.2-2.6.8-5.4-.7-6.2-3.3-.8-2.6.7-5.4 3.3-6.2 22.7-6.9 51.5-3.5 71 8.3 2.3 1.4 3 4.4 1.6 6.8zm1.4-23.7c-20-11.9-53-13-72.1-7.1-3.1.9-6.4-.9-7.3-4-.9-3.1.9-6.4 4-7.3 22.2-6.8 59.1-5.5 82.4 8.2 2.8 1.7 3.7 5.3 2 8.1-1.6 2.8-5.2 3.7-8 2.1z"/></svg></div><div><div className="text-[14px]"><span className="font-bold text-[#344767]">New Album</span> <span className="text-[#67748e]">By Travis Scott</span></div><div className="flex items-center gap-2 mt-1 text-[13px] text-[#7b809a]"><ClockIcon/> 1 day</div></div></div>
                        <div className="flex gap-3 px-3 py-3 hover:bg-[#f8f9fa] rounded-[8px] cursor-pointer"><div className="w-[42px] h-[42px] rounded-[12px] bg-[#8a94a6] flex items-center justify-center shrink-0"><span className="material-icons-round text-white text-[20px]">credit_card</span></div><div><div className="text-[14px] text-[#67748e]">Payment Successfully Completed</div><div className="flex items-center gap-2 mt-1 text-[13px] text-[#7b809a]"><ClockIcon/> 2 days</div></div></div>
                      </div></>)}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 text-white"><h1 className="text-4xl font-bold">Find a Clinic</h1><p className="text-sm mt-2">Search Clinics and schedule appointment</p><div className="flex justify-center gap-3 mt-6"><input placeholder="Search" className="h-10 w-[270px] rounded-xl px-4 text-[13px] text-black bg-white outline-none border-[3px] border-transparent focus:border-[#00bcd4]" /><input placeholder="Zip Code or Neighborhood" className="h-10 w-[270px] rounded-xl px-4 text-[13px] text-black bg-white outline-none border-[3px] border-transparent focus:border-[#00bcd4]" /><button className="bg-[#00bcd4] font-bold w-[110px] py-[12px] rounded-lg text-[13px]">CURRENT</button><button className="bg-[#00bcd4] font-bold w-[110px] py-[12px] rounded-lg text-[13px]">SEARCH</button></div></div>
        </div>
        <div className="mt-8 ml-2 flex gap-[32px]"><button onClick={() => setClinicTab('map')} className="flex items-center gap-[2px] px-1 py-1" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><span className="material-icons-round" style={{ fontFamily: '"Material Icons Round"', fontSize: '24px', color: '#CB0C9F' }}>travel_explore</span><span style={{ fontSize: '14px', fontWeight: clinicTab==='map'?600:400, color: clinicTab==='map'?'#CB0C9F':'#67748e' }}>Map</span></button><button onClick={() => setClinicTab('list')} className="flex items-center gap-[2px] px-1 py-1" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><span className="material-icons-round" style={{ fontFamily: '"Material Icons Round"', fontSize: '24px', color: '#CB0C9F' }}>format_list_bulleted</span><span style={{ fontSize: '14px', fontWeight: clinicTab==='list'?600:400, color: clinicTab==='list'?'#CB0C9F':'#67748e' }}>List</span></button></div>
        <div className="flex gap-6 mt-6 items-start">
          <div className="w-[260px] shrink-0"><div className="bg-white rounded-xl border border-gray-200 p-4 mb-4"><input placeholder="Primary Care" className="w-full h-[42px] border border-gray-200 rounded-lg px-4 text-[13px] mb-3 outline-none focus:border-[#2bc4e1] focus:border-2" /><input placeholder="Zip code or Neighborhood" className="w-full h-[42px] border border-gray-200 rounded-lg px-4 text-[13px] outline-none focus:border-[#2bc4e1] focus:border-2" /></div><div className="bg-white rounded-xl border border-gray-200 p-5"><h3 className="font-bold text-[14px] text-[#344767] mb-4">Filter By</h3><FilterSelect id="specialty" value={filterVals.specialty} options={["Doctor", "Sergan"]} open={filterOpen} setOpen={setFilterOpen} focused={filterFocused} setFocused={setFilterFocused} onSelect={(v)=>setFilterVals({...filterVals, specialty:v})} /><FilterSelect id="gender" value={filterVals.gender} options={["Male", "Female"]} open={filterOpen} setOpen={setFilterOpen} focused={filterFocused} setFocused={setFilterFocused} onSelect={(v)=>setFilterVals({...filterVals, gender:v})} /><FilterSelect id="condition" value={filterVals.condition} options={["Emergency", "Family Doctor"]} open={filterOpen} setOpen={setFilterOpen} focused={filterFocused} setFocused={setFilterFocused} onSelect={(v)=>setFilterVals({...filterVals, condition:v})} /><FilterSelect id="languages" value={filterVals.languages} options={["English", "Hindi", "German", "Pashto"]} open={filterOpen} setOpen={setFilterOpen} focused={filterFocused} setFocused={setFilterFocused} onSelect={(v)=>setFilterVals({...filterVals, languages:v})} /><h3 className="font-bold text-[14px] text-[#344767] mb-4 mt-8">Providers Who Treat</h3><Check ck={all} setCk={setAll} label="All Ages" /><Check ck={child} setCk={setChild} label="Children" /><Check ck={adult} setCk={setAdult} label="Adults" /><h3 className="font-bold text-[14px] text-[#344767] mt-8 mb-4">View Only</h3><Check ck={online} setCk={setOnline} label="Online Scheduling" /><Check ck={prim} setCk={setPrim} label="Primary Care" /></div></div>
          <div className="flex-1 rounded-[12px] overflow-hidden border border-gray-200 bg-white relative shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            {clinicTab === 'map' ? (<div className="w-full h-[680px] relative"><div className="absolute top-[10px] left-[10px] z-[3000] flex items-start" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}><div className="flex flex-col"><button onClick={() => setType('map')} className={`w-[95px] h-[42px] bg-white shadow flex items-center justify-center text-[16px] border ${type==='map' ? 'font-bold' : 'font-normal'} rounded-l-[2px]`}>Map</button>{type === 'map' && (<div className="w-[95px] h-[38px] bg-white shadow border border-t-0 flex items-center px-[10px] gap-[6px] -mt-[1px]"><input type="checkbox" checked={terrain} onChange={e=>setTerrain(e.target.checked)} /><span className="text-[16px]">Terrain</span></div>)}</div><div className="flex flex-col -ml-[1px]"><button onClick={() => setType('satellite')} className={`w-[110px] h-[42px] bg-white shadow flex items-center justify-center text-[16px] border border-l-0 ${type==='satellite' ? 'font-bold' : 'font-normal'} rounded-r-[2px]`}>Satellite</button>{type === 'satellite' && (<div className="w-[110px] h-[38px] bg-white shadow border border-t-0 flex items-center px-[10px] gap-[6px] -mt-[1px]"><input type="checkbox" checked={labels} onChange={e=>setLabels(e.target.checked)} /><span className="text-[16px]">Labels</span></div>)}</div></div><div ref={mapDiv} className="w-full h-full"></div>{!allowMap && <div ref={gestureRef} className="absolute inset-0 z-[1500] bg-transparent" style={{ touchAction: 'pan-y' }}></div>}{showHint && (<div className="absolute inset-0 bg-black/40 z-[2000] flex items-center justify-center pointer-events-none"><p className="text-white text-[20px] font-bold">Use two fingers to move the map</p></div>)}</div>) : (<div className="w-full bg-[#fcfcfd] py-1"><div className="flex items-start gap-5 px-6 py-7 bg-white mx-3 my-3 rounded-[12px] shadow-[0_1px_6px_rgba(0,0,0,0.04)]"><div className="w-[110px] h-[80px] rounded-[10px] overflow-hidden shrink-0 bg-white shadow"><img src="/Klinik.jpg" alt="Klinik" className="w-full h-full object-cover" /></div><div className="flex-1 min-w-0"><h3 className="font-bold text-[#2D3748]" style={{ fontSize: '16px' }}>Klinik Pakar Kesihatan USIM</h3><p className="text-[#4A5568]" style={{ fontSize: '13.5px', lineHeight: '20px', marginTop: '4px' }}>Lot 193,194 Jalan Nilai Square 6, Bandar<br/>Baru Nilai, 71800 Nilai, Negeri Sembilan<br/>Malaysia</p><a href="https://klinikpakar.usim.edu.my" className="text-[#4A5568] hover:underline" style={{ fontSize: '13.5px' }}>https://klinikpakar.usim.edu.my</a><p className="text-[#2D3748]" style={{ fontSize: '13.5px' }}>+60126504921</p><p className="text-[#4A5568]" style={{ fontSize: '13.5px' }}>RQ6F+ P7 NILAI,Negeri Sembilan, Malaysia</p></div><div className="flex flex-col gap-3 shrink-0 w-[185px] mt-1"><button onClick={()=>setShowDetail(true)} className="bg-[#B70A7A] text-white font-bold rounded-[10px] px-3 py-[12px] hover:bg-[#9d0768]" style={{ fontSize: '11px' }}>MORE ABOUT THIS<br/>LOCATATION</button><button className="bg-[#B70A7A] text-white font-bold rounded-[10px] px-3 py-[12px]" style={{ fontSize: '11px' }}>FIND A DOCTOR AND<br/>SCHEDULE</button></div></div><div className="flex items-start gap-5 px-6 py-7 bg-white mx-3 my-3 rounded-[12px] shadow-[0_1px_6px_rgba(0,0,0,0.04)]"><div className="w-[110px] h-[80px] rounded-[10px] overflow-hidden shrink-0 bg-white shadow"><img src="/Klinik.jpg" alt="Dialysis" className="w-full h-full object-cover" /></div><div className="flex-1 min-w-0"><h3 className="font-bold text-[#2D3748]" style={{ fontSize: '16px' }}>Dialysis Centers</h3><p className="text-[#4A5568]" style={{ fontSize: '13.5px', lineHeight: '20px', marginTop: '4px' }}>Lot 193,194 Jalan Nilai Square 6, Bandar<br/>Baru Nilai, 71800 Nilai, Negeri Sembilan<br/>Malaysia</p><a href="https://klinikpakar.usim.edu.my" className="text-[#4A5568] hover:underline" style={{ fontSize: '13.5px' }}>https://klinikpakar.usim.edu.my</a><p className="text-[#2D3748]" style={{ fontSize: '13.5px' }}>+60126504921</p><p className="text-[#4A5568]" style={{ fontSize: '13.5px' }}>RQ6F+ P7 NILAI,Negeri Sembilan, Malaysia</p></div><div className="flex flex-col gap-3 shrink-0 w-[185px] mt-1"><button onClick={()=>setShowDetail(true)} className="bg-[#B70A7A] text-white font-bold rounded-[10px] px-3 py-[12px] hover:bg-[#9d0768]" style={{ fontSize: '11px' }}>MORE ABOUT THIS<br/>LOCATATION</button><button className="bg-[#B70A7A] text-white font-bold rounded-[10px] px-3 py-[12px]" style={{ fontSize: '11px' }}>FIND A DOCTOR AND<br/>SCHEDULE</button></div></div></div>)}
          </div>
        </div>
        <div className="flex justify-between items-center px-2 py-10 mt-20 text-[#67748e]" style={{ fontSize: '13px' }}><span>© 2026, made with ♥ by MyPiHUB for a better web.</span><div className="flex gap-6"><span>MyPatientHUB</span><span>About Us</span><span>Blog</span></div></div>
      </div>
    </div>
  )
}