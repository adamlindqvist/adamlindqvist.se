/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
    generateEtags: false,
    
    // Image optimization for static export
    images: {
        unoptimized: true,
    },
    
    // Font optimization fallback for environments without internet access
    env: {
        NEXT_FONT_GOOGLE_MOCKED_RESPONSES: JSON.stringify([
            {
                url: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
                css: '@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;src:local("Inter")}',
            },
            {
                url: 'https://fonts.googleapis.com/css2?family=Paytone+One:wght@400&display=swap',
                css: '@font-face{font-family:"Paytone One";font-style:normal;font-weight:400;src:local("Paytone One")}',
            },
        ]),
    },
    
    // Experimental performance features
    experimental: {
        optimizePackageImports: ['react', 'react-dom'],
        webVitalsAttribution: ['CLS', 'LCP', 'INP', 'FCP', 'TTFB'],
    },
    
    // Bundle optimization
    webpack: (config, { isServer }) => {
        // Optimize bundle splitting
        if (!isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            };
        }
        return config;
    },
    
    // Static generation optimizations
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;