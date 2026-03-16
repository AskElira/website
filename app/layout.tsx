import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AskElira - Build Swarm Intelligence for Anything',
  description: 'Multi-agent orchestration platform with swarm intelligence validation. Build AI agents for trading, marketing, sales, research, and more.',
  keywords: ['AI agents', 'swarm intelligence', 'multi-agent systems', 'trading', 'marketing', 'automation'],
  authors: [{ name: 'Jelly', url: 'https://github.com/jellyforex' }],
  openGraph: {
    title: 'AskElira - Build Swarm Intelligence for Anything',
    description: 'Multi-agent orchestration platform with swarm intelligence validation',
    url: 'https://askelira.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
