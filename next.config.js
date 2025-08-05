/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
            },
            {
                protocol: "https",
                hostname: "cdn.icon-icons.com",
            },
            {
                protocol: 'https',
                hostname: 'h61gzxl5p0.ufs.sh'
            },
        ],
    },
};

module.exports = nextConfig;
