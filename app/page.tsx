import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="flex bg-red-500">Hello Audiofy</h1>
    </div>
  );
}
