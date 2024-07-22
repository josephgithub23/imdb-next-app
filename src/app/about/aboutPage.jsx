import React from "react";
import { Suspense } from "react";
import About from "./page";

export default function aboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
}
