"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Headphones, Search, Filter, Star, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const allProducts = [
  {
    id: 1,
    name: "AirPods Pro Max",
    description: "Auriculares inalámbricos premium con cancelación de ruido activa y audio espacial",
    price: 549.99,
    wholesalePrice: 450.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    description: "Auriculares con la mejor cancelación de ruido del mercado y 30 horas de batería",
    price: 399.99,
    wholesalePrice: 320.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    inStock: true,
    rating: 4.9,
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    description: "Auriculares inalámbricos con cancelación de ruido activa y sonido JBL Pure Bass",
    price: 129.99,
    wholesalePrice: 95.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Medio",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Beats Studio Buds",
    description: "Auriculares true wireless con sonido potente y cancelación activa de ruido",
    price: 179.99,
    wholesalePrice: 140.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Deportivo",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Sennheiser HD 660S",
    description: "Auriculares de referencia para audiófilos con drivers dinámicos de alta calidad",
    price: 499.99,
    wholesalePrice: 400.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Razer BlackShark V2",
    description: "Auriculares gaming con sonido envolvente 7.1 y micrófono desmontable",
    price: 99.99,
    wholesalePrice: 75.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Gaming",
    inStock: false,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Bose QuietComfort 45",
    description: "Auriculares con cancelación de ruido líder en la industria y comodidad excepcional",
    price: 329.99,
    wholesalePrice: 260.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 8,
    name: "Audio-Technica ATH-M50x",
    description: "Auriculares de estudio profesionales con sonido balanceado y construcción robusta",
    price: 149.99,
    wholesalePrice: 115.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Medio",
    inStock: true,
    rating: 4.8,
  },
]

export default function CatalogPage() {
  const [products, setProducts] = useState(allProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [showWholesale, setShowWholesale] = useState(false)

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const categories = ["all", ...Array.from(new Set(allProducts.map((p) => p.category)))]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Inicio
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Catálogo Auristore
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={showWholesale ? "default" : "outline"}
                size="sm"
                onClick={() => setShowWholesale(!showWholesale)}
              >
                {showWholesale ? "Precios Mayoristas" : "Ver Precios Mayoristas"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  {categories.slice(1).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nombre</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="rating">Mejor Valorados</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600">
                    {product.category}
                  </Badge>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        Agotado
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 line-clamp-1">{product.name}</CardTitle>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      {showWholesale ? (
                        <>
                          <p className="text-lg font-bold text-green-600">${product.wholesalePrice}</p>
                          <p className="text-sm text-gray-500 line-through">${product.price}</p>
                        </>
                      ) : (
                        <>
                          <p className="text-lg font-bold text-blue-600">${product.price}</p>
                          <p className="text-sm text-gray-500">Mayorista: ${product.wholesalePrice}</p>
                        </>
                      )}
                    </div>
                    <Badge variant={product.inStock ? "default" : "secondary"}>
                      {product.inStock ? "En Stock" : "Agotado"}
                    </Badge>
                  </div>
                  <Link href={`/product/${product.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600" disabled={!product.inStock}>
                      {product.inStock ? "Ver Detalles" : "No Disponible"}
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
            >
              Limpiar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
