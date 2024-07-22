"use client";
import { useEffect } from "react";

/**
 * ErrorHandling file in the app folder.
 * this is going to take a click event so we declare a use client at the top
 * We pass two pros the error and the reset. Reset means to try again.
 */

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1> Something went wrong! Please try again</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
