import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishwajeet Jadhav – Full-Stack Developer Portfolio",
  description:
    "Senior-level full-stack developer portfolio website for Vishwajeet Jadhav, showcasing MERN, Python, JavaScript, AI/ML projects and experience.",
  metadataBase: new URL("https://vishwajeet-portfolio.example"),
  openGraph: {
    title: "Vishwajeet Jadhav – Full-Stack Developer",
    description:
      "A minimal, high-end portfolio showcasing full-stack projects, experience, and tech stack by Vishwajeet Jadhav.",
    url: "https://vishwajeet-portfolio.example",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of Vishwajeet Jadhav full-stack developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwajeet Jadhav – Full-Stack Developer",
    description:
      "Senior full-stack developer portfolio with MERN, Python, JavaScript, and AI/ML projects.",
    images: ["/og-image.png"],
  },
  authors: [{ name: "Vishwajeet Jadhav" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
              <div className="mx-auto section-max-width space-y-24 sm:space-y-28 lg:space-y-32">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
