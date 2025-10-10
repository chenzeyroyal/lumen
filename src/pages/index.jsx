import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import Team from "@/sections/Team"

export const metadata = {
  title: "Home",
}

export default function () {
  return (
    <>
      <Hero />
      <Features />
      <Team />
    </>
  )
}
