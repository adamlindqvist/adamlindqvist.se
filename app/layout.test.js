import "./globals.css";
import Script from "next/script";

export const metadata = {
    metadataBase: new URL('https://adamlindqvist.se'),
    title: {
        default: 'Adam Lindqvist - Frontend Developer',
        template: '%s | Adam Lindqvist'
    },
    description: "I'm Adam, a software engineer with 10+ years of experience based in Gothenburg. I'm a frontend developer primarily focused on technologies like Javascript and React.",
    keywords: ['frontend developer', 'javascript', 'react', 'web development', 'gothenburg', 'sweden'],
    authors: [{ name: 'Adam Lindqvist' }],
    creator: 'Adam Lindqvist',
    publisher: 'Adam Lindqvist',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'sv_SE',
        url: 'https://adamlindqvist.se',
        title: 'Adam Lindqvist - Frontend Developer',
        description: "I'm Adam, a software engineer with 10+ years of experience based in Gothenburg. I'm a frontend developer primarily focused on technologies like Javascript and React.",
        siteName: 'Adam Lindqvist',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Adam Lindqvist - Frontend Developer',
        description: "I'm Adam, a software engineer with 10+ years of experience based in Gothenburg. I'm a frontend developer primarily focused on technologies like Javascript and React.",
    },
    verification: {
        google: 'google-site-verification-code',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="sv" className="font-inter">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Paytone+One:wght@400&display=swap" rel="stylesheet" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            </head>
            <body className="flex justify-center bg-stone-200 px-4 py-16 text-stone-900 antialiased selection:bg-sky-300 dark:bg-stone-900 dark:text-stone-200 dark:selection:bg-sky-700 lg:py-32">
                {children}

                <Script 
                    id="google-analytics" 
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
                />
                <Script id="google-analytics-config" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-49887920-1');
                    `}
                </Script>
            </body>
        </html>
    );
}