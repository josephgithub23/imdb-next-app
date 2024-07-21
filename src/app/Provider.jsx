"use client";
import { ThemeProvider } from "next-themes";
/**
 *
 * Here we create the theme provider, and adding the defaultTheme and  attributes. WHile we add the darkMode attribute in the tailwind css root file.
 *
 */

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700  min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
