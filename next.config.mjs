/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/newgrocerylist",
    async redirects() {
        return [
            {
                source: "/",
                destination: "/newgrocerylist",
                basePath: false,
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
