"use client";

import React, { useState } from "react";
import Image from "next/image";
import { tipsArticles } from "@/data/siteData";
import { BookOpen, Clock, ArrowRight, X } from "lucide-react";

export default function TipsInformativos() {
  const [activeArticle, setActiveArticle] = useState<any | null>(null);

  const articleDetails: Record<string, string> = {
    "cambio-manual-automatico":
      "Carros com câmbio automático ganham cada vez mais espaço no Brasil devido ao conforto no trânsito urbano. Contudo, a manutenção requer atenção rigorosa ao fluido de transmissão. Diferente do câmbio manual, onde a troca de óleo é menos frequente, a transmissão automática exige a substituição periódica do fluido pelo método de diálise para evitar que partículas metálicas obstruam o corpo de válvulas e causem trancos ou patinação.",
    "cuidados-embreagem":
      "A embreagem tem vida útil média de 100.000 km, mas maus hábitos podem reduzir isso pela metade. Evite descansar o pé sobre o pedal da embreagem enquanto dirige, não segure o carro em rampas usando a embreagem ao invés do freio de mão, e nunca arranque com rotação excessiva. Se notar pedal duro, trepidação ou cheiro de queimado, agende uma inspeção imediata.",
    "carro-na-maresia":
      "Mesmo que você resida em Montes Claros, viagens de férias ao litoral ou trajetos em estradas vicinais de terra acumulam salitre e poeira abrasiva na parte inferior do chassi. Esse resíduo ataca coifas, amortecedores e chicotes elétricos. Ao retornar, faça uma lavagem técnica detalhada do assoalho sem aplicar óleo diesel ou querosene, que ressecam as borrachas de suspensão.",
    "tanque-na-reserva":
      "A bomba de combustível fica submersa dentro do tanque e utiliza o próprio líquido para se refrigerar e lubrificar. Quando o nível está cronicamente baixo, a bomba superaquece e trabalha sob esforço. Além disso, as impurezas decantadas no fundo são sugadas, entupindo o pré-filtro e sobrecarregando os bicos injetores. Abasteça sempre antes do indicador atingir o último quarto.",
  };

  return (
    <section id="dicas" className="section" style={{ background: "#ffffff", borderTop: "1px solid var(--border-light)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} />
            Dicas & Informativos
          </div>
          <h2 className="section-title">
            Conhecimento Automotivo para <span>Você Cuidar Bem</span>
          </h2>
          <p className="section-subtitle">
            Orientações práticas dos nossos técnicos para prevenir problemas graves, economizar
            combustível e estender a vida útil do seu carro.
          </p>
        </div>

        {/* Tips Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="tips-grid"
        >
          {tipsArticles.map((article) => (
            <div
              key={article.id}
              className="clean-card"
              style={{
                padding: "0",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => setActiveArticle(article)}
            >
              {/* Image thumbnail */}
              <div style={{ position: "relative", width: "100%", height: "160px" }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background: "var(--bosch-blue)",
                    color: "#fff",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "var(--radius-sm)",
                    textTransform: "uppercase",
                  }}
                >
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginBottom: "8px",
                    }}
                  >
                    <Clock size={12} />
                    {article.readTime}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--text-main)",
                      marginBottom: "8px",
                      lineHeight: 1.35,
                      fontWeight: 700,
                    }}
                  >
                    {article.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      marginBottom: "16px",
                    }}
                  >
                    {article.summary}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    color: "var(--bosch-blue)",
                  }}
                >
                  Ler Dica Completa
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Tip */}
      {activeArticle && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="clean-card"
            style={{
              maxWidth: "580px",
              width: "100%",
              padding: "32px",
              background: "#ffffff",
              position: "relative",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "#f1f5f9",
                border: "none",
                color: "var(--text-main)",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>

            <span
              style={{
                color: "var(--bosch-blue)",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {activeArticle.category} • Dica Auto Car
            </span>

            <h3
              style={{
                fontSize: "1.4rem",
                color: "var(--text-main)",
                marginTop: "6px",
                marginBottom: "14px",
                lineHeight: 1.3,
                fontWeight: 800,
              }}
            >
              {activeArticle.title}
            </h3>

            <p
              style={{
                fontSize: "0.98rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "24px",
              }}
            >
              {articleDetails[activeArticle.id] || activeArticle.summary}
            </p>

            <button
              onClick={() => setActiveArticle(null)}
              className="btn-secondary"
              style={{ width: "100%" }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          .tips-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .tips-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
