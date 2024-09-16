import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navBar/navBar";

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

export const metadata = {
  title: "Connect Motors",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    {/* <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" /> */}
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto`}
      >
        <NavBar></NavBar>
        {children}
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        <footer className="bg-sky-900">
          footer
        </footer>
      </body>
    </html>
  );
}
