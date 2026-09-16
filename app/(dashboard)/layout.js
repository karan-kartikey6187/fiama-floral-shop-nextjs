import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import BrandPartnersWrapper from "@/components/home/BrandPartnersWrapper";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { Fragment } from "react";

export default function DashboardLayout({ children }) {
  return (
    <ReduxProvider>
      <Header />
      <Fragment>{children}</Fragment>
      <BrandPartnersWrapper />
      <Footer />
      <ScrollToTop />
    </ReduxProvider>
  );
}
