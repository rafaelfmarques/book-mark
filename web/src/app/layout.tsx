import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOOKMARK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-medium`}>
        <ThemeProvider>
          <>
            <Navbar
              title="BOOKMARK"
              submenus={[
                { submenu: "FAVORITOS", link: "/" },
                { submenu: "SOBRE", link: "/" },
                { submenu: "CONTATO", link: "/" },
              ]}
            />
            {children}
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
