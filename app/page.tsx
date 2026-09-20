"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturePillars from "@/components/FeaturePillars";
import QuickContactStrip from "@/components/QuickContactStrip";
import DiagnosticAssistant from "@/components/DiagnosticAssistant";
import ServicesGrid from "@/components/ServicesGrid";
import BoschStandard from "@/components/BoschStandard";
import BrandsCarousel from "@/components/BrandsCarousel";
import AboutHistory from "@/components/AboutHistory";
import Testimonials from "@/components/Testimonials";
import TipsInformativos from "@/components/TipsInformativos";
import FaqSection from "@/components/FaqSection";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import MobileFloatingBar from "@/components/MobileFloatingBar";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero & Sections Flow Container (Desktop: Hero -> Pillars -> Contact -> Diagnostic | Mobile: Hero -> Diagnostic -> Pillars -> Contact) */}
      <div className="homepage-hero-flow">
        <div className="flow-hero">
          <Hero onOpenBooking={handleOpenBooking} />
        </div>

        <div className="flow-pillars">
          <FeaturePillars />
        </div>

        <div className="flow-contact">
          <QuickContactStrip />
        </div>

        <div className="flow-diagnostic">
          <DiagnosticAssistant />
        </div>
      </div>

      {/* Services Grid with 3D and Laser Technology */}
      <ServicesGrid onOpenBooking={handleOpenBooking} />

      {/* Official Bosch Car Service Credentials */}
      <BoschStandard />

      {/* Partner Brands & Genuine Replacement Parts */}
      <BrandsCarousel />

      {/* About & Family Heritage (Edmar Batata, Danilo, Edmar Jr) */}
      <AboutHistory />

      {/* Google 5.0 Star Customer Reviews */}
      <Testimonials />

      {/* Modernized Informative Articles */}
      <TipsInformativos />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Location, Google Map, Waze, and Contact */}
      <LocationMap />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileFloatingBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </main>
  );
}
