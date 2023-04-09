/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['onestaforms.com.pl', 'cdn.pixabay.com','images.pexels.com','images.unsplash.com','res.cloudinary.com','cloudinary.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}


module.exports = nextConfig