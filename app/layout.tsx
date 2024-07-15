import type { Metadata } from "next";
import { Inter, Roboto_Mono, Press_Start_2P  } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "truenerds",
  description: "A Social media platform for nerds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={pressStart2P.className}>
      <div className="bg-stone-900 text-green-500">
        {children}</div>
        <Analytics />
        </body>
    </html>
  );
}
