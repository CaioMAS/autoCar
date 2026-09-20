"use client";

import React, { useState } from "react";
import { X, Calendar, Car, Wrench, User, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { servicesData, contactInfo } from "@/data/siteData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState(servicesData[0].title);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = date
      ? date.split("-").reverse().join("/")
      : "A combinar";

    const messageLines = [
      "🔧 *SOLICITAÇÃO DE AGENDAMENTO - AUTO CAR* 🔧",
      "",
      "Olá! Gostaria de agendar um atendimento na Auto Car Bosch Car Service. Seguem meus dados:",
      "",
      `👤 *Cliente:* ${name.trim() || "Não informado"}`,
      `📱 *WhatsApp / Tel:* ${phone.trim() || "Não informado"}`,
      `🚗 *Veículo & Ano:* ${vehicle.trim() || "Não informado"}`,
      `⚙️ *Serviço Pretendido:* ${service}`,
      `📅 *Data Pretendida:* ${formattedDate}`,
      notes.trim() ? `📝 *Observações / Sintomas:* ${notes.trim()}` : null,
      "",
      "Conseguem me atender nessa data pretendida? Aguardo a confirmação!",
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(messageLines)}`;

    if (typeof window !== "undefined") {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = whatsappUrl;
      } else {
        window.open(whatsappUrl, "_blank");
      }
    }

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        background: "rgba(15, 23, 42, 0.65)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={handleClose}
    >
      <div
        className="modal-box"
        style={{
          maxWidth: "500px",
          width: "100%",
          background: "#ffffff",
          borderRadius: "var(--radius-lg)",
          position: "relative",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          border: "1px solid var(--border-light)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Fechar"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "#f1f5f9",
            border: "none",
            color: "var(--text-main)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div className="modal-content">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bosch-blue-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Calendar size={16} color="#005696" />
              </div>
              <span
                style={{
                  color: "var(--bosch-blue)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Agendamento Rápido
              </span>
            </div>

            <h3 style={{ fontSize: "1.35rem", color: "var(--text-main)", marginBottom: "6px", fontWeight: 800 }}>
              Agende sua Revisão
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "20px", lineHeight: 1.5 }}>
              Informe os dados do seu veículo. Nós prepararemos o atendimento e confirmaremos o horário no WhatsApp.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Nome */}
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600 }}>
                  Nome Completo *
                </label>
                <div style={{ position: "relative" }}>
                  <User size={16} color="#94a3b8" style={{ position: "absolute", left: "14px", top: "14px" }} />
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      height: "44px",
                      padding: "0 14px 0 38px",
                      background: "#f8fafc",
                      border: "1px solid var(--border-light)",
                      borderRadius: "var(--radius-md)",
                      color: "var(--text-main)",
                      fontSize: "0.92rem",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              {/* Grid: Telefone e Veículo (1 col on mobile, 2 col on tablet/desktop) */}
              <div className="modal-input-row">
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600 }}>
                    WhatsApp / Telefone *
                  </label>
                  <div style={{ position: "relative" }}>
                    <Phone size={16} color="#94a3b8" style={{ position: "absolute", left: "14px", top: "14px" }} />
                    <input
                      type="tel"
                      required
                      placeholder="(38) 99999-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: "100%",
                        height: "44px",
                        padding: "0 14px 0 38px",
                        background: "#f8fafc",
                        border: "1px solid var(--border-light)",
                        borderRadius: "var(--radius-md)",
                        color: "var(--text-main)",
                        fontSize: "0.92rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600 }}>
                    Veículo & Ano *
                  </label>
                  <div style={{ position: "relative" }}>
                    <Car size={16} color="#94a3b8" style={{ position: "absolute", left: "14px", top: "14px" }} />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Civic 2020"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      style={{
                        width: "100%",
                        height: "44px",
                        padding: "0 14px 0 38px",
                        background: "#f8fafc",
                        border: "1px solid var(--border-light)",
                        borderRadius: "var(--radius-md)",
                        color: "var(--text-main)",
                        fontSize: "0.92rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Serviço */}
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600 }}>
                  Serviço Desejado
                </label>
                <div style={{ position: "relative" }}>
                  <Wrench size={16} color="#94a3b8" style={{ position: "absolute", left: "14px", top: "14px" }} />
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{
                      width: "100%",
                      height: "44px",
                      padding: "0 14px 0 38px",
                      background: "#f8fafc",
                      border: "1px solid var(--border-light)",
                      borderRadius: "var(--radius-md)",
                      color: "var(--text-main)",
                      fontSize: "0.92rem",
                      boxSizing: "border-box",
                    }}
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Revisão Geral Preventiva">Revisão Geral Preventiva</option>
                    <option value="Outro Serviço / Diagnóstico">Outro Serviço / Diagnóstico</option>
                  </select>
                </div>
              </div>

              {/* Data */}
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600 }}>
                  Data Preferencial
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: "100%",
                    height: "44px",
                    padding: "0 14px",
                    background: "#f8fafc",
                    border: "1px solid var(--border-light)",
                    borderRadius: "var(--radius-md)",
                    color: "var(--text-main)",
                    fontSize: "0.92rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Observações */}
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "4px", fontWeight: 600 }}>
                  Observações / Sintomas
                </label>
                <textarea
                  rows={2}
                  placeholder="Descreva se há algum barulho ou luz acesa..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    background: "#f8fafc",
                    border: "1px solid var(--border-light)",
                    borderRadius: "var(--radius-md)",
                    color: "var(--text-main)",
                    fontSize: "0.92rem",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Coherent Submit Button */}
              <button
                type="submit"
                className="btn-whatsapp"
                style={{
                  width: "100%",
                  height: "48px",
                  fontSize: "0.96rem",
                  marginTop: "6px",
                }}
              >
                <MessageCircle size={18} />
                Enviar Solicitação via WhatsApp
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-content" style={{ textAlign: "center", padding: "16px 0" }}>
            <CheckCircle2 size={52} color="#16a34a" style={{ margin: "0 auto 14px auto" }} />
            <h3 style={{ fontSize: "1.35rem", color: "var(--text-main)", marginBottom: "8px", fontWeight: 800 }}>
              Solicitação Enviada!
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.55, marginBottom: "20px", fontSize: "0.92rem" }}>
              Abrimos a conversa com a equipe técnica da Auto Car no seu WhatsApp. Responderemos em
              instantes para confirmar seu horário!
            </p>
            <button onClick={handleClose} className="btn-primary" style={{ width: "100%", height: "48px" }}>
              Fechar
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-content {
          padding: 30px;
        }

        .modal-input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        @media (max-width: 520px) {
          .modal-content {
            padding: 20px 16px;
          }
          .modal-input-row {
            grid-template-columns: 1fr !important; /* Never cuts off placeholder on small mobile */
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
