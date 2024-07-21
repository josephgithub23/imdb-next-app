import React from "react";

/**
 * Adding loading effect to the app. see loading.io
 *
 */
export default function loading() {
  return (
    <div className=" flex justify-center mt-16">
      <img className="h-52" src="spinner.svg" alt="loading" />
    </div>
  );
}
