"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function LocationMap() {
  return (
    <section id="contato" className="section" style={{ background: "#ffffff", borderTop: "1px solid var(--border-light)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={14} />
            Fácil Acesso em Montes Claros
          </div>
          <h2 className="section-title">
            Venha Conhecer Nossa <span>Estrutura</span>
          </h2>
          <p className="section-subtitle">
            Localizada no Bairro Lourdes com pátio amplo, sala de espera climatizada e atendimento
            personalizado.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="location-grid"
        >
          {/* Left: Clean Minimalist Contact Card */}
          <div
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
              <h3 style={{ fontSize: "1.3rem", color: "var(--text-main)", marginBottom: "24px", fontWeight: 700 }}>
                Informações de Atendimento
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {/* Endereço */}
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
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
                    <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                      Endereço Oficial
                    </div>
                    <div style={{ fontSize: "0.95rem", color: "var(--text-main)", fontWeight: 600, marginTop: "2px", lineHeight: 1.4 }}>
                      {contactInfo.address.full}
                    </div>
                    <div style={{ display: "flex", gap: "14px", marginTop: "6px" }}>
                      <a
                        href={contactInfo.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--bosch-blue)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontWeight: 600,
                        }}
                      >
                        <ExternalLink size={12} />
                        Google Maps
                      </a>
                      <a
                        href={contactInfo.address.wazeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-secondary)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontWeight: 600,
                        }}
                      >
                        <ExternalLink size={12} />
                        Waze
                      </a>
                    </div>
                  </div>
                </div>

                {/* Telefones */}
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
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
                    <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                      Central Telefônica
                    </div>
                    <div style={{ fontSize: "1rem", color: "var(--text-main)", fontWeight: 700, marginTop: "2px" }}>
                      {contactInfo.phones[0]}
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)" }}>
                      {contactInfo.phones[1]} (Telefax)
                    </div>
                  </div>
                </div>

                {/* Horários */}
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
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
                    <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                      Horário de Funcionamento
                    </div>
                    <div style={{ fontSize: "0.92rem", color: "var(--text-main)", fontWeight: 600, marginTop: "2px" }}>
                      {contactInfo.hours.weekdays}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                      {contactInfo.hours.saturday}
                    </div>
                  </div>
                </div>

                {/* E-mail */}
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "var(--radius-sm)",
                      background: "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--bosch-blue)",
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.04em" }}>
                      E-mail Corporativo
                    </div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      style={{ fontSize: "0.92rem", color: "var(--text-main)", fontWeight: 600, marginTop: "2px", display: "block" }}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean, Non-aggressive Action Button */}
            <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid var(--border-light)" }}>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: "100%", padding: "12px", fontSize: "0.95rem" }}
              >
                <MessageCircle size={18} />
                Falar com a Oficina no WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Map in natural clean colors */}
          <div
            className="clean-card"
            style={{
              padding: "0",
              overflow: "hidden",
              minHeight: "450px",
              position: "relative",
            }}
          >
            <iframe
              title="Localização Auto Car Montes Claros"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.697415444636!2d-43.8641775!3d-16.7317709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x752ffe054f0a925%3A0x892a0614f17781b0!2sAv.%20Itamar%20Caldeira%20Brant%2C%2050%20-%20Lourdes%2C%20Montes%20Claros%20-%20MG%2C%2039400-701!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
