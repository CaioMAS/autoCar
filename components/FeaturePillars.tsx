"use client";

import React from "react";
import { Cpu, ShieldCheck, Award, Wrench } from "lucide-react";

export default function FeaturePillars() {
  const pillars = [
    {
      icon: <Cpu size={24} color="#005696" />,
      title: "Diagnóstico Computadorizado KTS",
      desc: "Scanners oficiais Bosch conectados à central eletrônica para identificar a causa raiz sem trocas de peças desnecessárias.",
    },
    {
      icon: <ShieldCheck size={24} color="#005696" />,
      title: "Garantia & Peças de Montadora",
      desc: "Trabalhamos exclusivamente com componentes genuínos homologados, garantindo a mesma durabilidade do carro zero km.",
    },
    {
      icon: <Award size={24} color="#005696" />,
      title: "Homologação Bosch Mundial",
      desc: "Processos rigorosos de oficina alemã, ferramentas calibradas por torque e suporte técnico direto da fábrica Bosch.",
    },
    {
      icon: <Wrench size={24} color="#005696" />,
      title: "+24 Anos de Confiança Familiar",
      desc: "Tradição que atravessa gerações em Montes Claros: atendimento pessoal pelo Danilo e Edmar Jr com honestidade comprovada.",
    },
  ];

  return (
    <section
      className="section"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Editorial Section Header */}
        <div className="section-header">
          <div className="section-badge">
            Padrão Técnico & Compromisso
          </div>
          <h2 className="section-title">
            Quatro Pilares de <span>Confiança Absoluta</span>
          </h2>
          <p className="section-subtitle">
            A união da mais avançada tecnologia diagnóstica alemã com a ética e transparência
            de quem cuida da sua segurança e da sua família.
          </p>
        </div>

        {/* 4 Clean Minimalist Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="pillars-luxury-grid"
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "36px 28px",
                background: "#f8fafc",
                borderColor: "#e2e8f0",
              }}
            >
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-main)",
                    lineHeight: 1.3,
                    marginBottom: "10px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .pillars-luxury-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .pillars-luxury-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
