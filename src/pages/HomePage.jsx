// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <ContactCta />
      <Footer />
    </>
  );
}
