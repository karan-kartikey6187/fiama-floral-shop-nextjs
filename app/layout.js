import { Montserrat } from "next/font/google";
import "../styles/theme.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
      default: "Fiama Floral Shop",
  },
  description: "Fiama Floral Shop provides fresh flowers",
  keywords: [
      "Fiama Floral Shop",
      "Fresh Flower",
      "Shop Your Flower",
      "Natural & Beautiful Flower Here",
      "Premium Flowers",
  ],
  robots: {
      index: false,
      follow: false,
  },
  openGraph: {
      title: "Fiama Floral Shop",
      description: "Fiama Floral Shop provides fresh flowers",
      type: "website",
  },

  twitter: {
      card: "summary_large_image",
      title: "Fiama Floral Shop",
      description: "Fiama Floral Shop provides fresh flowers",
  },
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
