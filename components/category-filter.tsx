"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "Todos" },
  { id: "abstract", name: "Arte Abstracto" },
  { id: "quotes", name: "Frases Inspiradoras" },
  { id: "nature", name: "Naturaleza" },
  { id: "urban", name: "Urbano" },
  { id: "minimalist", name: "Minimalista" },
]

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory(category.id)}
          className={`rounded-full transition-all ${
            activeCategory === category.id ? "bg-gradient-to-r from-cyan-500 to-purple-600" : "hover:text-cyan-600"
          }`}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
