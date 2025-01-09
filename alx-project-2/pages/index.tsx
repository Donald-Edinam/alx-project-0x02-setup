import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      
      <div className="flex flex-col items-center justify-center gap-4">
        <h1
        className="text-4xl font-bold text-center text-gray-800"
        >This Repo is configured with Next.JS to help you understand how it works</h1>
        <button 
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={() => alert("Hello, Next.js!")}
        >Let's start</button>
      </div>
    </div>
  );
}
