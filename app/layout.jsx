import './globals.css'
import { Montserrat } from "@next/font/google"
import SearchBox from "@/components/SearchBox";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head />
       <body className={'${montserrat.className} m-32'}>
        <div>
          {/* SearchBox */}

          <SearchBox />
        </div>
        <div>
          {children}
        </div>
        </body>
     </html>
  )
}