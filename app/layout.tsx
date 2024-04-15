import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import ParticlesComponent from "@/utils/Particles";
import NavBar from "@/components/NavBar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youness JELLOULI - Portfolio",
  description: "Youness JELLOULI's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <NavBar />
        <div className="z-20">{children}</div>
        {/* <div className="fixed top-0 w-full z-[-1] bg-gray-950">
          <ParticlesComponent />
        </div> */}
      </body>
    </html>
  );
}
