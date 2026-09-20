"use client";

import React from "react";
import { Phone, MessageCircle, Navigation, Calendar } from "lucide-react";
import { contactInfo } from "@/data/siteData";

interface MobileFloatingBarProps {
  onOpenBooking: () => void;
}

export default function MobileFloatingBar({ onOpenBooking }: MobileFloatingBarProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 890,
        background: "#ffffff",
        borderTop: "1px solid var(--border-light)",
        padding: "8px 12px",
        display: "none",
        boxShadow: "0 -4px 16px rgba(0, 0, 0, 0.08)",
      }}
      className="mobile-bar-container"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "8px",
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        {/* Ligar */}
        <a
          href={`tel:${contactInfo.phones[0].replace(/\D/g, "")}`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            padding: "8px 4px",
            borderRadius: "var(--radius-sm)",
            background: "#f8fafc",
            border: "1px solid var(--border-light)",
            color: "var(--text-main)",
            fontSize: "0.72rem",
            fontWeight: 600,
          }}
        >
          <Phone size={17} color="#005696" />
          <span>Ligar</span>
        </a>

        {/* WhatsApp */}
        <a
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            padding: "8px 4px",
            borderRadius: "var(--radius-sm)",
            background: "#f0fdf4",
            border: "1px solid #bbf7d0",
            color: "#16a34a",
            fontSize: "0.72rem",
            fontWeight: 700,
          }}
        >
          <MessageCircle size={17} />
          <span>WhatsApp</span>
        </a>

        {/* Rota GPS */}
        <a
          href={contactInfo.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            padding: "8px 4px",
            borderRadius: "var(--radius-sm)",
            background: "#f8fafc",
            border: "1px solid var(--border-light)",
            color: "var(--text-main)",
            fontSize: "0.72rem",
            fontWeight: 600,
          }}
        >
          <Navigation size={17} color="#e30613" />
          <span>GPS</span>
        </a>

        {/* Agendar */}
        <button
          onClick={onOpenBooking}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            padding: "8px 4px",
            borderRadius: "var(--radius-sm)",
            background: "var(--bosch-blue)",
            border: "none",
            color: "#ffffff",
            fontSize: "0.72rem",
            fontWeight: 700,
          }}
        >
          <Calendar size={17} />
          <span>Agendar</span>
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-bar-container {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
