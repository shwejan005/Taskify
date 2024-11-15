import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css"; // Ensure global styles are loaded

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col bg-gray-100">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4 overflow-y-auto scrollbar-hide">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
