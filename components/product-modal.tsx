"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Product {
  id: number
  name: string
  price: number
  discount: number
  image: string
  category: string
}

interface ProductModalProps {
  product: Product
  onClose: () => void
  onAddToCart: () => void
}

const colors = [
  { id: "black", name: "Negro", value: "#000000" },
  { id: "white", name: "Blanco", value: "#ffffff" },
  { id: "gray", name: "Gris", value: "#808080" },
  { id: "blue", name: "Azul", value: "#0000ff" },
  { id: "red", name: "Rojo", value: "#ff0000" },
]

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("M")

  const finalPrice =
    product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price.toFixed(2)

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{product.name}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-md">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Color</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <div key={color.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={color.id} id={`color-${color.id}`} className="sr-only" />
                    <Label
                      htmlFor={`color-${color.id}`}
                      className={`h-8 w-8 rounded-full cursor-pointer flex items-center justify-center border-2 ${
                        selectedColor === color.id ? "border-cyan-500" : "border-transparent"
                      }`}
                    >
                      <span className="h-6 w-6 rounded-full" style={{ backgroundColor: color.value }} />
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Talla</h3>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una talla" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Precio</h3>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-cyan-600">${finalPrice}</span>
                {product.discount > 0 && (
                  <span className="ml-2 text-sm line-through text-muted-foreground">${product.price.toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={onAddToCart}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
          >
            Añadir al Carrito
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
