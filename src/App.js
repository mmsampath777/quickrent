// File: App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import GadgetListing from "./components/GadgetListing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Features />
      <GadgetListing />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
