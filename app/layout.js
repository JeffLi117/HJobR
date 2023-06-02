import './globals.css'

export const metadata = {
  title: 'HJobR',
  description: 'Getting you the job you need',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
