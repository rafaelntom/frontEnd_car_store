import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
import DropDown from "../components/DropDown";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <header className="flex items-center justify-between p-4">
        <h1 className="font-bold text-heading-4 gradient-text">
          Motors <span className="text-heading-6 pl-1">shop</span>
        </h1>
        <DropDown />
      </header>
    </main>
  );
}
