import "./globals.css";
import { Inter, Paytone_One } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const paytoneOne = Paytone_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-paytone-one",
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${paytoneOne.variable}`}>
      <body className="flex justify-center bg-stone-200 px-4 py-16 text-stone-900 antialiased selection:bg-sky-300 dark:bg-stone-900 dark:text-stone-200 dark:selection:bg-sky-700 lg:py-32">
        {children}
      </body>
    </html>
  );
}
