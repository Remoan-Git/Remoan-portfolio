import { ThemeProvider } from 'next-themes'
import { Inter } from "next/font/google";
import "./globals.css";
import '@/styles/animation.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Remoan Toumani",
  description: "Remoan Toumani's Protfolio !",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
