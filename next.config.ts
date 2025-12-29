import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // SEO最適化のための設定
  compress: true,
  poweredByHeader: false, // X-Powered-Byヘッダーを削除（セキュリティ対策）
  reactStrictMode: true,
  // 画像最適化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
