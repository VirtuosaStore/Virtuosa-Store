import { CarrinhoProvider } from "./context/CarrinhoContext";
import "./globals.css";
import {
  Cormorant_Garamond,
  Montserrat,
  Great_Vibes,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable}`}
      ><CarrinhoProvider>
        {children}
      </CarrinhoProvider>
      </body>
    </html>
  );
}