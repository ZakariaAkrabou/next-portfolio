import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components 
import Nav from "../components/Nav";
import PageTrans from "../components/PageTrans";
import PageWrapper from "../components/PageWrapper";
import CustomCursor from "../components/CustomCursor";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Zakaria - Portfolio",
  description: "Full-stack developer portfolio showcasing creative and innovative projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body 
        className={`${jetBrainsMono.variable} font-primary bg-primary text-white scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary-dark selection:bg-accent/30 selection:text-white overflow-x-hidden w-full`}
      >
        <CustomCursor />
        <div className="relative min-h-screen flex flex-col w-full max-w-[100vw]">
          <Nav />
          <main className="flex-1 w-full">
            <PageWrapper>
              <PageTrans>{children}</PageTrans>
            </PageWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
