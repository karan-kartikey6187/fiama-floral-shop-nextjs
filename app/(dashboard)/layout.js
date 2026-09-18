import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { Fragment } from "react";
import { BrandPartners } from "@/components/home/BrandPartners";

export default function DashboardLayout({ children }) {
  return (
    <ReduxProvider>
      <Header />
      <Fragment>{children}</Fragment>
      <BrandPartners/>
      <Footer />
      <ScrollToTop />
    </ReduxProvider>
  );
}
