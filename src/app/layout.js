'use client';
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { Provider } from 'react-redux';
import {store} from './store'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-vissa",
  description: "E-vissa description",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
              <ThemeProvider>
                <Provider store={store}>
                  <Navbar />
                    {children}
                  <Footer />
                </Provider>
              </ThemeProvider>
          </AuthProvider>
      </body>
    </html>
  );
}
