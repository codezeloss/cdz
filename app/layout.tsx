import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codezeloss | Frontend Developer",
  description: "Frontend Developer, NEXTjs Frontend Developer, Reactjs Developer. Portfolio website | Passionate Frontend Developer specializing in React.js and NEXT.js, with a keen eye for converting designs and ideas into seamless, responsive code. My expertise lies in crafting intuitive user interfaces that prioritize usability, enjoyment, and accessibility.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full h-full min-h-screen flex flex-col justify-between bg-white dark:bg-neutral-900">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
