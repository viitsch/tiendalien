import ProductGrid from "@/components/product-grid"
import HeroSection from "@/components/hero-section"
import SearchBar from "@/components/search-bar"
import CategoryFilter from "@/components/category-filter"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Nuestras Colecciones</h2>
            <p className="text-muted-foreground">Diseños únicos para expresar tu estilo</p>
          </div>
          <SearchBar />
        </div>

        <CategoryFilter />
        <ProductGrid />
      </section>
    </main>
  )
}
