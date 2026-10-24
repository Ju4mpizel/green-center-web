// src/app/page.jsx
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Ribbon from "@/components/sections/Ribbon";
import Story from "@/components/sections/Story";
import Catalog from "@/components/sections/Catalog";
import Selector from "@/components/sections/Selector";
import Benefits from "@/components/sections/Benefits";
import Calculator from "@/components/sections/Calculator";
import Comparison from "@/components/sections/Comparison";
import Steps from "@/components/sections/Steps";
import Gallery from "@/components/sections/Gallery";
import Branches from "@/components/sections/Branches";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import FAB from "@/components/ui/FAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Ribbon />
        <Story />
        <Catalog />
        <Selector />
        <Benefits />
        <Calculator />
        <Comparison />
        <Steps />
        <Gallery />
        <Branches />
        <CTA />
      </main>
      <Footer />
      <FAB />
    </>
  );
}
