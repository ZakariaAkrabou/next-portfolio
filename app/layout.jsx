import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import PageTrans from "../components/PageTrans";
import PageWrapper from "../components/PageWrapper";
import CustomCursor from "../components/CustomCursor";
import ClientOnly from "../components/ClientOnly";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico?v=3" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" />
        <meta name="theme-color" content="#10B981" />
      </head>
      <body 
        suppressHydrationWarning={true}
        className={`${jetBrainsMono.variable} font-primary bg-primary text-white scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary-dark selection:bg-accent/30 selection:text-white`}
      >
        <div className="relative min-h-screen flex flex-col overflow-hidden">
          <Nav />
          <main className="flex-1">
            <PageWrapper>
              <PageTrans>{children}</PageTrans>
            </PageWrapper>
          </main>
        </div>
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
      </body>
    </html>
  );
}
