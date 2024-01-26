/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "default",
    locales: ["default", "en", "de"],
    localeDetection: false,
  },
};

module.exports = nextConfig;
