import './globals.css'

import SiteProviders from './site-providers';

export const metadata = {
  title: 'Lifted',
  description: 'Lifted',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <body className='body'>
        <SiteProviders>
          {children}
        </SiteProviders>
      </body>
    </html>
  )
}
