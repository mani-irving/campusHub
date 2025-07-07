// pages/Home.jsx
import React from "react";
import HeroSection from "../components/Hero";
import ClubsCarousel from "../components/ClubsCarousel";
import WhyJoinUsSection from "../components/WhyJoinUsSection";
import FeatureHighlightsSection from "../components/FeatureHighlightsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClubsCarousel />
      <WhyJoinUsSection />
      <FeatureHighlightsSection />
    </>
  );
}
