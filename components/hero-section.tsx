import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Poleras que Cuentan Tu Historia
          </span>
        </h1>

        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Diseños únicos y personalizados que reflejan tu estilo y personalidad
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
        >
          Explora Colecciones →
        </Button>
      </div>
    </section>
  )
}
