import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seibishi-quiz-web.vercel.app';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '整備士クイズ',
    short_name: '整備士クイズ',
    description: '自動車整備士資格試験の過去問題集。国家1級・2級・3級の過去問題を無料で学習できます。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

