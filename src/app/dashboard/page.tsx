import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <h1 className="text-center text-orang-400">Dashboard page here</h1>
      <Link href="/">
        <button className="w-full p-2 rounded-lg border-2">Go back!</button>
      </Link>
    </div>
  );
}
