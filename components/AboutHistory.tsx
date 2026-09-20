"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, Target, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutHistory() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const historySlides = [
    {
      image: "/images/edmar-batata.png",
      tag: "O Fundador • Década de 1970",
      title: "Sr. Edmar (Batata)",
      description:
        "Pioneiro na mecânica de Montes Claros. Sua integridade e paixão pelos motores inspiraram os filhos a fundarem a Auto Car.",
    },
    {
      image: "/images/oficina-antiga.png",
      tag: "Primeira Sede • Fundação 2002",
      title: "Fachada Histórica da Auto Car",
      description:
        "Início da Auto Car Peças e Mecânica, conquistando a confiança dos motoristas de Montes Claros com honestidade e trabalho sério.",
    },
    {
      image: "/images/alinhamento-balanceamento-montes-claros.jpg",
      tag: "Expansão • Década de 2010",
      title: "Evolução do Pátio Técnico",
      description:
        "Ampliação do espaço de atendimento com elevadores modernos e primeiros alinhadores ópticos computadorizados.",
    },
    {
      image: "/images/estrutura-oficina-bosch-service.webp",
      tag: "Hoje • Alta Tecnologia",
      title: "Centro Automotivo Bosch Car Service",
      description:
        "Estrutura moderna na Av. Itamar Caldeira Brant com scanners oficiais KTS, alinhamento laser 3D e protocolo internacional Bosch.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % historySlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [historySlides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + historySlides.length) % historySlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % historySlides.length);
  };

  const values = [
    "Honestidade e transparência nos orçamentos",
    "Investimento contínuo em maquinário e tecnologia de ponta",
    "Capacitação regular dos técnicos com cursos oficiais de fábrica",
    "Pontualidade e cumprimento rigoroso dos prazos de entrega",
    "Respeito absoluto ao cliente e ao seu patrimônio",
  ];

  return (
    <section id="sobre" className="section" style={{ background: "#ffffff" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "52px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left Column: Story & Heritage */}
          <div>
            <div className="section-badge">
              <Sparkles size={14} />
              Nossa História & Legado
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.4vw, 2.6rem)",
                fontWeight: 800,
                marginBottom: "20px",
                color: "var(--text-main)",
                lineHeight: 1.2,
              }}
            >
              Uma Tradição Familiar que se Tornou{" "}
              <span style={{ color: "var(--bosch-blue)" }}>Referência em Tecnologia</span>
            </h2>

            <p
              style={{
                fontSize: "1.02rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              A história da <strong style={{ color: "var(--text-main)" }}>AUTO CAR</strong> começou
              na década de 1970 com o saudoso Sr. Edmar (conhecido carinhosamente como{" "}
              <strong style={{ color: "var(--bosch-blue)" }}>Batata</strong>), que iniciou sua vida
              trabalhando com dedicação e construiu uma das oficinas mais respeitadas de Montes Claros.
            </p>

            <p
              style={{
                fontSize: "0.98rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Em <strong style={{ color: "var(--text-main)" }}>2002</strong>, os filhos Danilo e Edmar Júnior
              deram continuidade ao sonho, fundando oficialmente a Auto Car. À sólida sabedoria prática
              herdada do pai, somaram cursos técnicos, certificações de ponta e os equipamentos mais modernos
              do mercado mundial, alcançando a certificação oficial da{" "}
              <strong style={{ color: "var(--bosch-red)" }}>Rede Bosch Car Service</strong>.
            </p>

            {/* Mission / Vision Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                marginBottom: "24px",
              }}
              className="about-cards-grid"
            >
              <div
                style={{
                  background: "#f8fafc",
                  padding: "16px 18px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Target size={18} color="#005696" />
                  <h4 style={{ color: "var(--text-main)", fontSize: "0.95rem", fontWeight: 700 }}>Nossa Missão</h4>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                  Soluções automotivas completas com tecnologia de ponta, honestidade e peças originais para a
                  tranquilidade do cliente.
                </p>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  padding: "16px 18px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Eye size={18} color="#005696" />
                  <h4 style={{ color: "var(--text-main)", fontSize: "0.95rem", fontWeight: 700 }}>Nossa Visão</h4>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.45 }}>
                  Ser o centro automotivo multimarca de maior confiança, precisão técnica e transparência em
                  todo o Norte de Minas.
                </p>
              </div>
            </div>

            {/* Values bullet points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {values.map((v, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <CheckCircle2 size={15} color="#16a34a" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Historical Photo Carousel */}
          <div>
            <div
              className="clean-card"
              style={{
                padding: "24px",
                background: "#ffffff",
                border: "1px solid var(--border-light)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* Carousel Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                  background: "#0f172a",
                }}
              >
                {/* Image */}
                <Image
                  src={historySlides[currentSlide].image}
                  alt={historySlides[currentSlide].title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                    transition: "opacity 0.4s ease",
                  }}
                  priority
                />

                {/* Tag Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(0, 86, 150, 0.9)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {historySlides[currentSlide].tag}
                </div>

                {/* Counter */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "#ffffff",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    padding: "4px 8px",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {currentSlide + 1} / {historySlides.length}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  aria-label="Foto anterior"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    color: "var(--text-main)",
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Próxima foto"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    color: "var(--text-main)",
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Caption Underneath Image */}
              <div style={{ marginTop: "16px", minHeight: "80px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "4px" }}>
                  {historySlides[currentSlide].title}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {historySlides[currentSlide].description}
                </p>
              </div>

              {/* Pagination Dots */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "12px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid var(--border-light)",
                }}
              >
                {historySlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ver foto ${idx + 1}`}
                    style={{
                      width: currentSlide === idx ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "var(--radius-full)",
                      background: currentSlide === idx ? "var(--bosch-blue)" : "#cbd5e1",
                      border: "none",
                      transition: "var(--transition)",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <div
                style={{
                  borderLeft: "3px solid var(--bosch-blue)",
                  paddingLeft: "16px",
                  marginTop: "18px",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  &ldquo;A confiança não se compra; ela se constrói parafuso a parafuso, diagnóstico a
                  diagnóstico, com a verdade dita ao cliente antes de qualquer cobrança.&rdquo;
                </p>
                <span
                  style={{
                    display: "block",
                    marginTop: "4px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--bosch-blue)",
                  }}
                >
                  — Danilo & Edmar Júnior, Fundadores
                </span>
              </div>

              {/* Timeline pill */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-light)",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                }}
              >
                <div>
                  <strong style={{ color: "var(--text-main)", display: "block" }}>Anos 70</strong>
                  Edmar (Batata)
                </div>
                <div>
                  <strong style={{ color: "var(--text-main)", display: "block" }}>2002</strong>
                  Fundação Auto Car
                </div>
                <div>
                  <strong style={{ color: "var(--bosch-blue)", display: "block" }}>Atual</strong>
                  Bosch Car Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .about-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
