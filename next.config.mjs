/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fortuhost.ru'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fortuhost.ru',
                pathname: '/icons/**', 
            },
        ],
    },
    static: {
        directory: 'public',
        fallback: true,
    },
};

export default nextConfig;
