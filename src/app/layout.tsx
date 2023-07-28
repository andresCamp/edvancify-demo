import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'firebaseui/dist/firebaseui.css';
import Navbar from './components/Navbar';
import { Comfortaa } from 'next/font/google';
import { Source_Sans_3 } from 'next/font/google';
import Header from './components/Header';
import Provider from './components/Provider';

const inter = Inter({ subsets: ['latin'] })
const comfortaa = Comfortaa({ subsets: ['latin'] })
const sourcesans3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edvancify Demo',
  description: 'The Road to Infinite Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <Provider store={store}>
      <html lang="en">
        <body className={comfortaa.className}>
          <Provider>
            <Header/>
            <div>
              {children}
            </div>
            <Navbar/>
          </Provider>
        </body>
      </html>
    // </Provider>
  )
}
