"use client";

import React from "react";
import Image from "next/image";
import { Wrench, Shield, CheckCircle2, Building2, Sparkles, Navigation, Calendar } from "lucide-react";
import { contactInfo } from "@/data/siteData";

interface WorkshopStructureProps {
  onOpenBooking?: () => void;
}

export default function WorkshopStructure({ onOpenBooking }: WorkshopStructureProps) {
  return (
    <section id="estrutura" className="section" style={{ background: "#f8fafc", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Building2 size={14} color="var(--bosch-blue)" />
            Infraestrutura Real Verificada
          </div>
          <h2 className="section-title">
            Centro Técnico com <span>Padrão de Fábrica</span>
          </h2>
          <p className="section-subtitle">
            Diferente de oficinas improvisadas, a Auto Car possui um ambiente industrial amplo,
            limpo e organizado sob os rigorosos protocolos mundiais Bosch, com boxes individuais, elevadores de precisão e recepção climatizada.
          </p>
        </div>

        {/* Asymmetric Photographic Composition */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "28px",
            alignItems: "stretch",
            marginBottom: "40px",
          }}
          className="structure-grid"
        >
          {/* Main Primary Photo: Central Aisle, Epoxy Floor, Glass Reception, Bosch Wall */}
          <div
            className="clean-card structure-card-main"
            style={{
              padding: "0",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-light)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "380px",
                overflow: "hidden",
              }}
              className="structure-img-box"
            >
              <Image
                src="/images/estrutura-oficina-bosch-service.webp"
                alt="Corredor central e recepção envidraçada da Auto Car Bosch Service em Montes Claros"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 900px) 100vw, 700px"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.05) 50%, transparent 100%)",
                }}
              />
              {/* Overlay Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "rgba(0, 86, 150, 0.92)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  color: "#ffffff",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  letterSpacing: "0.03em",
                }}
              >
                <Sparkles size={14} />
                Piso Industrial Epóxi & Recepção Climatizada
              </div>

              {/* Bottom Caption Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "20px",
                  right: "20px",
                  color: "#ffffff",
                }}
              >
                <div style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "4px" }}>
                  Ambiente Amplo, Limpo e Tecnológico
                </div>
                <div style={{ fontSize: "0.86rem", color: "#e2e8f0" }}>
                  Boxes individuais organizados, carrinhos de ferramentas pneumáticas e visão panorâmica da manutenção.
                </div>
              </div>
            </div>

            {/* Bottom Info Bar inside Card */}
            <div
              style={{
                padding: "22px 26px",
                background: "#ffffff",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
              className="structure-metrics-grid"
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--text-main)" }}>
                    Sala de Espera Envidraçada
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    Acompanhe o serviço do seu carro em ambiente confortável com café e Wi-Fi.
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--text-main)" }}>
                    Organização Padrão Bosch
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    Ferramentas identificadas e ambiente livre de graxa acumulada nas peças.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Photo: Workshop Floor, Lifts & 3D Alignment Pit */}
          <div
            className="clean-card structure-card-secondary"
            style={{
              padding: "0",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-light)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "380px",
                overflow: "hidden",
              }}
              className="structure-img-box"
            >
              <Image
                src="/images/oficina-interna-elevadores.webp"
                alt="Elevadores automotivos e rampa de alinhamento 3D da Auto Car Montes Claros"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 900px) 100vw, 550px"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.05) 50%, transparent 100%)",
                }}
              />
              {/* Overlay Tag */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "rgba(227, 6, 19, 0.92)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  color: "#ffffff",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  letterSpacing: "0.03em",
                }}
              >
                <Wrench size={14} />
                Elevadores Hidráulicos & Alinhamento 3D
              </div>

              {/* Bottom Caption Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "20px",
                  right: "20px",
                  color: "#ffffff",
                }}
              >
                <div style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "4px" }}>
                  Capacidade Técnica & Geometria Computadorizada
                </div>
                <div style={{ fontSize: "0.86rem", color: "#e2e8f0" }}>
                  Múltiplos postos de trabalho para atendimento ágil e sem filas desnecessárias.
                </div>
              </div>
            </div>

            {/* Bottom Info Bar inside Card */}
            <div
              style={{
                padding: "22px 26px",
                background: "#ffffff",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
              className="structure-metrics-grid"
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--text-main)" }}>
                    Rampa e Fosso 3D
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    Medição a laser dos ângulos de câmber, cáster e convergência com máxima exatidão.
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--text-main)" }}>
                    Elevadores Certificados
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    Atendimento seguro para sedãs, hatches, SUVs, minivans e picapes de todas as marcas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structure Highlights Strip with Call to Action */}
        <div
          style={{
            background: "linear-gradient(135deg, #005696 0%, #003a66 100%)",
            borderRadius: "var(--radius-xl)",
            padding: "36px 40px",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            boxShadow: "0 12px 32px rgba(0, 86, 150, 0.2)",
          }}
          className="structure-cta-banner"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255, 255, 255, 0.15)",
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "10px",
              }}
            >
              <Shield size={14} />
              Segurança & Procedência Comprovada
            </div>
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "6px",
              }}
            >
              Quer ver de perto como cuidamos do seu veículo?
            </h3>
            <p
              style={{
                color: "#e0f2fe",
                fontSize: "0.95rem",
                maxWidth: "600px",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Nossa oficina está de portas abertas na Av. Itamar Caldeira Brant, 50. Faça-nos uma visita,
              tome um café em nossa sala de espera e veja como realizamos o diagnóstico do seu carro.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={onOpenBooking}
              style={{
                background: "#ffffff",
                color: "var(--bosch-blue)",
                fontWeight: 700,
                height: "48px",
                padding: "0 24px",
                borderRadius: "var(--radius-md)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.92rem",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              }}
              className="structure-btn"
            >
              <Calendar size={17} />
              Agendar Visita
            </button>

            <a
              href="https://maps.google.com/?q=Av.+Itamar+Caldeira+Brant,+50+-+Montes+Claros+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                border: "1.5px solid rgba(255, 255, 255, 0.4)",
                fontWeight: 600,
                height: "48px",
                padding: "0 20px",
                borderRadius: "var(--radius-md)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.92rem",
              }}
              className="structure-btn"
            >
              <Navigation size={16} />
              Traçar Rota no GPS
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .structure-grid {
            grid-template-columns: 1fr !important;
          }
          .structure-img-box {
            height: 300px !important;
          }
        }

        @media (max-width: 640px) {
          .structure-img-box {
            height: 240px !important;
          }
          .structure-metrics-grid {
            grid-template-columns: 1fr !important;
            padding: 16px !important;
            gap: 12px !important;
          }
          .structure-cta-banner {
            padding: 24px 20px !important;
          }
          .structure-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
