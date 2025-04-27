/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ["images.pexels.com", "res.cloudinary.com"],
    },
    async redirects() {
        return [
            {
                source: '/25/reg',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLSejgrpgIPPKcFbp_M05kcYiRdoss4HiDijHYJiSM0G-0YXuyQ/viewform',
                permanent: true,
            },
            {
                source: '/25/invite',
                destination: 'https://docs.google.com/document/d/e/2PACX-1vTg0JYowoLWIdrLyz4zg_ozQbwEMiwXJq28KI3N2k1j4L8sB2QiwTL9-YNnN7RASL7mh7I1iV2EWRgg/pub',
                permanent: true,
            },
            {
                source: '/25/discord',
                destination: 'https://discord.gg/PqgwXKv8',
                permanent: true,
            },
            {
                source: '/25/wa_teachers',
                destination: 'https://chat.whatsapp.com/IgHa0oDiBYjES3C2ygJGRP',
                permanent: true,
            },
            {
                source: '/25/wa_students',
                destination: 'https://chat.whatsapp.com/DEGCFBEAVaO4x0jU9gwRnd',
                permanent: true,
            },
            {
                source: '/instagram',
                destination: 'https://instagram.com/digexsociety',
                permanent: true,
            },
            {
                source: '/youtube',
                destination: 'https://www.youtube.com/@digexclan',
                permanent: true,
            },
            {
                source: '/facebook',
                destination: 'https://www.facebook.com/digexsociety',
                permanent: true,
            }

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