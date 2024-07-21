"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
/***
 * Setting the DarkMode we need the mage the state with mounted to update the dark and light mode with useffect when the page is loaded completely.
 */

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  );
}
