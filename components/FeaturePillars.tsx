"use client";

import React from "react";
import { Cpu, ShieldCheck, Award, Wrench } from "lucide-react";

export default function FeaturePillars() {
  const pillars = [
    {
      icon: <Cpu size={20} color="#005696" />,
      title: "Diagnóstico KTS Computadorizado",
      desc: "Scanners oficiais Bosch para leitura precisa de módulos e injeção",
    },
    {
      icon: <ShieldCheck size={20} color="#005696" />,
      title: "Garantia de Para-choque a Para-choque",
      desc: "Transparência total e cobertura em serviços e peças originais",
    },
    {
      icon: <Award size={20} color="#005696" />,
      title: "Rede Bosch Car Service",
      desc: "Padrão mundial de montadora para veículos nacionais e importados",
    },
    {
      icon: <Wrench size={20} color="#005696" />,
      title: "+24 Anos de Tradição em MOC",
      desc: "História familiar de confiança que atravessa gerações desde os anos 70",
    },
  ];

  return (
    <section
      className="feature-pillars-section"
      style={{
        background: "#f8fafc",
        padding: "24px 0",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            background: "#ffffff",
            padding: "20px 24px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-sm)",
          }}
          className="pillars-grid"
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                paddingRight: idx < 3 ? "12px" : "0",
                borderRight: idx < 3 ? "1px solid #f1f5f9" : "none",
              }}
              className="pillar-item"
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bosch-blue-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </div>
              <div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "3px" }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .pillars-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .pillar-item {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 14px !important;
            padding: 16px !important;
          }
          .pillar-item {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
