"use client";

import React from "react";
import { automakerBrands } from "@/data/siteData";
import { Cpu, ShieldCheck } from "lucide-react";

export default function AutomakerMarquee() {
  // Duplicate for seamless infinite loop
  const marqueeItems = [...automakerBrands, ...automakerBrands];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        padding: "52px 0 44px 0",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 32px auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 14px",
              borderRadius: "var(--radius-full)",
              background: "var(--bosch-blue-light)",
              border: "1px solid var(--bosch-blue-border)",
              color: "var(--bosch-blue)",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "12px",
            }}
          >
            <Cpu size={15} />
            Diagnóstico Oficial Bosch KTS
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--text-main)",
              lineHeight: 1.25,
              marginBottom: "10px",
            }}
          >
            Especialistas nas Principais Montadoras{" "}
            <span style={{ color: "var(--bosch-blue)" }}>Nacionais & Importadas</span>
          </h2>
          <p
            style={{
              fontSize: "0.98rem",
              color: "var(--text-secondary)",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Tecnologia de fábrica para leitura profunda de injeção eletrônica, câmbio, ABS e redes CAN
            dos veículos mais vendidos do Brasil e das linhas premium mundiais.
          </p>
        </div>
      </div>

      {/* Infinite Continuous Marquee Container with Gradient Fade Masks */}
      <div className="automaker-marquee-outer">
        <div className="automaker-marquee-track">
          {marqueeItems.map((brand, idx) => {
            const isPremium = brand.tier === "Importada / Premium";
            return (
              <div
                key={`${brand.slug}-${idx}`}
                className="automaker-brand-card"
                title={`${brand.name} - Atendimento com Scanner Bosch`}
              >
                {/* Brand Logo in SVG */}
                <div className="automaker-logo-box">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    width={32}
                    height={32}
                    className="automaker-svg-icon"
                  />
                </div>

                {/* Brand Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span className="automaker-name">{brand.name}</span>
                  <span
                    className="automaker-tier"
                    style={{
                      color: isPremium ? "#b45309" : "#0284c7",
                      background: isPremium ? "#fef3c7" : "#e0f2fe",
                      border: isPremium ? "1px solid #fde68a" : "1px solid #bae6fd",
                    }}
                  >
                    {isPremium ? "★ Importada / Premium" : "Líder Nacional"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Subtle Trust Note */}
      <div className="container" style={{ marginTop: "24px", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            background: "#ffffff",
            padding: "8px 20px",
            borderRadius: "var(--radius-full)",
            border: "1px solid var(--border-light)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
          }}
        >
          <ShieldCheck size={16} color="#16a34a" />
          <span>
            <strong>Capacidade comprovada:</strong> Diagnóstico de protocolo original para motores flex,
            gasolina, diesel leve e híbridos.
          </span>
        </div>
      </div>

      <style jsx>{`
        .automaker-marquee-outer {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 8px 0;
          mask-image: linear-gradient(
            to right,
            transparent,
            rgba(0, 0, 0, 1) 8%,
            rgba(0, 0, 0, 1) 92%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            rgba(0, 0, 0, 1) 8%,
            rgba(0, 0, 0, 1) 92%,
            transparent
          );
        }

        .automaker-marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: automakerScroll 42s linear infinite;
        }

        .automaker-marquee-track:hover {
          animation-play-state: paused;
        }

        .automaker-brand-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 10px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: all 0.25s ease;
          flex-shrink: 0;
          cursor: pointer;
        }

        .automaker-brand-card:hover {
          border-color: var(--bosch-blue);
          box-shadow: 0 8px 20px rgba(0, 86, 150, 0.12);
          transform: translateY(-2px);
        }

        .automaker-logo-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .automaker-brand-card:hover .automaker-logo-box {
          background: var(--bosch-blue-light);
          border-color: var(--bosch-blue-border);
        }

        .automaker-svg-icon {
          width: 26px;
          height: 26px;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.8);
          transition: all 0.25s ease;
        }

        .automaker-brand-card:hover .automaker-svg-icon {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.1);
        }

        .automaker-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-main);
          white-space: nowrap;
        }

        .automaker-tier {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        @keyframes automakerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .automaker-brand-card {
            padding: 8px 14px;
            gap: 10px;
          }
          .automaker-logo-box {
            width: 34px;
            height: 34px;
          }
          .automaker-svg-icon {
            width: 22px;
            height: 22px;
          }
          .automaker-name {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}
