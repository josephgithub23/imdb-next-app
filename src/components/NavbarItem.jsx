"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

/**
 * Remember whenever you are making use of hook you need to initialize the 'use client' at the top of the file.
 *We import useSearchparams to navigate through params to get the genre from the url
 *
 */

export default function NavbarItem({ title, params }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    /*
     * Dynamic styling for the link params trending and top rated
     *
     */

    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === params
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        } `}
        href={`/?genre=${params}`}
      >
        {title}
      </Link>
    </div>
  );
}
