import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { UserProvider } from "./UserContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vero by Verizon',
  description: 'Vero by Verizon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <UserProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </UserProvider>
        </body>
      </html>
    </>
  )
}
