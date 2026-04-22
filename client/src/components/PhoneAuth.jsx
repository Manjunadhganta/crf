import { useState, useRef } from "react";

const GlobalStyle = () => (
  <style>{`
    body { font-family: 'DM Sans', sans-serif; }

    .grid-bg {
      background-image:
        linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .card {
      backdrop-filter: blur(6px);
      box-shadow: 
        0 10px 30px rgba(0,0,0,.06),
        inset 0 1px 0 rgba(255,255,255,.6);
    }

    .btn-primary {
      transition: all .2s ease;
    }

    .btn-primary:hover:not(:disabled){
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(0,0,0,.18);
    }

    .btn-primary:active:not(:disabled){
      transform: scale(.97);
    }

    .otp-box {
      transition: all .15s ease;
    }

    .otp-box:focus {
      transform: translateY(-2px);
      box-shadow: 0 6px 14px rgba(0,0,0,.08);
    }
  `}</style>
);

/* ───────────── Wrapper ───────────── */
const Wrapper = ({ children }) => (
  <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-4 relative overflow-hidden">
    <GlobalStyle />
    <div className="grid-bg absolute inset-0" />
    <div className="relative z-10 w-full max-w-sm">
      {children}
    </div>
  </div>
);

/* ───────────── PHONE SCREEN ───────────── */
function PhoneScreen({ onNext }) {
  const [phone, setPhone] = useState("");

  const isValid = phone.length === 10 && /^[6-9]/.test(phone);

  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(val);
  };

  const handleSubmit = () => {
    if (!isValid) return;
    onNext(phone);
  };

  return (
    <Wrapper>
      {/* Header */}
      <div className="mb-9 text-center">
        <div className="w-11 h-11 bg-[#0a0a0a] rounded-xl mx-auto mb-5 flex items-center justify-center shadow-sm">
          <div className="w-4 h-4 bg-white rounded-sm" />
        </div>

        <h1 
          className="text-2xl font-medium text-[#0a0a0a]"
           style={{ fontFamily: "'DM Serif Display', serif" }}
          >
          Verify Identity
        </h1>

        <div className="w-8 h-px bg-black/20 mx-auto my-3" />

        <p className="text-sm text-black/40">
          Enter your mobile number to receive<br/>a one-time password
        </p>
      </div>

      {/* Card */}
      <div className="card bg-white rounded-3xl border border-black/10 p-6">
        <label className="block text-xs font-medium text-black/40 uppercase tracking-widest mb-3">
          Mobile Number
        </label>

        <div className="flex rounded-2xl border border-black/10 overflow-hidden bg-[#fafaf9] focus-within:border-black/30 focus-within:shadow-sm transition-all">
          <div className="flex items-center gap-1.5 px-3.5 bg-[#f0f0ee] border-r border-black/10">
            🇮🇳
            <span className="text-sm font-medium text-[#0a0a0a]">+91</span>
          </div>

          <input
            type="tel"
            inputMode="numeric"
            placeholder="98765 43210"
            value={phone}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="flex-1 px-4 py-3.5 text-[15px] text-[#0a0a0a] placeholder-black/25 bg-transparent focus:outline-none tracking-wider"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`btn-primary w-full mt-6 py-3.5 rounded-2xl text-sm font-medium flex items-center justify-center gap-2
          ${isValid
            ? "bg-[#0a0a0a] text-white"
            : "bg-[#0a0a0a]/30 text-white/50 cursor-not-allowed"
          }`}
        >
          Continue
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <p className="text-center text-xs text-black/25 mt-4 font-light">
        By continuing you agree to our Terms & Privacy Policy
      </p>
    </Wrapper>
  );
}

/* ───────────── OTP SCREEN ───────────── */
function OtpScreen({ phone, onBack }) {
  const [otp, setOtp] = useState(["","","","","",""]);
  const refs = useRef([]);

  const filled = otp.every((d)=>d!=="")

  const change = (i,val)=>{
    if(!/^\d?$/.test(val)) return;
    const next=[...otp];
    next[i]=val;
    setOtp(next);
    if(val && i<5) refs.current[i+1]?.focus();
  };

  const verify = ()=> {
    if(!filled) return;
    console.log("verify", otp.join(""));
  };

  const masked = `+91 ${phone.slice(0,2)}•••••${phone.slice(-3)}`;

  return (
    <Wrapper>
      <div className="mb-9 text-center">
        <div className="w-11 h-11 bg-[#0a0a0a] rounded-xl mx-auto mb-5"/>
        <h1 className="text-2xl font-semibold text-[#0a0a0a]">
          Enter OTP
        </h1>
        <p className="text-sm text-black/40 mt-2">
          Sent to <span className="font-medium text-black">{masked}</span>
        </p>
      </div>

      <div className="card bg-white rounded-3xl border border-black/10 p-6">
        <div className="flex justify-center gap-2.5">
          {otp.map((d,i)=>(
            <input
              key={i}
              ref={el=>refs.current[i]=el}
              maxLength={1}
              value={d}
              onChange={(e)=>change(i,e.target.value)}
              className="otp-box w-11 h-12 text-center text-lg font-semibold 
              rounded-xl border border-black/10 bg-[#fafaf9] 
              focus:outline-none focus:border-black/30"
            />
          ))}
        </div>

        <button
          onClick={verify}
          disabled={!filled}
          className={`btn-primary w-full mt-6 py-3.5 rounded-2xl text-sm font-medium flex items-center justify-center gap-2
          ${filled
            ? "bg-[#0a0a0a] text-white"
            : "bg-[#0a0a0a]/30 text-white/50 cursor-not-allowed"
          }`}
        >
          Verify & Continue
        </button>
      </div>

      <button
        onClick={onBack}
        className="w-full mt-3 text-sm text-black/35"
      >
        Change number
      </button>
    </Wrapper>
  );
}

/* ───────────── ROOT ───────────── */
export default function PhoneAuth(){
  const [screen,setScreen]=useState("phone");
  const [phone,setPhone]=useState("");

  return screen==="otp"
    ? <OtpScreen phone={phone} onBack={()=>setScreen("phone")} />
    : <PhoneScreen onNext={(p)=>{setPhone(p); setScreen("otp")}} />;
}