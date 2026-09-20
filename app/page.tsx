"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AutomakerMarquee from "@/components/AutomakerMarquee";
import FeaturePillars from "@/components/FeaturePillars";
import ServicesGrid from "@/components/ServicesGrid";
import WorkshopStructure from "@/components/WorkshopStructure";
import BoschStandard from "@/components/BoschStandard";
import AboutHistory from "@/components/AboutHistory";
import DiagnosticAssistant from "@/components/DiagnosticAssistant";
import Testimonials from "@/components/Testimonials";
import BrandsCarousel from "@/components/BrandsCarousel";
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

      {/* 1. Hero: Real Facade Image as Main Anchor + Direct Conversion CTAs */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 2. Automaker Continuous Marquee: National Leaders & Premium Imports */}
      <AutomakerMarquee />

      {/* 3. Key Differentials & Pillars: Apple-style 4 Pillars of Excellence */}
      <FeaturePillars />

      {/* 4. Specialized Services Grid */}
      <ServicesGrid onOpenBooking={handleOpenBooking} />

      {/* 5. Physical Workshop Infrastructure (2 Real Interior Photos) */}
      <WorkshopStructure onOpenBooking={handleOpenBooking} />

      {/* 6. Bosch Car Service Official Credentials & Technology */}
      <BoschStandard />

      {/* 7. About & Family Heritage (Edmar Batata, Danilo, Edmar Jr) */}
      <AboutHistory />

      {/* 8. Interactive Automotive Diagnostic Assistant */}
      <DiagnosticAssistant />

      {/* 9. Verified Google Maps Reviews Widget (4.7 Stars) */}
      <Testimonials />

      {/* 10. Genuine Partner Brands & Components */}
      <BrandsCarousel />

      {/* 11. Technical Care & Maintenance Tips */}
      <TipsInformativos />

      {/* 12. Frequently Asked Questions */}
      <FaqSection />

      {/* 13. Physical Location, Google Maps & Waze Navigation */}
      <LocationMap />

      {/* 14. Comprehensive Footer with Fiscal & Contact Info */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileFloatingBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </main>
  );
}
