"use client";

import React from "react";
import Image from "next/image";
import { partnerBrands } from "@/data/siteData";
import { Award } from "lucide-react";

export default function BrandsCarousel() {
  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "56px 0",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--bosch-blue)",
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "8px",
            }}
          >
            <Award size={14} />
            Atendimento Multimarcas
          </div>
          <h3 style={{ fontSize: "1.45rem", color: "var(--text-main)", fontWeight: 700 }}>
            Especialistas nas Principais Marcas do Mercado
          </h3>
          <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginTop: "4px" }}>
            Ferramental específico e diagnóstico computadorizado para veículos nacionais e importados.
          </p>
        </div>

        {/* Brands Grid - Logos Only */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "14px",
          }}
          className="brands-grid"
        >
          {partnerBrands.map((brand, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-light)",
                borderRadius: "var(--radius-md)",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "76px",
                transition: "var(--transition)",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--bosch-blue)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 86, 150, 0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-light)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.02)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "75px",
                  height: "40px",
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brands-grid {
          min-width: 0;
        }
        @media (max-width: 1024px) {
          .brands-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .brands-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
        }
        @media (max-width: 380px) {
          .brands-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}
