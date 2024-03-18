import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 className="text-center text-orang-400">Home Page</h1>
      <Link href="/dashboard">
        <button className="w-full p-2 rounded-lg border-2">Click me!</button>
      </Link>
    </main>
  );
}
