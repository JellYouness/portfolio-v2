import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import ParticlesComponent from "@/utils/Particles";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";

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
        <ThemeProvider attribute="class">
          <NavBar />
          <div className="z-20">{children}</div>
          <div className="fixed top-0 w-full z-[-1] opacity-50 dark:opacity-30">
            <ParticlesComponent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
