/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ["images.pexels.com", "res.cloudinary.com"],
    },
    async redirects() {
        return [
            {
                source: '/24/reg',
                destination: 'https://docs.google.com/forms/d/1j4POdIVxZ2dZmTF2KxIeR3rJsS8SGsTV5TI0RuS2SQU/viewform?edit_requested=true',
                permanent: true,
            },
            {
                source: '/24/discord',
                destination: 'https://discord.gg/Rkm6tJEwV2',
                permanent: true,
            },
            {
                source: '/24/whatsapp_teachers',
                destination: 'https://chat.whatsapp.com/H25qMnRfWpjIL0Dm8uQBfH',
                permanent: true,
            },
            {
                source: '/24/whatsapp_students',
                destination: 'https://chat.whatsapp.com/D911Rl2lCFR8vebTlylwVX',
                permanent: true,
            },
        ]
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