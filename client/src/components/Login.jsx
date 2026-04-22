import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const buttons = [
  {
    id: "customer",
    label: "Customer Login",
    sub: "Access your account",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "employee",
    label: "Employee Login",
    sub: "Internal portal",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a4 4 0 018 0v2" strokeLinecap="round" />
        <circle cx="12" cy="13" r="2" />
      </svg>
    ),
  },
  {
    id: "broker",
    label: "Broker Login",
    sub: "Partner dashboard",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 17l4-8 4 5 3-3 4 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="6" r="2" />
      </svg>
    ),
  },
  {
    id: "assist",
    label: "Assist Me",
    sub: "Get help now",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4" strokeLinecap="round" />
        <circle cx="12" cy="16" r="0.5" fill="currentColor" />
      </svg>
    ),
    accent: true,
  },
];

export default function LoginPage() {
  const [hovered, setHovered] = useState(null);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f7f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .card-btn {
          transition: background 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          cursor: pointer;
          border: none;
          outline: none;
        }
        .card-btn:hover {
          transform: translateY(-3px);
        }
        .card-btn:active {
          transform: translateY(0px) scale(0.98);
        }
        .assist-btn:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        }
      `}</style>

      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        animation: "subtlePulse 6s ease-in-out infinite",
      }} />

      {/* Radial vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #f7f7f5 100%)",
        pointerEvents: "none",
      }} />

      {/* Main card */}
      <div style={{
        position: "relative", zIndex: 10,
        width: "100%", maxWidth: 480,
        padding: "0 24px",
        opacity: mounted ? 1 : 0,
        animation: mounted ? "fadeUp 0.7s ease both" : "none",
      }}>

        {/* Logo / Brand */}
        <div style={{
          textAlign: "center", marginBottom: 52,
          animation: "fadeUp 0.7s ease 0.05s both",
          opacity: mounted ? 1 : 0,
        }}>
          <div style={{
            width: 48, height: 48, margin: "0 auto 20px",
            border: "1.5px solid rgba(0,0,0,0.15)",
            borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "#ffffff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}>
            <div style={{
              width: 22, height: 22,
              background: "#0a0a0a",
              borderRadius: 3,
              clipPath: "polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)",
            }} />
          </div>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 36, fontWeight: 400,
            color: "#0a0a0a", letterSpacing: "-0.5px",
            lineHeight: 1.1, marginBottom: 10,
          }}>
            Welcome back.
          </h1>

          <div style={{
            width: 40, height: 1,
            background: "rgba(0,0,0,0.2)",
            margin: "14px auto 0",
            transformOrigin: "center",
            animation: mounted ? "lineExpand 0.6s ease 0.3s both" : "none",
          }} />

          <p style={{
            marginTop: 14,
            color: "rgba(0,0,0,0.4)",
            fontSize: 14, fontWeight: 300,
            letterSpacing: "0.01em",
          }}>
            Choose how you'd like to continue
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {buttons.map((btn, i) => {
            const isAssist = btn.accent;
            const isHov = hovered === btn.id;

            return (
              <button
                key={btn.id}
                className={`card-btn${isAssist ? " assist-btn" : ""}`}
                onClick={() => navigate(`/verify?role=${btn.id}`)}
                onMouseEnter={() => setHovered(btn.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  animation: `fadeUp 0.5s ease ${0.15 + i * 0.08}s both`,
                  opacity: mounted ? 1 : 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 22px",
                  borderRadius: 14,
                  background: isAssist
                    ? isHov ? "#0a0a0a" : "#111111"
                    : isHov ? "rgba(0,0,0,0.05)" : "#ffffff",
                  border: isAssist
                    ? "1.5px solid transparent"
                    : `1.5px solid ${isHov ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0.09)"}`,
                  color: isAssist ? "#ffffff" : "#0a0a0a",
                  width: "100%",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: isAssist
                    ? isHov ? "0 8px 32px rgba(0,0,0,0.18)" : "0 4px 16px rgba(0,0,0,0.12)"
                    : isHov ? "0 4px 16px rgba(0,0,0,0.07)" : "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                {!isAssist && isHov && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.02) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }} />
                )}

                {/* Icon box */}
                <div style={{
                  width: 42, height: 42, flexShrink: 0,
                  borderRadius: 10,
                  background: isAssist
                    ? "rgba(255,255,255,0.1)"
                    : isHov ? "rgba(0,0,0,0.07)" : "rgba(0,0,0,0.04)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.22s ease",
                }}>
                  {btn.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 15, fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: isAssist ? "#ffffff" : "#0a0a0a",
                  }}>
                    {btn.label}
                  </div>
                  <div style={{
                    fontSize: 12, fontWeight: 300,
                    marginTop: 2,
                    color: isAssist ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)",
                    letterSpacing: "0.01em",
                  }}>
                    {btn.sub}
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  style={{
                    opacity: isHov ? 0.8 : 0.2,
                    transform: isHov ? "translateX(2px)" : "translateX(0)",
                    transition: "opacity 0.2s, transform 0.2s",
                    flexShrink: 0,
                  }}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <p style={{
          textAlign: "center",
          marginTop: 36,
          color: "rgba(0,0,0,0.25)",
          fontSize: 12, fontWeight: 300,
          letterSpacing: "0.03em",
          animation: "fadeUp 0.5s ease 0.55s both",
          opacity: mounted ? 1 : 0,
        }}>
          Copyright © {new Date().getFullYear()} · CRF Pvt Ltd. All rights reserved
        </p>
      </div>
    </div>
  );
}