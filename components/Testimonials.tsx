"use client";

import React from "react";
import { testimonials } from "@/data/siteData";
import { Star, CheckCircle, ExternalLink, ShieldCheck, CornerDownRight } from "lucide-react";

// Official Google 'G' Multi-Color SVG
const GoogleGIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.15C3.25 21.32 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.27C.46 8.2.01 10.04.01 12s.45 3.8 1.26 5.42l4.01-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.68 1.27 6.58l4.01 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export default function Testimonials() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/AUTOCAR+MONTES+CLAROS+-+Bosch+Service+Av.+Itamar+Caldeira+Brant";

  return (
    <section className="section" style={{ background: "#f8fafc" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div
            className="section-badge"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              color: "#1e293b",
            }}
          >
            <GoogleGIcon size={16} />
            Avaliações Verificadas no Google
          </div>
          <h2 className="section-title">
            O que Nossos Clientes Dizem no <span>Google</span>
          </h2>
          <p className="section-subtitle">
            Transparência absoluta, precisão técnica Bosch e o carinho de quem cuida dos motoristas de
            Montes Claros e do Norte de Minas há mais de duas décadas.
          </p>

          {/* Google Rating Summary Bar */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "20px",
              padding: "10px 24px",
              borderRadius: "var(--radius-full)",
              background: "#ffffff",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-sm)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <GoogleGIcon size={22} />
              <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--text-main)" }}>
                4.7
              </span>
            </div>

            <div style={{ display: "flex", gap: "3px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#fbbc04" color="#fbbc04" />
              ))}
            </div>

            <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)", fontWeight: 600 }}>
              Classificação Excelente no Google Maps
            </span>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.82rem",
                color: "var(--bosch-blue)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Ver perfil oficial <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Testimonials Grid (2x2 on desktop, 1 col on mobile) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
          className="google-reviews-grid"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "28px",
                position: "relative",
              }}
            >
              <div>
                {/* Header: User Avatar, Name, Badge, Google G */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {/* User Initials Avatar with Material Google Color */}
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        background: t.avatarColor,
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "1rem",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "var(--text-main)",
                          fontSize: "1rem",
                          lineHeight: 1.2,
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "#64748b",
                          marginTop: "3px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <ShieldCheck size={13} color="#16a34a" />
                        {t.localGuide || "Cliente Verificado"}
                      </div>
                    </div>
                  </div>

                  {/* Google Mark in Card */}
                  <div
                    title="Avaliação postada no Google"
                    style={{
                      background: "#f8fafc",
                      padding: "6px",
                      borderRadius: "50%",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GoogleGIcon size={18} />
                  </div>
                </div>

                {/* Rating Stars + Date + Vehicle */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbc04" color="#fbbc04" />
                    ))}
                  </div>

                  <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>•</span>

                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{t.date}</span>

                  <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>•</span>

                  <span
                    style={{
                      background: "var(--bosch-blue-light)",
                      border: "1px solid var(--bosch-blue-border)",
                      color: "var(--bosch-blue)",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    🚗 {t.vehicle}
                  </span>
                </div>

                {/* Review Text */}
                <p
                  style={{
                    fontSize: "0.93rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Owner Reply Box (Standard Google Business Reply) */}
              {t.ownerReply && (
                <div
                  style={{
                    background: "#f1f5f9",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 16px",
                    borderLeft: "3px solid var(--bosch-blue)",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--bosch-blue)",
                      marginBottom: "4px",
                    }}
                  >
                    <CornerDownRight size={13} />
                    Resposta do Proprietário (Auto Car Bosch Service)
                  </div>
                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: "#475569",
                      lineHeight: 1.45,
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    {t.ownerReply}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA: Google Maps Action */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: "0 28px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <GoogleGIcon size={18} />
            <span>Ver perfil no Google Maps e Deixar sua Avaliação</span>
            <ExternalLink size={14} />
          </a>
          <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
            Av. Itamar Caldeira Brant, 50 · Montes Claros - MG · Telefone: (38) 3214-7590
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .google-reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
