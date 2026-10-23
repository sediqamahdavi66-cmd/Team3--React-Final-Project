import { useState, useRef } from 'react'

export default function LoginPage() {
  const [mode, setMode] = useState('signin')
  const [activeSocial, setActiveSocial] = useState(null)
  const [remember, setRemember] = useState(false)
  const [focused, setFocused] = useState(null)
  const [openSelect, setOpenSelect] = useState(null)
  const [vals, setVals] = useState({
    firstName: '', lastName: '', month: 'February', day: '1', year: '2021',
    address: '', blood: 'A+', gender: 'Male', speciality: 'Cardiology',
    hospitalName: '', clinicType: 'GP', phone: '', email: ''
  })
  const topRef = useRef(null)

  const goSignUp = () => { setMode('signup'); window.scrollTo({ top: 0, behavior: 'smooth' }); topRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  const goSignIn = () => { setMode('signin'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const goRegistration = () => { setMode('registration'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const goHospitalReg = () => { setMode('hospitalregistration'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const goPatientReg = () => { setMode('patientregistration'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const goDoctorReg = () => { setMode('doctorregistration'); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  const isSignUp = mode === 'signup'
  const isRegistration = mode === 'registration'
  const isHospitalReg = mode === 'hospitalregistration'
  const isPatientReg = mode === 'patientregistration'
  const isDoctorReg = mode === 'doctorregistration'

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const days = Array.from({length:31}, (_,i)=> String(i+1))
  const years = Array.from({length:127}, (_,i)=> String(2026-i))
  const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"]
  const genders = ["Male","Female"]
  const specialities = ["Cardiology","Dermatology","Neurology","Orthopedics","Pediatrics","General Medicine","Surgery"]
  const clinicTypes = ["GP", "Qualitas"]

  const CustomSelect = ({ id, value, options, onChange }) => {
    const isOpen = openSelect === id
    const isFocused = focused === id || isOpen
    return (
      <div className="relative w-full">
        <div onClick={() => { setOpenSelect(isOpen ? null : id); setFocused(id) }} className="w-full h-[40px] rounded-[8px] px-3 flex items-center justify-between cursor-pointer bg-white outline-none" style={{ border: isFocused ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: isFocused ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none' }}>
          <span style={{ fontSize: '13px', color: '#67748e' }}>{value}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}><path d="M2 4l4 4 4-4" stroke="#6b7280" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#e9ecef] overflow-hidden">
            {options.map(opt => (
              <div key={opt} onClick={() => { onChange(opt); setOpenSelect(null); setFocused(null) }} className="px-3 py-2 cursor-pointer text-[13px] hover:bg-[#f0f8ff]" style={{ background: value === opt ? '#f0f2f5' : 'white', color: '#67748e' }}>{opt}</div>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (isRegistration) {
    return (
      <div className="min-h-screen bg-[#eef2f7]" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className="w-full" style={{ padding: '16px 16px 0 16px' }}>
          <div className="relative w-full overflow-hidden" style={{ height: '312px', borderRadius: '14px' }}>
            <img src="/wave.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ borderRadius: '14px' }} />
            <div className="relative z-10 w-full flex justify-center" style={{ paddingTop: '56px' }}><h1 style={{ fontSize: '40px', fontWeight: '600', color: 'white' }}>Register As..</h1></div>
            <div className="absolute left-1/2 -translate-x-1/2 flex z-20" style={{ bottom: '16px', gap: '56px' }}>
              <div onClick={goPatientReg} className="cursor-pointer"><div style={{ width: '112px', height: '120px', borderRadius: '14px', background: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.12)' }}><div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/patient.png" alt="Patient" style={{ width: '82px', height: '78px', objectFit: 'contain' }} /></div><div style={{ height: '30px', background: '#fbf7f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #f2e8ee' }}><span style={{ fontSize: '14px', color: '#8a2e5a', fontWeight: '500' }}>Patient</span></div></div></div>
              <div onClick={goDoctorReg} className="cursor-pointer"><div style={{ width: '112px', height: '120px', borderRadius: '14px', background: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.12)' }}><div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/doctor.png" alt="Doctor" style={{ width: '82px', height: '78px', objectFit: 'contain' }} /></div><div style={{ height: '30px', background: '#fbf7f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #f2e8ee' }}><span style={{ fontSize: '14px', color: '#8a2e5a', fontWeight: '500' }}>Doctor</span></div></div></div>
              <div onClick={goHospitalReg} className="cursor-pointer"><div style={{ width: '112px', height: '120px', borderRadius: '14px', background: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.12)' }}><div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/hospital.png" alt="Hospital" style={{ width: '82px', height: '78px', objectFit: 'contain' }} /></div><div style={{ height: '30px', background: '#fbf7f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #f2e8ee' }}><span style={{ fontSize: '14px', color: '#8a2e5a', fontWeight: '500' }}>Hospital</span></div></div></div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center" style={{ padding: '8px 8px 0 8px', marginTop: '2px' }}>
            <div style={{ fontSize: '12px', color: '#7b8aa0' }}>© 2026, made with ♥ by <span style={{ fontWeight: '700', color: '#3a4455' }}>MyPiHUB</span> for a better web.</div>
            <div className="flex" style={{ gap: '20px', fontSize: '12px', color: '#7b8aa0' }}><span>MyPatientHUB</span><span>About Us</span><span>Blog</span></div>
          </div>
          <div style={{ height: '360px' }}></div>
        </div>
      </div>
    )
  }

  if (isPatientReg || isDoctorReg || isHospitalReg) {
    const isPatient = isPatientReg, isDoctor = isDoctorReg, isHospital = isHospitalReg
    const title = isPatient ? 'Register As Patient' : isDoctor ? 'Register As Doctor' : 'Register As Hospital'
    const formTitle = isPatient ? 'Patient Registration' : isDoctor ? 'Doctor Registration' : 'Hospital Registration'
    return (
      <div className="min-h-screen bg-[#eef2f7]" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className="w-full" style={{ padding: '12px 12px 0 12px' }}>
          <div className="relative w-full overflow-hidden" style={{ height: '300px', borderRadius: '14px' }}>
            <img src="/wave.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ borderRadius: '14px' }} />
            <div className="relative z-10 w-full flex justify-center" style={{ paddingTop: '52px' }}><h1 style={{ fontSize: '38px', fontWeight: '600', color: 'white' }}>{title}</h1></div>
            <div className="absolute left-1/2 -translate-x-1/2 flex z-20" style={{ bottom: '16px', gap: '48px' }}>
              <div onClick={goPatientReg} className="cursor-pointer"><div style={{ width: '110px', height: '116px', borderRadius: '14px', background: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: isPatient ? '2px solid #00bcd4' : '2px solid transparent', boxShadow: isPatient ? '0 0 0 3px rgba(0,188,212,0.25)' : '0 2px 10px rgba(0,0,0,0.12)' }}><div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/patient.png" alt="Patient" style={{ width: '80px', height: '76px', objectFit: 'contain' }} /></div><div style={{ height: '28px', background: '#fbf7f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '13px', color: '#8a2e5a', fontWeight: '500' }}>Patient</span></div></div></div>
              <div onClick={goDoctorReg} className="cursor-pointer"><div style={{ width: '110px', height: '116px', borderRadius: '14px', background: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: isDoctor ? '2px solid #00bcd4' : '2px solid transparent', boxShadow: isDoctor ? '0 0 0 3px rgba(0,188,212,0.25)' : '0 2px 10px rgba(0,0,0,0.12)' }}><div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/doctor.png" alt="Doctor" style={{ width: '80px', height: '76px', objectFit: 'contain' }} /></div><div style={{ height: '28px', background: '#fbf7f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '13px', color: '#8a2e5a', fontWeight: '500' }}>Doctor</span></div></div></div>
              <div onClick={goHospitalReg} className="cursor-pointer"><div style={{ width: '110px', height: '116px', borderRadius: '14px', background: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: isHospital ? '2px solid #00bcd4' : '2px solid transparent', boxShadow: isHospital ? '0 0 0 3px rgba(0,188,212,0.25)' : '0 2px 10px rgba(0,0,0,0.12)' }}><div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/hospital.png" alt="Hospital" style={{ width: '80px', height: '76px', objectFit: 'contain' }} /></div><div style={{ height: '28px', background: '#fbf7f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '13px', color: '#8a2e5a', fontWeight: '500' }}>Hospital</span></div></div></div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-6 px-2">
            <div className="w-full max-w-[900px] bg-[#f7f8fa] rounded-[12px] px-6 md:px-10 pt-8 pb-8 shadow-[0 1px 4px rgba(0,0,0,0.04)]">
              <h2 className="text-center" style={{ fontSize: '20px', fontWeight: '500', color: '#344767' }}>{formTitle}</h2>
              <p className="text-center mt-2" style={{ fontSize: '14px', color: '#67748e' }}>Please fill in the {isHospital ? 'following form' : 'following info'} to create your account.</p>

              {isHospital ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Full Name</label><input value={vals.hospitalName} onChange={e=>setVals({...vals, hospitalName:e.target.value})} onFocus={()=>setFocused('hospitalName')} onBlur={()=>setFocused(null)} placeholder="Eg. Klinik Pakar Kesihatan USIM (PKU)" className="w-full mt-1 h-[40px] rounded-[8px] px-3 outline-none bg-white" style={{ border: focused==='hospitalName' ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: focused==='hospitalName' ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none', fontSize: '13px' }} /></div>
                    <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Address</label><input onFocus={()=>setFocused('hospitalAddress')} onBlur={()=>setFocused(null)} placeholder="Choose Location" className="w-full mt-1 h-[40px] rounded-[8px] px-3 outline-none bg-white" style={{ border: focused==='hospitalAddress' ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: focused==='hospitalAddress' ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none', fontSize: '13px' }} /></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Select Clinic Type</label><div className="mt-1"><CustomSelect id="clinicType" value={vals.clinicType} options={clinicTypes} onChange={v=>setVals({...vals, clinicType:v})} /></div></div>
                    <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Additional Phone Number</label><input value={vals.phone} onChange={e=>setVals({...vals, phone:e.target.value})} onFocus={()=>setFocused('phone')} onBlur={()=>setFocused(null)} placeholder="Phone #" className="w-full mt-1 h-[40px] rounded-[8px] px-3 outline-none bg-white" style={{ border: focused==='phone' ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: focused==='phone' ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none', fontSize: '13px' }} /></div>
                    <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Additional Email</label><input value={vals.email} onChange={e=>setVals({...vals, email:e.target.value})} onFocus={()=>setFocused('email')} onBlur={()=>setFocused(null)} placeholder="Email" className="w-full mt-1 h-[40px] rounded-[8px] px-3 outline-none bg-white" style={{ border: focused==='email' ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: focused==='email' ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none', fontSize: '13px' }} /></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>First Name</label><input value={vals.firstName} onChange={e=>setVals({...vals, firstName:e.target.value})} onFocus={()=>setFocused('firstName')} onBlur={()=>setFocused(null)} placeholder={isPatient ? "Eg. Michael" : "Eg. Azam"} className="w-full mt-1 h-[40px] rounded-[8px] px-3 outline-none bg-white" style={{ border: focused==='firstName' ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: focused==='firstName' ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none', fontSize: '13px' }} /></div>
                    <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Last Name</label><input value={vals.lastName} onChange={e=>setVals({...vals, lastName:e.target.value})} onFocus={()=>setFocused('lastName')} onBlur={()=>setFocused(null)} placeholder={isPatient ? "Eg. Tomson" : "Eg. Shah"} className="w-full mt-1 h-[40px] rounded-[8px] px-3 outline-none bg-white" style={{ border: focused==='lastName' ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: focused==='lastName' ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none', fontSize: '13px' }} /></div>
                  </div>
                  <div className="mt-5">
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Birth Date</label>
                    <div className="grid grid-cols-3 gap-4 mt-1">
                      <CustomSelect id="month" value={vals.month} options={months} onChange={v=>setVals({...vals, month:v})} />
                      <CustomSelect id="day" value={vals.day} options={days} onChange={v=>setVals({...vals, day:v})} />
                      <CustomSelect id="year" value={vals.year} options={years} onChange={v=>setVals({...vals, year:v})} />
                    </div>
                  </div>
                  {isDoctor ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                        <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>My Address</label><input onFocus={()=>setFocused('address')} onBlur={()=>setFocused(null)} placeholder="Choose Location" className="w-full mt-1 h-[40px] rounded-[8px] px-3 outline-none bg-white" style={{ border: focused==='address' ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: focused==='address' ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none', fontSize: '13px' }} /></div>
                        <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Specility</label><div className="mt-1"><CustomSelect id="speciality" value={vals.speciality} options={specialities} onChange={v=>setVals({...vals, speciality:v})} /></div></div>
                        <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Blood Group</label><div className="mt-1"><CustomSelect id="blood" value={vals.blood} options={bloodGroups} onChange={v=>setVals({...vals, blood:v})} /></div></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                        <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>I'm</label><div className="mt-1"><CustomSelect id="gender" value={vals.gender} options={genders} onChange={v=>setVals({...vals, gender:v})} /></div></div>
                      </div>
                    </>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                      <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>My Address</label><input onFocus={()=>setFocused('address')} onBlur={()=>setFocused(null)} placeholder="Choose Loaction" className="w-full mt-1 h-[40px] rounded-[8px] px-3 outline-none bg-white" style={{ border: focused==='address' ? '2px solid #2bc4e1' : '1px solid #e9ecef', boxShadow: focused==='address' ? '0 0 0 2px rgba(43,196,225,0.12)' : 'none', fontSize: '13px' }} /></div>
                      <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>Blood Group</label><div className="mt-1"><CustomSelect id="blood" value={vals.blood} options={bloodGroups} onChange={v=>setVals({...vals, blood:v})} /></div></div>
                      <div><label style={{ fontSize: '12px', fontWeight: '600', color: '#344767' }}>I'm</label><div className="mt-1"><CustomSelect id="gender" value={vals.gender} options={genders} onChange={v=>setVals({...vals, gender:v})} /></div></div>
                    </div>
                  )}
                </>
              )}
              <div className="flex justify-end mt-6"><button className="h-[38px] px-6 rounded-[8px] bg-[#2d3748] text-white font-bold" style={{ fontSize: '12px' }}>NEXT</button></div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-10 pb-4 px-2" style={{ fontSize: '11px', color: '#7b8aa0' }}>
            <div>© 2026, made with ♥ by <span style={{ fontWeight: '700', color: '#3a4455' }}>MyPiHUB</span> for a better web.</div>
            <div className="flex" style={{ gap: '18px' }}><span>MyPatientHUB</span><span>About Us</span><span>Blog</span></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-0 md:p-6" style={{ fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div className="w-full max-w-[1400px] mx-auto">
        <div ref={topRef} className="relative w-full overflow-hidden" style={{ borderRadius: '12px', height: '480px' }}>
          <img src={isSignUp ? "/wave-signup.jpg" : "/wave-pure.jpg"} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ borderRadius: '12px', objectPosition: 'center center' }} />
          <div className="relative z-10 flex flex-col items-center pt-[72px] text-white text-center">
            <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '52px', letterSpacing: '-0.5px', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>Welcome to</h1>
            <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '52px', letterSpacing: '-0.5px', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>MyPatientHUB!</h1>
            <p style={{ marginTop: '12px', fontSize: '15px', fontWeight: '400', opacity: '0.95', letterSpacing: '0.2px' }}>We provide smart healthcare services in your hands.</p>
          </div>
        </div>
        <div className="flex justify-center -mt-[105px] relative z-20 px-3">
          <div className="w-full max-w-[360px] bg-white rounded-[12px] shadow-[0_12px_32px_rgba(0,0,0,0.12)] px-[24px] pt-[26px] pb-[22px]">
            {!isSignUp ? (
              <>
                <p className="text-[#344767] font-normal" style={{ fontSize: '14px', lineHeight: '20px', letterSpacing: '0.1px' }}>Sign in to MyPatientHUB</p>
                <div className="flex justify-center gap-[24px] mt-[22px] mb-[26px]">
                  <button onMouseDown={() => setActiveSocial('fb')} onMouseUp={() => setActiveSocial(null)} onMouseLeave={() => setActiveSocial(null)} className="w-[68px] h-[42px] bg-white rounded-[8px] flex items-center justify-center cursor-pointer" style={{ border: activeSocial === 'fb' ? '1px solid #2196f3' : '1px solid #f0f2f5', boxShadow: activeSocial === 'fb' ? '0 0 0 2px rgba(33,150,243,0.12)' : '0 1px 3px rgba(0,0,0,0.04)' }}><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#18428c" /><path fill="white" d="M13.9 20V12.7h1.9l.3-2.3h-2.2V8.9c0-.6.2-1.1 1.1-1.1h1.2V5.5c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 3V10H9.3v2.3h1.9V20h2.7z" /></svg></button>
                  <button onMouseDown={() => setActiveSocial('g')} onMouseUp={() => setActiveSocial(null)} onMouseLeave={() => setActiveSocial(null)} className="w-[68px] h-[42px] bg-white rounded-[8px] flex items-center justify-center cursor-pointer" style={{ border: activeSocial === 'g' ? '1px solid #2196f3' : '1px solid #f0f2f5', boxShadow: activeSocial === 'g' ? '0 0 0 2px rgba(33,150,243,0.12)' : '0 1px 3px rgba(0,0,0,0.04)' }}><svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.9 2.3 30.5 0 24 0 14.6 0 6.6 5.4 2.7 13.2l7.8 6.1C12.5 13.2 17.7 9.5 24 9.5z" /><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.5 2.9-2.2 5.4-4.7 7.1l7.3 5.6c4.2-3.9 6.6-9.6 6.6-16.9z" /><path fill="#FBBC05" d="M9.5 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5l-7.8-6.1C.6 16.3 0 20 0 24s.6 7.7 1.7 11l7.8-6.5z" /><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.6c-2 1.4-4.6 2.2-8.6 2.2-6.3 0-11.6-4.2-13.5-9.9l-7.8 6c3.9 7.9 11.9 13.1 21.3 13.1z" /></svg></button>
                </div>
                <input placeholder="Email or Phone number" onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} className="w-full h-[44px] rounded-[8px] px-[12px] outline-none placeholder:text-[#adb5bd]" style={{ fontSize: '13.5px', border: focused === 'email' ? '1px solid #00bcd4' : '1px solid #d2d6da', boxShadow: focused === 'email' ? '0 0 0 2px rgba(0,188,212,0.10)' : 'none' }} />
                <input placeholder="Please enter your password" type="password" onFocus={() => setFocused('pass')} onBlur={() => setFocused(null)} className="w-full h-[44px] rounded-[8px] px-[12px] outline-none mt-[14px] placeholder:text-[#adb5bd]" style={{ fontSize: '13.5px', border: focused === 'pass' ? '1px solid #00bcd4' : '1px solid #d2d6da', boxShadow: focused === 'pass' ? '0 0 0 2px rgba(0,188,212,0.10)' : 'none' }} />
                <button className="w-full h-[40px] rounded-[8px] text-white font-bold mt-[16px]" style={{ background: 'linear-gradient(195deg, #EC407A 0%, #D81B60 100%)', fontSize: '12px', letterSpacing: '0.6px' }}>SIGN IN</button>
                <div className="flex justify-between items-center mt-[14px]">
                  <span className="text-[#67748e] cursor-pointer hover:text-[#344767]" style={{ fontSize: '12px', lineHeight: '15px' }}>Forgot<br/>password?</span>
                  <label className="flex items-center gap-[8px] cursor-pointer select-none">
                    <div onClick={() => setRemember(!remember)} className="w-[18px] h-[18px] rounded-[4px] flex items-center justify-center cursor-pointer" style={{ border: remember ? '1px solid #344767' : '1px solid #d2d6da', background: remember ? '#344767' : 'white' }}>{remember && <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4L3.2 6.5L9 1" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}</div>
                    <span className="text-[#67748e]" style={{ fontSize: '12px', lineHeight: '15px' }}>Remember<br/>me</span>
                  </label>
                </div>
                <div className="text-center my-[14px] text-[#adb5bd]" style={{ fontSize: '12px' }}>or</div>
                <button onClick={goSignUp} className="w-full h-[40px] rounded-[8px] text-white font-bold" style={{ background: 'linear-gradient(195deg, #03A9F4 0%, #1976D2 100%)', fontSize: '12px', letterSpacing: '0.6px' }}>SIGN UP</button>
              </>
            ) : (
              <>
                <p className="text-center font-normal text-[#344767]" style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 400, letterSpacing: '0.2px' }}>Register with</p>
                <div className="flex justify-center gap-[24px] mt-[22px] mb-[18px]">
                  <div className="w-[68px] h-[42px] bg-white rounded-[8px] flex items-center justify-center border border-[#f0f2f5] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#18428c" /><path fill="white" d="M13.9 20V12.7h1.9l.3-2.3h-2.2V8.9c0-.6.2-1.1 1.1-1.1h1.2V5.5c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 3V10H9.3v2.3h1.9V20h2.7z" /></svg></div>
                  <div className="w-[68px] h-[42px] bg-white rounded-[8px] flex items-center justify-center border border-[#f0f2f5] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"><svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.9 2.3 30.5 0 24 0 14.6 0 6.6 5.4 2.7 13.2l7.8 6.1C12.5 13.2 17.7 9.5 24 9.5z" /><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.5 2.9-2.2 5.4-4.7 7.1l7.3 5.6c4.2-3.9 6.6-9.6 6.6-16.9z" /><path fill="#FBBC05" d="M9.5 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5l-7.8-6.1C.6 16.3 0 20 0 24s.6 7.7 1.7 11l7.8-6.5z" /><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.6c-2 1.4-4.6 2.2-8.6 2.2-6.3 0-11.6-4.2-13.5-9.9l-7.8 6c3.9 7.9 11.9 13.1 21.3 13.1z" /></svg></div>
                </div>
                <div className="flex items-center gap-3 my-[16px]"><div className="flex-1 h-[1px] bg-[#e9ecef]"></div><span className="text-[#adb5bd]" style={{ fontSize: '13px' }}>or</span><div className="flex-1 h-[1px] bg-[#e9ecef]"></div></div>
                <input placeholder="Phone number" className="w-full h-[44px] rounded-[10px] px-[14px] outline-none placeholder:text-[#adb5bd] placeholder:font-normal" style={{ fontSize: '13.5px', border: '1px solid #e9ecef' }} />
                <input placeholder="Password" type="password" className="w-full h-[44px] rounded-[10px] px-[14px] outline-none mt-[12px] placeholder:text-[#adb5bd] placeholder:font-normal" style={{ fontSize: '13.5px', border: '1px solid #e9ecef' }} />
                <div className="relative w-full h-[44px] rounded-full bg-[#f6f7f9] mt-[14px] flex items-center"><div className="w-[48px] h-[44px] rounded-full bg-[#00a9e0] flex items-center justify-center ml-[2px] shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span className="flex-1 text-center -ml-[48px] text-[#a0a8b3] tracking-[1.2px] font-normal" style={{ fontSize: '12px', letterSpacing: '1px' }}>Slide for SMS code</span></div>
                <button onClick={goRegistration} className="w-full h-[40px] rounded-[8px] text-white font-bold mt-[14px] cursor-pointer" style={{ background: 'linear-gradient(195deg, #EC407A 0%, #8E24AA 100%)', fontSize: '12px', letterSpacing: '0.6px' }}>SIGN UP</button>
                <p className="text-[#8a94a6] mt-[10px] font-normal" style={{ fontSize: '10.5px', lineHeight: '14px', letterSpacing: '0.1px' }}>By clicking Sign Up; I agree to MyPiHUB<br/>Terms of Use and Privacy Policy</p>
                <div className="flex items-center gap-3 my-[14px]"><div className="flex-1 h-[1px] bg-[#e9ecef]"></div><span className="text-[#344767] font-bold" style={{ fontSize: '12px' }}>or</span><div className="flex-1 h-[1px] bg-[#e9ecef]"></div></div>
                <button onClick={goRegistration} className="w-full h-[40px] rounded-[8px] text-white font-bold cursor-pointer" style={{ background: 'linear-gradient(195deg, #26C6DA 0%, #1565C0 100%)', fontSize: '11.5px', letterSpacing: '0.5px' }}>SIGN UP WITH EMAIL</button>
                <p className="text-center mt-[20px] text-[#67748e] font-normal" style={{ fontSize: '13px' }}>Already member? <span onClick={goSignIn} className="font-bold text-[#344767] cursor-pointer hover:underline" style={{ fontWeight: 700 }}>Sign in</span></p>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-[#67748e] mt-8" style={{ fontSize: '12px' }}>
          <span>Google Play Store APP</span><span>App Store APP</span><span>About MyPatientHUB</span><span>About Us</span><span>Our Blog</span>
        </div>
        <div className="flex justify-center gap-[20px] mt-5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#67748e"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-3h3v-3h-1V5z"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#67748e"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.5 8.5 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#67748e"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.2 5.2 0 0 1-5.2 5.2H7.8C4.6 21 2 18.4 2 15.2V7.8A5.2 5.2 0 0 1 7.8 2m-.2 2A3.2 3.2 0 0 0 4.4 7.2v8.4c0 1.77 1.43 3.2 3.2 3.2h8.4a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 15.2 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#67748e"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2.1 0-3 .2-.8 1-4.2 1-4.2s-.2-.4-.2-1c0-.9.6-1.6 1.2-1.6.6 0 .9.4.9 1 0 .6-.4 1.4-.6 2.2-.1.6.4 1.2 1 1.2 1.2 0 2.1-1.3 2.1-3 0-1.6-1.1-2.7-2.8-2.7-1.9 0-3 1.4-3 2.9 0 .5.2 1.1.4 1.4 0 .1.1.1.1.2l-.2.6c0 .1-.1.1-.2.1-.7-.3-1.2-1.4-1.2-2.3 0-1.9 1.4-3.6 3.9-3.6 2.1 0 3.7 1.5 3.7 3.4 0 2-1.3 3.7-3.1 3.7-.6 0-1.2-.3-1.4-.7l-.4 1.4c-.1.5-.5 1.2-.7 1.6.5.2 1.1.3 1.7.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#67748e"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
        </div>
        <div className="text-center mt-5 pb-8 text-[#67748e]" style={{ fontSize: '11.5px' }}>Copyright © 2022 MyPiHUB.</div>
      </div>
    </div>
  )
}