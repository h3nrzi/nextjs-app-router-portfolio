/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'thrangra.sirv.com' },
      { protocol: 'https', hostname: 'up.7learn.com' },
      { protocol: 'https', hostname: 'www.gravatar.com' }
    ]
  }
};

export default nextConfig;
