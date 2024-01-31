import './globals.css'

export const metadata = {
  title: 'VolunteerHub',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-400'>{children}</body>
    </html>
  )
}
