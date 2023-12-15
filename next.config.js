/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "media.graphassets.com",
      "image.cnbcfm.com",
      "www.maxxia.com.au",
      "www.maxxia.com.au",
      "www.hedinbil.se",
    ],
  },
};

module.exports = nextConfig;
