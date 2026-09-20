"use client";

import React from "react";
import { Phone, Clock, MapPin, Navigation, ShieldCheck } from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function QuickContactStrip() {
  return (
    <section
      style={{
        background: "#ffffff",
        borderBottom: "1px solid var(--border-light)",
        padding: "20px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
          className="contact-strip-grid"
        >
          {/* Item 1: Telefone */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              background: "#f8fafc",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-sm)",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "var(--bosch-blue)",
              }}
            >
              <Phone size={18} />
            </div>
            <div>
              <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                Telefones Fixos
              </div>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\D/g, "")}`}
                style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-main)", display: "block" }}
              >
                {contactInfo.phones[0]}
              </a>
              <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                {contactInfo.phones[1]}
              </span>
            </div>
          </div>

          {/* Item 2: Endereço & GPS */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              background: "#f8fafc",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-sm)",
                background: "#f1f5f9",
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
              <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                Bairro Lourdes - Montes Claros
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-main)" }}>
                Av. Itamar Caldeira Brant, 50
              </div>
              <a
                href={contactInfo.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--bosch-blue)",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "2px",
                }}
              >
                <Navigation size={11} />
                Como Chegar no GPS
              </a>
            </div>
          </div>

          {/* Item 3: Horários */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              background: "#f8fafc",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-sm)",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "var(--bosch-blue)",
              }}
            >
              <Clock size={18} />
            </div>
            <div>
              <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                Horário de Atendimento
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-main)" }}>
                Seg à Sex: 07:30 às 18:00
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                Sábados com agendamento
              </span>
            </div>
          </div>

          {/* Item 4: Conceito Bosch */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              background: "#f8fafc",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-sm)",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "var(--bosch-blue)",
              }}
            >
              <ShieldCheck size={18} />
            </div>
            <div>
              <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                Padrão Bosch Car Service
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-main)" }}>
                De Para-choque a Para-choque
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                Orçamento transparente
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .contact-strip-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .contact-strip-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
