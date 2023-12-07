import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/provider/theme-provider";

const Font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone",
  description: "clone of Discord",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={Font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark" 
            enableSystem={true}
            storageKey="theme"
            >

            {children}

            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
