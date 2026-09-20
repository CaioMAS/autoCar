"use client";

import React from "react";
import { testimonials } from "@/data/siteData";
import { Star, CheckCircle, MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "#f8fafc" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Star size={14} fill="#d97706" color="#d97706" />
            Avaliações 5 Estrelas
          </div>
          <h2 className="section-title">
            O que Nossos Clientes Dizem em <span>Montes Claros</span>
          </h2>
          <p className="section-subtitle">
            A verdadeira medida da nossa qualidade está na tranquilidade de quem roda seguro pelas
            estradas de Minas Gerais e do Brasil.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="testimonials-grid"
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
              }}
            >
              <div>
                {/* Quote Icon & Stars */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <MessageSquareQuote size={24} color="#cbd5e1" />
                </div>

                {/* Review Text */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    marginBottom: "20px",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author & Vehicle */}
              <div
                style={{
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-main)", fontSize: "0.95rem" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--bosch-blue)", marginTop: "2px" }}>
                    {t.vehicle}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.75rem",
                    color: "#16a34a",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle size={14} />
                  Verificado
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
