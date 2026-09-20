"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Menu, X, MessageCircle, MapPin, ChevronRight, Clock } from "lucide-react";
import { contactInfo } from "@/data/siteData";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diagnóstico", href: "#diagnostico" },
    { label: "Padrão Bosch", href: "#bosch-service" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Dicas", href: "#dicas" },
    { label: "Contato", href: "#contato" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          background: "#ffffff",
          borderBottom: "1px solid var(--border-light)",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.06)" : "none",
          transition: "var(--transition)",
        }}
      >
        {/* Top Mini Strip */}
        <div
          style={{
            background: "#f8fafc",
            borderBottom: "1px solid #edf2f7",
            padding: "8px 0",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
          }}
          className="desktop-only"
        >
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={14} color="#005696" />
                {contactInfo.address.full}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Clock size={14} color="#64748b" />
                Seg à Sex: 07:30 às 18:00
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <a
                href={`tel:${contactInfo.phones[0].replace(/\D/g, "")}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 600,
                  color: "var(--text-main)",
                }}
              >
                <Phone size={13} color="#005696" />
                {contactInfo.phones[0]}
              </a>
              <span style={{ opacity: 0.3 }}>|</span>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#16a34a",
                  fontWeight: 600,
                }}
              >
                <MessageCircle size={14} />
                WhatsApp: {contactInfo.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container">
          <div
            className="navbar-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: scrolled ? "10px 0" : "14px 0",
              transition: "var(--transition)",
            }}
          >
            {/* Logo */}
            <Link
              href="#hero"
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                className="navbar-logo-box"
                style={{
                  position: "relative",
                  width: "190px",
                  height: "50px",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Auto Car Bosch Car Service Montes Claros"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    padding: "6px 0",
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--bosch-blue)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
              className="desktop-nav"
            >
              <button
                onClick={onOpenBooking}
                className="btn-primary"
                style={{
                  padding: "10px 22px",
                  fontSize: "0.92rem",
                  cursor: "pointer",
                }}
              >
                <Calendar size={16} />
                Agendar Revisão
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir Menu"
              style={{
                background: "#f1f5f9",
                border: "1px solid var(--border-light)",
                color: "var(--text-main)",
                padding: "8px 12px",
                borderRadius: "var(--radius-md)",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="mobile-hamburger"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "#ffffff",
            zIndex: 950,
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "28px",
              paddingBottom: "16px",
              borderBottom: "1px solid var(--border-light)",
            }}
          >
            <div style={{ position: "relative", width: "170px", height: "45px" }}>
              <Image
                src="/logo.png"
                alt="Auto Car Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: "#f1f5f9",
                border: "none",
                color: "var(--text-main)",
                padding: "8px",
                borderRadius: "50%",
              }}
            >
              <X size={22} />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--text-main)",
                  padding: "12px 14px",
                  borderRadius: "var(--radius-md)",
                  background: "#f8fafc",
                  border: "1px solid var(--border-light)",
                }}
              >
                {link.label}
                <ChevronRight size={18} color="#005696" />
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: "28px",
              paddingTop: "20px",
              borderTop: "1px solid var(--border-light)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="btn-primary"
              style={{ width: "100%", padding: "14px" }}
            >
              <Calendar size={18} />
              Agendar Revisão
            </button>

            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: "100%", padding: "14px" }}
            >
              <MessageCircle size={18} />
              WhatsApp Oficial
            </a>

            <div
              style={{
                marginTop: "16px",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                textAlign: "center",
              }}
            >
              <p>{contactInfo.address.full}</p>
              <p style={{ marginTop: "4px", fontWeight: 600 }}>Tel: {contactInfo.phones.join(" | ")}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 960px) {
          .desktop-only {
            display: none !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .navbar-inner {
            padding: 8px 0 !important;
          }
          .navbar-logo-box {
            width: 155px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
