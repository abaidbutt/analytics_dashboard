import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/Provider";

import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="md:block hidden">
            <Sidebar>{children}</Sidebar>
          </div>
          <div className="block md:hidden">
            <BottomBar>{children}</BottomBar>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
