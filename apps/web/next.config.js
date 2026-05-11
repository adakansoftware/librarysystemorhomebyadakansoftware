/** @type {import('next').NextConfig} */
const headers = [
  "Accept", "Accept-Version", "Content-Length",
  "Content-MD5", "Content-Type", "Date", "X-Api-Version",
  "X-CSRF-Token", "X-Requested-With",
];


const nextConfig = {
  images: {
       unoptimized: true,
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "img.kitapyurdu.com",
      "adakan-library-core.s3.eu-central-1.amazonaws.com",
      "img.freepik.com",
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:5000/api",
    DEFAULT_IMAGE: process.env.DEFAULT_IMAGE || "/images/default-book.png",
  },
   async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: 'Access-Control-Allow-Origin', value: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PATCH,DELETE" },
          { key: "Access-Control-Allow-Headers", value: headers.join(", ") }
          ]
      }
    ];
  }
};

module.exports = nextConfig;
