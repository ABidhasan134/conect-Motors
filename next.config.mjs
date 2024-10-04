/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
      
      return [
        // Basic redirect
        {
          source: '/',
          destination: '/home', // You might want to change the destination here
          permanent: true,
        },
        // // Wildcard path matching
        // {
        //   source: '/blogs',
        //   destination: '/about',
        //   permanent: true,
        // },
      ];
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  