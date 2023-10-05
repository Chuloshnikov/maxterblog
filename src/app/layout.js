import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from "./providers/ThemeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-w-screen overflow-x-hidden ${inter.className}`}>
        <ThemeContextProvider>
        <ThemeProvider>
          <div
          className='max-w-container mx-auto xs:px-[20px] xl:px-[80px] xs:max-w-[500px] mdl:max-w-[667px] lg:max-w-[768px] lgl:max-w-[960px] xl:max-w-[1260px] 2xl:max-w-[1366px]'
          >
            <Navbar/>
            {children}
            <Footer/>
          </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
