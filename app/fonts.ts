import { Cormorant_Garamond } from "next/font/google";

export const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-serif",
  display: "swap",
});
