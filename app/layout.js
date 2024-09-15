"use client"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Chek from "./component/Chek"
import Footer from "./component/Footer";
import { usePathname } from "next/navigation";
import { IdProvider } from "./context/IdContext";
// import { getStaticPaths, getStaticProps } from "next/dist/build/templates/pages";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// [category]/[movie]
// getStaticPaths
// getStaticProps

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <IdProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main  className="mt-16">
     {
             pathname.includes("/section") || pathname.includes("/about") || pathname.includes("/contact") ? ""
           : <> <Banner />
            <Chek /> </>
          }
        {children}
   </main>
   <Footer />

      </body>
      </IdProvider>
    </html>
  );
}
