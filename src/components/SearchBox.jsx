"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 h-14"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className=" text-amber-600 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
