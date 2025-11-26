import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 YAHAN CHANGE KIYA HAI (Aapki Asli Pehchan)
export const metadata = {
  title: "Prince | Python Developer & Data Analyst",
  description: "Official Portfolio of Prince - Backend Developer specializing in Python, Laravel, and Data Analytics.",
};

export default function RootLayout({ children }) {
  return (
    // 👇 YAHAN CHANGE KIYA HAI ('scroll-smooth' lagaya hai)
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}