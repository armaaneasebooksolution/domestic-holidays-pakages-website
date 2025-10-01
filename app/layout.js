import { Roboto, Poppins, Courgette } from "next/font/google";
import "./global.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const courgette = Courgette({
  variable: "--font-courgette",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${courgette.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
