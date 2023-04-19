/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        strictNextHead: true,
        appDir: true,
    },
    output: "export",
};

module.exports = nextConfig;
