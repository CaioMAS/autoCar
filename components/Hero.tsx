"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MessageCircle, CheckCircle2, Award } from "lucide-react";
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
            gap: "48px",
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
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                background: "var(--bosch-blue-light)",
                border: "1px solid var(--bosch-blue-border)",
                color: "var(--bosch-blue)",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "16px",
              }}
            >
              <Award size={16} />
              Oficina Autorizada Bosch Car Service
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                color: "var(--text-main)",
                lineHeight: 1.15,
                marginBottom: "18px",
              }}
            >
              Centro Automotivo e Mecânica de{" "}
              <span style={{ color: "var(--bosch-blue)" }}>Alta Precisão</span> em Montes Claros
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1.08rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "560px",
                marginBottom: "28px",
              }}
            >
              Manutenção preventiva e corretiva com tecnologia oficial Bosch, peças genuínas de 1ª linha
              e orçamento transparente. Seu carro cuidado por quem entende de verdade.
            </p>

            {/* Coherent Action Buttons */}
            <div className="hero-cta-group">
              <button
                onClick={onOpenBooking}
                className="btn-primary hero-btn"
              >
                <Calendar size={18} />
                Agendar Revisão
              </button>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp hero-btn"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>

              <a
                href="#servicos"
                className="btn-secondary hero-btn"
              >
                Ver Serviços
              </a>
            </div>

            {/* Trust checkmarks */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
                paddingTop: "20px",
                borderTop: "1px solid var(--border-light)",
                fontSize: "0.86rem",
                color: "var(--text-secondary)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="#16a34a" />
                Atendimento Multimarcas
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="#16a34a" />
                Orçamento Transparente
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="#16a34a" />
                Garantia Nacional Bosch
              </span>
            </div>
          </div>

          {/* Right Column: Clean Photographic Showcase */}
          <div style={{ position: "relative" }} className="hero-image-wrapper">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "420px",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "0 14px 36px rgba(0, 0, 0, 0.08)",
                border: "1px solid var(--border-light)",
              }}
              className="hero-image-box"
            >
              <Image
                src="/images/hero-workshop.jpg"
                alt="Oficina Auto Car Bosch Car Service Montes Claros"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0, 0, 0, 0.35) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Clean Floating Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-14px",
                right: "20px",
                background: "#ffffff",
                padding: "14px 20px",
                borderRadius: "var(--radius-md)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                border: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
              className="hero-floating-badge"
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bosch-red-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Award size={22} color="#e30613" />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#e30613", textTransform: "uppercase" }}>
                  Selo Oficial Bosch
                </div>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-main)" }}>
                  Padrão Mundial de Qualidade
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 140px;
          padding-bottom: 48px;
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
          padding: 0 24px;
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
          .hero-floating-badge {
            position: static !important;
            margin-top: 12px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
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
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}
