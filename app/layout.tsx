import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <html lang="sv">
            <body
                className={`${inter.className} flex justify-center bg-stone-200 px-4 py-16 text-stone-900 antialiased selection:bg-sky-300 dark:bg-stone-900 dark:text-stone-200 dark:selection:bg-sky-700 lg:py-32`}
            >
                {children}

                <Script id="google-analytics" strategy="afterInteractive">
                    {`!function(e,a,t,n,g,c,o){e.GoogleAnalyticsObject=g,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,c=a.createElement(t),o=a.getElementsByTagName(t)[0],c.async=1,c.src="//www.google-analytics.com/analytics.js",o.parentNode.insertBefore(c,o)}(window,document,"script",0,"ga"),ga("create","UA-49887920-1","auto"),ga("send","pageview");`}
                </Script>
            </body>
        </html>
    );
}
