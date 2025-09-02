"use client";

import Navbar from "@/components/Navbar";
import HomePage from "@/components/screen/HomePage";
import About from "@/components/screen/About";
import Capabilities from "@/components/screen/Capabilities";
import Process from "@/components/screen/Process";
import Pricing from "@/components/screen/Pricing";
import Client from "@/components/screen/Clients";
import Footer from "@/components/screen/Footer";
import Work from "@/components/screen/Work";
import { useScrollIntoView } from "@mantine/hooks";

// app/page.jsx atau pages/index.jsx (jika pakai Next.js)
export default function Home() {
  const { scrollIntoView: scrollHome, targetRef: homeRef } =
    useScrollIntoView<HTMLDivElement>(
      { offset: 50 }
    );
  const { scrollIntoView: scrollAbout, targetRef: aboutRef } =
    useScrollIntoView<HTMLDivElement>(
      { offset: 50 }
    );
  const { scrollIntoView: scrollWork, targetRef: workRef } =
    useScrollIntoView<HTMLDivElement>(
      { offset: 50 }
    );
  const { scrollIntoView: scrollContact, targetRef: contactRef } =
    useScrollIntoView<HTMLDivElement>(
      { offset: 50 }
    );

  return (
    <div className="bg-white text-white">
      <Navbar
        scrollToHome={() => scrollHome({ alignment: "start" })}
        scrollToAbout={() => scrollAbout({ alignment: "start" })}
        scrollToWork={() => scrollWork({ alignment: "start" })}
        scrollToContact={() => scrollContact({ alignment: "start" })}
      />
      {/* Hero Section */}
      <main>
        <HomePage ref={homeRef} />
        <About ref={aboutRef} />
        <Capabilities />
        <Process />
        <Pricing />
        <Work ref={workRef} />
        <Client />
        <Footer ref={contactRef} />
      </main>
    </div>
  );
}
