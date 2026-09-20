"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/siteData";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" style={{ background: "#f8fafc", borderTop: "1px solid var(--border-light)" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            Dúvidas Frequentes
          </div>
          <h2 className="section-title">
            Perguntas <span>Frequentes</span>
          </h2>
          <p className="section-subtitle">
            Tudo o que você precisa saber sobre nossos processos, garantias, peças e formas de
            pagamento.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="clean-card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  border: isOpen ? "1.5px solid var(--bosch-blue)" : "1px solid var(--border-light)",
                  boxShadow: isOpen ? "0 4px 14px rgba(0, 86, 150, 0.08)" : "var(--shadow-sm)",
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    color: "var(--text-main)",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: isOpen ? "var(--bosch-blue)" : "var(--text-main)" }}>
                    {faq.q}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "var(--transition)",
                      color: isOpen ? "var(--bosch-blue)" : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 20px 24px",
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      borderTop: "1px solid #f1f5f9",
                      paddingTop: "14px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
