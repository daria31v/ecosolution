/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [360, 480, 768, 1280],

    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;
