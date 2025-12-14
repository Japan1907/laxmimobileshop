/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
       {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'lyneoriginals.com',  
      },
       {
        protocol: 'https',
        hostname: 'brandfetch.com',  
      },
      
 {
        protocol: 'https',
        hostname: 'logowik.com',  
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',  
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',  
      },
      {
        protocol: 'https',
        hostname: 'cdn.vox-cdn.com',  
      },
       {
        protocol: 'https',
        hostname: 'brandslogos.com',  
      },
       {
        protocol: 'https',
        hostname: 'static.vecteezy.com',  
      },
       {
        protocol: 'https',
        hostname: 'cdn.freelogovectors.net',  
      },
    ],
  },
}

module.exports = nextConfig;
