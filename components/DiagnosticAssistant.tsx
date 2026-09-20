"use client";

import React, { useState } from "react";
import { diagnosticSymptoms, SymptomItem, contactInfo } from "@/data/siteData";
import {
  AlertTriangle,
  Compass,
  Wind,
  Disc,
  Zap,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export default function DiagnosticAssistant() {
  const [selectedId, setSelectedId] = useState<string>(diagnosticSymptoms[0].id);

  const handleSelectSymptom = (id: string) => {
    setSelectedId(id);
    if (typeof window !== "undefined" && window.innerWidth <= 960) {
      const cardEl = document.getElementById("diagnostic-result-card");
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  };

  const currentSymptom =
    diagnosticSymptoms.find((s) => s.id === selectedId) || diagnosticSymptoms[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "AlertTriangle":
        return <AlertTriangle size={20} />;
      case "Compass":
        return <Compass size={20} />;
      case "Wind":
        return <Wind size={20} />;
      case "Disc":
        return <Disc size={20} />;
      case "Zap":
        return <Zap size={20} />;
      case "ShieldCheck":
        return <ShieldCheck size={20} />;
      default:
        return <Wrench size={20} />;
    }
  };

  const getUrgencyBadge = (urgency: SymptomItem["urgency"]) => {
    if (urgency === "Urgente") {
      return (
        <span
          style={{
            background: "var(--bosch-red-light)",
            border: "1px solid var(--bosch-red-border)",
            color: "var(--bosch-red)",
            padding: "4px 12px",
            borderRadius: "var(--radius-full)",
            fontSize: "0.78rem",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Nível: Urgente
        </span>
      );
    }
    if (urgency === "Atenção") {
      return (
        <span
          style={{
            background: "var(--warning-light)",
            border: "1px solid #fde68a",
            color: "var(--warning)",
            padding: "4px 12px",
            borderRadius: "var(--radius-full)",
            fontSize: "0.78rem",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Nível: Atenção
        </span>
      );
    }
    return (
      <span
        style={{
          background: "var(--success-light)",
          border: "1px solid #bbf7d0",
          color: "var(--success)",
          padding: "4px 12px",
          borderRadius: "var(--radius-full)",
          fontSize: "0.78rem",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        Nível: Preventivo
      </span>
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Olá Auto Car! Fiz a simulação no site e notei o seguinte sintoma no meu veículo: "${currentSymptom.title}". Gostaria de solicitar um orçamento/agendamento para o serviço de ${currentSymptom.recommendedService}.`
  );
  const customWhatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`;

  return (
    <section id="diagnostico" className="section" style={{ background: "#ffffff" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            Auto Diagnóstico Rápido
          </div>
          <h2 className="section-title">
            O que seu veículo <span>está apresentando?</span>
          </h2>
          <p className="section-subtitle">
            Selecione o sintoma que você percebeu ao dirigir. Nossos técnicos explicam a provável causa
            e o procedimento técnico recomendado para solucionar o problema.
          </p>
        </div>

        {/* Diagnostic Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="diagnostic-grid"
        >
          {/* Left: Interactive Symptom Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {diagnosticSymptoms.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectSymptom(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 20px",
                    borderRadius: "var(--radius-md)",
                    background: isSelected ? "#f0f7ff" : "#ffffff",
                    border: isSelected
                      ? "1.5px solid var(--bosch-blue)"
                      : "1px solid var(--border-light)",
                    color: isSelected ? "var(--bosch-blue)" : "var(--text-main)",
                    boxShadow: isSelected ? "0 4px 14px rgba(0, 86, 150, 0.1)" : "var(--shadow-sm)",
                    textAlign: "left",
                    transition: "var(--transition)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--radius-sm)",
                      background: isSelected ? "var(--bosch-blue)" : "var(--bosch-blue-light)",
                      color: isSelected ? "#ffffff" : "var(--bosch-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "var(--transition)",
                    }}
                  >
                    {getIcon(item.icon)}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.96rem",
                        fontWeight: isSelected ? 700 : 600,
                        color: isSelected ? "var(--bosch-blue)" : "var(--text-main)",
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>
                      Serviço: {item.recommendedService}
                    </div>
                  </div>

                  <ArrowRight
                    size={16}
                    color={isSelected ? "var(--bosch-blue)" : "#cbd5e1"}
                    style={{
                      transition: "var(--transition)",
                      transform: isSelected ? "translateX(3px)" : "none",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Diagnostic Result Card */}
          <div
            id="diagnostic-result-card"
            className="clean-card"
            style={{
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#ffffff",
              border: "1px solid var(--border-light)",
            }}
          >
            <div>
              {/* Header inside card */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.82rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--bosch-blue)",
                    fontWeight: 700,
                  }}
                >
                  Análise Técnica Preliminar
                </span>
                {getUrgencyBadge(currentSymptom.urgency)}
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  marginBottom: "16px",
                  color: "var(--text-main)",
                }}
              >
                {currentSymptom.title}
              </h3>

              {/* Symptom description */}
              <div
                style={{
                  background: "#f8fafc",
                  padding: "16px 20px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-light)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600 }}>
                  O que você percebe no veículo:
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  {currentSymptom.symptom}
                </div>
              </div>

              {/* Cause & Solution Blocks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "var(--warning)",
                      marginBottom: "4px",
                    }}
                  >
                    <AlertTriangle size={16} />
                    Causa Mais Provável:
                  </div>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", paddingLeft: "24px" }}>
                    {currentSymptom.cause}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "var(--bosch-blue)",
                      marginBottom: "4px",
                    }}
                  >
                    <CheckCircle2 size={16} />
                    Solução Técnica Aplicada na Auto Car:
                  </div>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", paddingLeft: "24px" }}>
                    {currentSymptom.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Procedimento Recomendado:
                </span>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-main)" }}>
                  {currentSymptom.recommendedService}
                </div>
              </div>

              <a
                href={customWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-mobile-full"
                style={{ padding: "0 24px", height: "48px", fontSize: "0.92rem" }}
              >
                <MessageCircle size={18} />
                Pedir Orçamento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .diagnostic-grid {
          min-width: 0;
        }
        @media (max-width: 960px) {
          .diagnostic-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
