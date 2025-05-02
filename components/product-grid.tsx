"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProductModal from "./product-modal"

// Sample product data
const products = [
  {
    id: 1,
    name: "Aurora Digital",
    price: 24.99,
    discount: 20,
    image: "/images/product-1.jpg",
    category: "abstract",
  },
  {
    id: 2,
    name: "Urban Vibes",
    price: 29.99,
    discount: 0,
    image: "/images/product-2.jpg",
    category: "urban",
  },
  {
    id: 3,
    name: "Neon Dreams",
    price: 27.99,
    discount: 15,
    image: "/images/product-3.jpg",
    category: "abstract",
  },
  {
    id: 4,
    name: "Mountain Echo",
    price: 24.99,
    discount: 0,
    image: "/images/product-4.jpg",
    category: "nature",
  },
  {
    id: 5,
    name: "Sé Imparable",
    price: 22.99,
    discount: 0,
    image: "/images/product-5.jpg",
    category: "quotes",
  },
  {
    id: 6,
    name: "Minimal Lines",
    price: 26.99,
    discount: 10,
    image: "/images/product-6.jpg",
    category: "minimalist",
  },
]

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [cartItems, setCartItems] = useState<number>(0)

  const handleOpenModal = (productId: number) => {
    setSelectedProduct(productId)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  const handleAddToCart = () => {
    setCartItems((prev) => prev + 1)
    handleCloseModal()
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">-{product.discount}% HOY</Badge>
              )}
            </div>

            <CardContent className="pt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-1">
                {product.discount > 0 ? (
                  <>
                    <span className="text-xl font-bold text-cyan-600">
                      ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                    </span>
                    <span className="ml-2 text-sm line-through text-muted-foreground">${product.price.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-xl font-bold text-cyan-600">${product.price.toFixed(2)}</span>
                )}
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Button
                onClick={() => handleOpenModal(product.id)}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                Personalizar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Floating cart button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full h-16 w-16 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {cartItems}
            </span>
          )}
        </Button>
      </div>

      {/* Product customization modal */}
      {selectedProduct !== null && (
        <ProductModal
          product={products.find((p) => p.id === selectedProduct)!}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  )
}
