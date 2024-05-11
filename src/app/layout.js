import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alafajar Portfolio",
  description: "My first portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} /* suppressHydrationWarning={true} */>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
