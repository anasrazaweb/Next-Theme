"use client"
import { ThemeProvider } from "next-themes";
import Hero from "./Component/Hero";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Hero />
    </ThemeProvider>
  )
}
