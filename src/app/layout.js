import { Inter } from "next/font/google";
import "./globals.css";
import { head } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pencil Tech",
  description: "Getting Teachers the Resources they Need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-gray-900`}>
      {head}
      <body>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
