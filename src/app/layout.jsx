
import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Footer from '@/components/Layout/Footer/Footer'
import MainNavbar from '@/components/Layout/MainNavbar/MainNavbar'
import DiscountCards from '@/Context/CardContext'
import { ReduxProvider } from '@/redux/provider'



const Pop = Poppins(
  {
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
  }
)

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={Pop.className}>
        <ReduxProvider>
          {/* <DiscountCards> */}
          <Navbar />
          <MainNavbar />
          {children}
          <Footer />
          {/*  </DiscountCards>  */}
        </ReduxProvider>

      </body>
    </html>
  )
}
