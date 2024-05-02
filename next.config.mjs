/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "wallpapercave.com",
        },
        {
          protocol: "https",
          hostname: "carfans.fr",
        },
        {
          protocol: "https",
          hostname: "img.goodfon.com",
        },
      ],
    }, 
  };
  
  export default nextConfig;
  