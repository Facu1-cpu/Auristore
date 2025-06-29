import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, ShoppingCart, Star, Zap } from 'lucide-react'
import Image from "next/image"

// Datos de ejemplo - en producción estos vendrían de una base de datos
const featuredProducts = [
  {
    id: 1,
    name: "AirPods Pro Max",
    description: "Auriculares inalámbricos premium con cancelación de ruido",
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
    description: "Auriculares con la mejor cancelación de ruido del mercado",
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
    description: "Auriculares inalámbricos con cancelación de ruido activa",
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
    description: "Auriculares true wireless con sonido potente",
    price: 179.99,
    wholesalePrice: 140.0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Deportivo",
    inStock: true,
    rating: 4.6,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Auristore
                </h1>
                <p className="text-sm text-gray-600">Tecnología de Audio Premium</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/catalog">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Ver Catálogo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bienvenido a Auristore
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tu destino para auriculares y productos de audio de la más alta calidad. Ofrecemos precios mayoristas y
              minoristas para todos nuestros clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-lg px-8 py-3">
                  <Zap className="h-5 w-5 mr-2" />
                  Explorar Productos
                </Button>
              </Link>
              <Link href="/wholesale">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                  Precios Mayoristas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">¿Por qué elegir Auristore?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Productos Premium</h4>
              <p className="text-gray-600">Solo trabajamos con las mejores marcas de audio del mercado</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Precios Competitivos</h4>
              <p className="text-gray-600">Ofrecemos los mejores precios tanto al por mayor como al detalle</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Calidad Garantizada</h4>
              <p className="text-gray-600">Todos nuestros productos cuentan con garantía oficial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Productos Destacados</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
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
                        <p className="text-lg font-bold text-blue-600">${product.price}</p>
                        <p className="text-sm text-gray-500">Mayorista: ${product.wholesalePrice}</p>
                      </div>
                      <Badge variant={product.inStock ? "default" : "secondary"}>
                        {product.inStock ? "En Stock" : "Agotado"}
                      </Badge>
                    </div>
                    <Link href={`/product/${product.id}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Ver Detalles</Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/catalog">
              <Button variant="outline" size="lg">
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">Auristore</h4>
              </div>
              <p className="text-gray-400">Tu tienda especializada en productos de audio premium.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Productos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Auriculares Premium</li>
                <li>Auriculares Deportivos</li>
                <li>Auriculares Gaming</li>
                <li>Accesorios</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Venta Mayorista</li>
                <li>Venta Minorista</li>
                <li>Garantía Oficial</li>
                <li>Soporte Técnico</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@auristore.com</li>
                <li>Teléfono: +1 (555) 123-4567</li>
                <li>WhatsApp: +1 (555) 987-6543</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Auristore. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
