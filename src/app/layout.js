import { Inter } from "next/font/google";
import "./globals.css";
import { head } from "@/utils";
import Link from "next/link";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pencil Tech",
  description: "Getting Teachers the Resources they Need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {head}
      <body>
        {/* BACKGROUND */}
        <Link href="/">
          <div className="flex justify-left z-[900] p-4">
            <img
              src="/images/LOGO-PENCIL_DGPENCILBox_2022.png"
              id="pencil-icon"
              alt="A cartoon pencil"
              className="h-[50px] pr-3 relative z-[1000]"
            />
          </div>
        </Link>
        <div>
          <div className="blob-1"></div>
          <div className="blob-2"></div>
          <div className="dotted-line-1"></div>
          <div className="dotted-line-2"></div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
