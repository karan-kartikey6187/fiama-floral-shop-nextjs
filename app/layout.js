import { Montserrat } from "next/font/google";
import "../styles/theme.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Fiama Floral Shop",
  description: "Fiama Floral Shop provides fresh flowers",
  keywords: [
      "Fiama Floral Shop",
      "Fresh Flower",
      "Shop Your Flower",
      "Natural & Beautiful Flower Here",
      "Premium Flowers",
  ],
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
