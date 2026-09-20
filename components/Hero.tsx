"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MessageCircle, CheckCircle2, Award, MapPin, Eye } from "lucide-react";
import { contactInfo } from "@/data/siteData";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Hero Split Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "44px",
            alignItems: "center",
          }}
          className="hero-split-grid"
        >
          {/* Left Column: Copy & CTAs */}
          <div>
            {/* Clean Bosch Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "var(--radius-full)",
                background: "#ffffff",
                border: "1px solid var(--border-light)",
                color: "var(--text-main)",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "20px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <Award size={15} color="var(--bosch-red)" />
              Oficina Homologada Padrão Bosch Car Service
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(2.1rem, 4vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "var(--text-main)",
                lineHeight: 1.14,
                marginBottom: "20px",
              }}
            >
              Engenharia de precisão para o seu{" "}
              <span style={{ color: "var(--bosch-blue)" }}>veículo.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "540px",
                marginBottom: "32px",
              }}
            >
              Mais de 24 anos de tradição, diagnóstico computadorizado com tecnologia original Bosch,
              peças genuínas de linha de montagem e a honestidade comprovada por centenas de clientes em Montes Claros.
            </p>

            {/* Coherent Action Buttons */}
            <div className="hero-cta-group">
              <button onClick={onOpenBooking} className="btn-primary hero-btn">
                <Calendar size={18} />
                Agendar Revisão
              </button>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hero-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderColor: "#cbd5e1",
                }}
              >
                <MessageCircle size={18} color="#16a34a" />
                <span>Atendimento WhatsApp</span>
              </a>

              <a
                href="#estrutura"
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "0 8px",
                }}
                className="hero-text-link"
              >
                <span>Conhecer oficina</span>
                <span style={{ transition: "transform 0.2s" }}>→</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-light)",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  background: "#f8fafc",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <CheckCircle2 size={14} color="var(--bosch-blue)" />
                Scanner Oficial Bosch KTS
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  background: "#f8fafc",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <CheckCircle2 size={14} color="var(--bosch-blue)" />
                Especialistas em Nacionais & Importados
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  background: "#f8fafc",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <CheckCircle2 size={14} color="var(--bosch-blue)" />
                Peças Genuínas & Garantia de Rede
              </span>
            </div>
          </div>

          {/* Right Column: Real Facade Photographic Showcase */}
          <div style={{ position: "relative" }} className="hero-image-wrapper">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "440px",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "0 18px 40px rgba(0, 86, 150, 0.12)",
                border: "1px solid var(--border-light)",
              }}
              className="hero-image-box"
            >
              <Image
                src="/images/fachada-autocar-montes-claros.webp"
                alt="Fachada Oficial da Auto Car Bosch Car Service em Montes Claros - MG"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
                sizes="(max-width: 768px) 100vw, 550px"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.05) 50%, transparent 100%)",
                }}
              />

              {/* Physical Location Badge overlay on image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  padding: "12px 18px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
                className="hero-facade-badge"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--bosch-blue-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--bosch-blue)",
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--bosch-blue)", textTransform: "uppercase" }}>
                      Sede Própria & Fácil Acesso
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-main)" }}>
                      Av. Itamar Caldeira Brant, 50 · Montes Claros
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    background: "#dcfce7",
                    color: "#15803d",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                  className="hero-open-tag"
                >
                  Seg a Sex · 07:45 às 18h
                </span>
              </div>
            </div>

            {/* Credential Seal Floating */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                right: "-8px",
                background: "#ffffff",
                padding: "8px 14px",
                borderRadius: "var(--radius-full)",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
                border: "1px solid var(--border-light)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                zIndex: 2,
              }}
              className="hero-verified-pill"
            >
              <Award size={16} color="#e30613" />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-main)" }}>
                Estrutura Física Real Verificada
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 140px;
          padding-bottom: 52px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-bottom: 32px;
        }

        .hero-btn {
          height: 48px;
          padding: 0 22px;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: var(--radius-md);
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 110px;
            padding-bottom: 40px;
          }
          .hero-split-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 32px !important;
          }
          .hero-verified-pill {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 96px;
            padding-bottom: 32px;
          }
          .hero-cta-group {
            flex-direction: column;
            gap: 10px;
          }
          .hero-btn {
            width: 100% !important;
            text-align: center;
          }
          .hero-image-box {
            height: 280px !important;
          }
          .hero-open-tag {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
