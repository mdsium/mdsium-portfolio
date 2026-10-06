import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Md. Sium | Jr. Software Engineer (Frontend) | React.js, Next.js, TypeScript',
  description: 'Personal portfolio of Md. Sium, Jr. Software Engineer (Frontend) based in Dhaka, Bangladesh. Specializing in React.js, Next.js, TypeScript, Tailwind CSS, and REST API integration.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-gray-950 text-gray-200 font-sans antialiased">{children}</body>
    </html>
  );
}

