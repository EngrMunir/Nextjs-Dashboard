import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uttor Pomra High School",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* left side */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 mt-20">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/logo.png" alt="logo" width={32} height={32}/>
        <span className="hidden lg:block font-bold">Uttor Pomra High School</span>
      </Link>
      <Menu />
    </div>
    {/* right side */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
      <Navbar/>
      {children}
    </div>
  </div>
}