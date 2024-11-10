/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ytimg.com",
            },
        ],
    },
}
// module.exports = {
//     env: {
//       next: process.env.next,
//     },
//   };

export default nextConfig
