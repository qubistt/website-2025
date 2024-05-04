/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ["images.pexels.com", "res.cloudinary.com"],
    },
    webpack: (config, { isServer }) => {
        // If client-side, don't polyfill `fs`
        if (!isServer) {
            config.resolve.fallback.fs = false
            config.resolve.fallback.tls = false
            config.resolve.fallback.net = false
            config.resolve.fallback.child_process = false
        }
        return config;
    }
};