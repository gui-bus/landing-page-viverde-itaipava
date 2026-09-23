import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { WhatsappWidget } from '@/components/ui/whatsappWidget'
import { PageCurtainLoader } from '@/components/ui/pageCurtainLoader'
import { SectionScrollSpy } from '@/components/ui/sectionScrollSpy'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Viverde Itaipava Résidences | Um jeito mais leve de viver',
  description: 'Casas de 3 e 4 suítes em Itaipava, com piscina aquecida, varanda gourmet e jardim privativo.',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f2ed' },
    { media: '(prefers-color-scheme: dark)', color: '#161616' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const isDark = storedTheme === 'dark';
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen w-full bg-[#f4f2ed] text-[#24271d] dark:bg-[#161616] dark:text-[#f1efe8] font-sans antialiased flex flex-col items-center">
        <PageCurtainLoader />
        <SectionScrollSpy />
        <div id="page-container" className="w-full max-w-[1760px] mx-auto min-h-screen flex flex-col relative">
          {children}
          <WhatsappWidget />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
