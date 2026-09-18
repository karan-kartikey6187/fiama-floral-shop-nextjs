import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { Services } from "@/components/home/Services";
import { FlowerDayOffer } from "@/components/home/FlowerDayOffer";
import { NewArrival } from "@/components/home/NewArrival";
import { FlowerDealOffer } from "@/components/home/FlowerDealOffer";
import { TopProducts } from "@/components/home/TopProducts";
import { BestOfferBanner } from "@/components/home/BestOfferBanner";
import { LatestNews } from "@/components/home/LatestNews";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { BrandPartners } from "@/components/home/BrandPartners";

export default function Home() {
  return (
    <ReduxProvider>
      <Header />
      <HeroSection />
      <Services />
      <FlowerDayOffer />
      <NewArrival />
      <FlowerDealOffer />
      <TopProducts />
      <BestOfferBanner />
      <LatestNews />
      <BrandPartners />
      <Footer />
      <ToastContainer />
    </ReduxProvider>
  );
}
