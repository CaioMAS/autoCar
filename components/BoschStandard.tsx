"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, Award, Database, Sparkles, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function BoschStandard() {
  const pillars = [
    {
      icon: <Database size={20} color="#005696" />,
      title: "Banco de Dados Global Bosch",
      desc: "Softwares técnicos oficiais atualizados 4 vezes ao ano com esquemas elétricos e torques de mais de 12.000 modelos.",
    },
    {
      icon: <Cpu size={20} color="#005696" />,
      title: "Diagnóstico Computadorizado KTS",
      desc: "Varredura profunda que identifica falhas eletrônicas com exatidão antes de qualquer desmontagem.",
    },
    {
      icon: <Award size={20} color="#e30613" />,
      title: "Equipe Certificada & Treinada",
      desc: "Especializações continuadas: ASE Brasil, CTA Bosch, Magneti Marelli, Doutor em Motores Cofap e Metal Leve.",
    },
    {
      icon: <ShieldCheck size={20} color="#16a34a" />,
      title: "Garantia Nacional & Peças Genuínas",
      desc: "Aplicação exclusiva de componentes homologados com total rastreabilidade e cobertura de garantia.",
    },
  ];

  return (
    <section
      id="bosch-service"
      className="section"
      style={{
        background: "#ffffff",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="bosch-grid"
        >
          {/* Left: Image with visual badges */}
          <div style={{ position: "relative" }}>
            <div
              className="bosch-image-box"
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
                boxShadow: "0 16px 36px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Image
                src="/images/diagnostic-bay.jpg"
                alt="Diagnóstico Computadorizado Bosch Car Service Montes Claros"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Clean Floating Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "16px",
                maxWidth: "280px",
                padding: "16px 20px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                background: "#ffffff",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              className="floating-stamp"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <Sparkles size={16} color="#e30613" />
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#e30613",
                  }}
                >
                  Padrão Internacional
                </span>
              </div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-main)", lineHeight: 1.35 }}>
                Mais de 2.000 oficinas Bosch no Brasil com protocolo unificado
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="section-badge red">
              <ShieldCheck size={14} />
              Rede Autorizada Oficial
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                marginBottom: "18px",
                color: "var(--text-main)",
                lineHeight: 1.2,
              }}
            >
              Por que escolher a{" "}
              <span style={{ color: "var(--bosch-blue)" }}>Auto Car Bosch?</span>
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "28px",
              }}
            >
              Pertencer à maior rede independente de serviços automotivos do mundo significa
              proporcionar ao seu veículo o mesmo padrão das montadoras: precisão alemã, transparência
              total nos orçamentos e a credibilidade indiscutível da Bosch.
            </p>

            {/* 4 Pillars List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    background: "#f8fafc",
                    padding: "14px 18px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-sm)",
                      background: "#ffffff",
                      border: "1px solid var(--border-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.98rem", color: "var(--text-main)", marginBottom: "3px", fontWeight: 700 }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} />
              Consultar Especialista Bosch no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bosch-image-box {
          height: 440px;
        }
        @media (max-width: 960px) {
          .bosch-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .bosch-image-box {
            height: 250px !important;
          }
          .floating-stamp {
            position: static !important;
            margin-top: 12px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  );
}
