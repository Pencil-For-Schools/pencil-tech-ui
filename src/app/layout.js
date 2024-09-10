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
    <html lang="en">
      {head}
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
