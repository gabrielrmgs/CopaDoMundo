import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Copa do Mundo",
  description: "Site para formação de partidas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="icon" href="logormg2.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );

}