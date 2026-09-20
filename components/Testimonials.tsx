"use client";

import React from "react";
import { testimonials } from "@/data/siteData";
import { Star, ExternalLink, ShieldCheck, ThumbsUp, Wrench } from "lucide-react";

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

const LocalGuideStar = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M12 2L14.85 8.08L21.5 8.84L16.55 13.33L17.89 19.91L12 16.59L6.11 19.91L7.45 13.33L2.5 8.84L9.15 8.08L12 2Z"
      fill="#FBBC04"
      stroke="#D97706"
      strokeWidth="1.5"
      strokeLinejoin="round"
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
            Depoimentos Reais no Google Maps
          </div>
          <h2 className="section-title">
            O que Nossos Clientes Dizem no <span>Google</span>
          </h2>
          <p className="section-subtitle">
            Avaliações 100% autênticas e registradas por quem confia a manutenção de seus veículos
            na Auto Car Bosch Service em Montes Claros.
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
              Ver todas as avaliações no Google <ExternalLink size={13} />
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
                padding: "26px",
                position: "relative",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
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
                    {/* User Initials Avatar with Clean Google Material Palette */}
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: t.avatarColor,
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.98rem",
                        letterSpacing: "0.02em",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
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
                          color: t.isLocalGuide ? "#b45309" : "#64748b",
                          fontWeight: t.isLocalGuide ? 600 : 500,
                          marginTop: "3px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {t.isLocalGuide ? (
                          <>
                            <LocalGuideStar size={13} />
                            {t.localGuide}
                          </>
                        ) : (
                          <>
                            <ShieldCheck size={13} color="#16a34a" />
                            {t.localGuide || "Cliente Verificado"}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Google Mark in Card */}
                  <div
                    title="Avaliação real no Google Maps"
                    style={{
                      background: "#f8fafc",
                      padding: "6px 8px",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#475569",
                    }}
                  >
                    <GoogleGIcon size={15} />
                    <span>Google</span>
                  </div>
                </div>

                {/* Rating Stars + Date + Badges */}
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

                  {t.badge && (
                    <>
                      <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>•</span>
                      <span
                        style={{
                          background: "#ecfdf5",
                          border: "1px solid #a7f3d0",
                          color: "#065f46",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "var(--radius-full)",
                        }}
                      >
                        🏷️ {t.badge}
                      </span>
                    </>
                  )}

                  {t.highlight && (
                    <span
                      style={{
                        background: "var(--bosch-blue-light)",
                        border: "1px solid var(--bosch-blue-border)",
                        color: "var(--bosch-blue)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      ★ {t.highlight}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p
                  style={{
                    fontSize: "0.93rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "16px",
                    whiteSpace: "pre-line",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Optional Services Tags if listed in Google review */}
                {t.services && t.services.length > 0 && (
                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-md)",
                      padding: "10px 14px",
                      marginBottom: "14px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        color: "#475569",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        marginBottom: "6px",
                      }}
                    >
                      <Wrench size={12} color="var(--bosch-blue)" />
                      Serviços Realizados:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {t.services.map((svc, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            background: "#ffffff",
                            border: "1px solid #cbd5e1",
                            color: "#334155",
                            fontSize: "0.75rem",
                            padding: "2px 8px",
                            borderRadius: "var(--radius-sm)",
                            fontWeight: 500,
                          }}
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reaction Footnote if present */}
              {t.likes && (
                <div
                  style={{
                    borderTop: "1px solid #f1f5f9",
                    paddingTop: "10px",
                    marginTop: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.78rem",
                    color: "#64748b",
                  }}
                >
                  <span>❤️ 🙏 {t.likes} pessoas curtiram esta avaliação no Google</span>
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
