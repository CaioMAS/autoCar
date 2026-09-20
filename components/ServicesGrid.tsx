"use client";

import React from "react";
import Image from "next/image";
import { servicesData, ServiceItem, contactInfo } from "@/data/siteData";
import { Check, MessageCircle, Wrench, ArrowRight } from "lucide-react";

interface ServicesGridProps {
  onOpenBooking?: () => void;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const handleWhatsappService = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá Auto Car! Gostaria de mais informações e um orçamento para o serviço de ${serviceTitle}.`
    );
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="servicos" className="section" style={{ background: "#ffffff" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} color="var(--bosch-blue)" />
            Engenharia & Especialidades
          </div>
          <h2 className="section-title">
            Serviços Especializados <span>Nacionais & Importados</span>
          </h2>
          <p className="section-subtitle">
            Equipamentos de homologação mundial Bosch, ferramentas de calibração micrométrica e técnicos
            capacitados para garantir máxima segurança e durabilidade ao seu veículo.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="services-grid"
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="clean-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "36px 30px",
                background: "#f8fafc",
                borderColor: "#e2e8f0",
              }}
            >
              <div>
                {/* Top Badge & Icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "var(--radius-md)",
                      background: "var(--bosch-blue-light)",
                      border: "1px solid var(--bosch-blue-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={34}
                      height={34}
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  {service.badge && (
                    <span
                      style={{
                        background:
                          service.badge === "Mais Procurado"
                            ? "var(--bosch-red-light)"
                            : "var(--bosch-blue-light)",
                        border:
                          service.badge === "Mais Procurado"
                            ? "1px solid var(--bosch-red-border)"
                            : "1px solid var(--bosch-blue-border)",
                        color:
                          service.badge === "Mais Procurado" ? "var(--bosch-red)" : "var(--bosch-blue)",
                        padding: "4px 10px",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "10px",
                    color: "var(--text-main)",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "18px",
                  }}
                >
                  {service.shortDesc}
                </p>

                {/* Technology Pill */}
                <div
                  style={{
                    background: "#f1f5f9",
                    border: "1px solid var(--border-light)",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.78rem",
                    color: "var(--bosch-blue)",
                    marginBottom: "20px",
                    display: "inline-block",
                    fontWeight: 600,
                  }}
                >
                  ⚙️ {service.techUsed}
                </div>

                {/* Highlights List */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "28px",
                  }}
                >
                  {service.highlights.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.86rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "var(--success-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={11} color="#16a34a" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div
                style={{
                  paddingTop: "18px",
                  borderTop: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <button
                  onClick={() => handleWhatsappService(service.title)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#16a34a",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <MessageCircle size={16} />
                  Pedir Orçamento
                </button>

                <button
                  onClick={onOpenBooking}
                  style={{
                    background: "#ffffff",
                    border: "1px solid var(--border-light)",
                    color: "var(--text-main)",
                    borderRadius: "var(--radius-sm)",
                    padding: "6px 12px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--bosch-blue)";
                    e.currentTarget.style.color = "var(--bosch-blue)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)";
                    e.currentTarget.style.color = "var(--text-main)";
                  }}
                >
                  Agendar
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
