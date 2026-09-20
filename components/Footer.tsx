"use client";

import React from "react";
import Image from "next/image";
import { contactInfo, servicesData } from "@/data/siteData";
import { Send, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0f172a",
        borderTop: "1px solid #1e293b",
        padding: "72px 0 28px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Footer 4-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.9fr 0.9fr 1fr",
            gap: "40px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ position: "relative", width: "200px", height: "50px", marginBottom: "18px" }}>
              <Image
                src="/logo.png"
                alt="Auto Car Bosch Car Service"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#94a3b8",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              Centro automotivo multimarca homologado pela Rede Oficial Bosch Car Service em Montes
              Claros - MG. Tradição iniciada pelo Sr. Batata na década de 70 e hoje operando com padrão
              técnico de ponta.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                background: "rgba(0, 86, 150, 0.35)",
                border: "1px solid rgba(0, 86, 150, 0.6)",
                color: "#7dd3fc",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              <ShieldCheck size={14} />
              Garantia de Para-choque a Para-choque
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "1.05rem",
                marginBottom: "18px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Nossos Serviços
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicos"
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.88rem",
                      transition: "var(--transition)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "1.05rem",
                marginBottom: "18px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Acesso Rápido
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <a href="#hero" style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>
                  Início
                </a>
              </li>
              <li>
                <a href="#diagnostico" style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>
                  Simulador de Sintomas
                </a>
              </li>
              <li>
                <a href="#bosch-service" style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>
                  Padrão Bosch Car Service
                </a>
              </li>
              <li>
                <a href="#sobre" style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>
                  História & Edmar (Batata)
                </a>
              </li>
              <li>
                <a href="#dicas" style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>
                  Informativos Técnicos
                </a>
              </li>
              <li>
                <a href="#contato" style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>
                  Localização & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Direct Contact */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "1.05rem",
                marginBottom: "18px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Informativos no E-mail
            </h4>
            <p style={{ fontSize: "0.86rem", color: "#94a3b8", marginBottom: "14px" }}>
              Receba orientações de conservação e novidades da oficina.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Obrigado por assinar nosso informativo!");
              }}
              style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}
            >
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                required
                style={{
                  padding: "10px 14px",
                  background: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "var(--radius-md)",
                  color: "#fff",
                  fontSize: "0.88rem",
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: "10px", fontSize: "0.88rem" }}
              >
                <Send size={14} />
                Cadastrar
              </button>
            </form>

            <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
              <div>{contactInfo.address.full}</div>
              <div style={{ marginTop: "4px" }}>Tel: {contactInfo.phones[0]}</div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid #1e293b",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.82rem",
            color: "#64748b",
          }}
        >
          <div>
            © {currentYear} Auto Car Montes Claros - MG. Todos os direitos reservados.
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <span>Oficina Homologada Bosch</span>
            <span>Montes Claros - MG</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
