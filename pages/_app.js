import "@/styles/globals.scss";

import { Nunito,Inter, Nunito_Sans } from "next/font/google";

export const nunito = Nunito({
  weight: ["400", "500", "600", "700","800","900"],
  display: "swap",
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["400","500", "600","700"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }) {
  return (
    <div className={`${nunito.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
