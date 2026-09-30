import NextJS from "./icons/NextJS.astro"
import Tailwind from "./icons/Tailwind.astro"

export interface Tag {
  name: string
  class: string
  icon: any
}

const TAGS: Record<string, Tag> = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
}

// Tags without a brand entry above fall back to a neutral mono pill
const fallbackTag = (name: string): Tag => ({
  name,
  class:
    "border border-black/20 dark:border-white/25 text-gray-800 dark:text-white/80 font-mono",
  icon: null,
})

export const getTag = (key: string): Tag => TAGS[key] ?? fallbackTag(key)
