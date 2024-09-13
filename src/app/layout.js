import { Inter } from "next/font/google";
import "./globals.css";
import { head } from "@/utils";
import Link from "next/link";

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
        <div className="flex justify-left z-[1000] p-4">
            <img
              src="/images/pencil-icon-2.f7c1ee4b.svg"
              id="pencil-icon"
              alt="A cartoon pencil"
              className="h-10 w-10 pr-3 relative z-[1000]"
            />
            <div className="text-left">
              {/* Doubled the font size */}
              <h1 className="text-black font-bold text-xl relative z-[1000]">
                PENCIL BOX
              </h1>{" "}
              {/* Doubled the font size */}
            </div>
        </div>
          </Link>
        <div>
          <div className="blob-1"></div>
          <div className="blob-2"></div>
          <div className="dotted-line-1"></div>
          <div className="dotted-line-2"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
