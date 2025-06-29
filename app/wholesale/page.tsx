import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Package, Truck, Shield, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const wholesaleProducts = [
  {
    id: 1,
    name: "AirPods Pro Max",
    description: "Auriculares inalámbricos premium con cancelación de ruido",
    retailPrice: 549.99,
    wholesalePrice: 450.0,
    minQuantity: 5,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    savings: 99.99,
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    description: "Auriculares con la mejor cancelación de ruido del mercado",
    retailPrice: 399.99,
    wholesalePrice: 320.0,
    minQuantity: 3,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    savings: 79.99,
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    description: "Auriculares inalámbricos con cancelación de ruido activa",
    retailPrice: 129.99,
    wholesalePrice: 95.0,
    minQuantity: 10,
    image: "/placeholder.svg?height=300&width=300",
    category: "Medio",
    savings: 34.99,
  },
  {
    id: 4,
    name: "Beats Studio Buds",
    description: "Auriculares true wireless con sonido potente",
    retailPrice: 179.99,
    wholesalePrice: 140.0,
    minQuantity: 8,
    image: "/placeholder.svg?height=300&width=300",
    category: "Deportivo",
    savings: 39.99,
  },
]

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
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
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Precios Mayoristas
                </h1>
              </div>
            </div>
            <Link href="/catalog">
              <Button className="bg-gradient-to-r from-green-600 to-blue-600">Ver Catálogo Completo</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Precios Especiales para Mayoristas
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Obtén los mejores precios en productos de audio premium. Ideal para revendedores, distribuidores y empresas
            que buscan equipar a sus equipos.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Pedidos Mínimos</h3>
              <p className="text-gray-600 text-sm">Cantidades mínimas accesibles para todos los productos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Envío Gratuito</h3>
              <p className="text-gray-600 text-sm">Envío sin costo en pedidos mayoristas superiores a $500</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Garantía Extendida</h3>
              <p className="text-gray-600 text-sm">Garantía extendida y soporte técnico especializado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Products */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Productos con Descuento Mayorista</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wholesaleProducts.map((product) => (
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
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-green-600 to-blue-600">
                      Ahorra ${product.savings}
                    </Badge>
                    <Badge className="absolute top-2 left-2 bg-white text-gray-900">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-1">{product.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Precio Retail:</span>
                      <span className="text-sm line-through text-gray-500">${product.retailPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Precio Mayorista:</span>
                      <span className="text-lg font-bold text-green-600">${product.wholesalePrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Cantidad mínima:</span>
                      <Badge variant="outline">{product.minQuantity} unidades</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardContent className="p-4 pt-0">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600">Solicitar Cotización</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-center mb-8">Beneficios Exclusivos para Mayoristas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Descuentos Progresivos</h4>
                <p className="text-sm text-gray-600">Mayores descuentos por volumen de compra</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Logística Especializada</h4>
                <p className="text-sm text-gray-600">Envíos rápidos y seguros a nivel nacional</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Soporte Técnico</h4>
                <p className="text-sm text-gray-600">Asesoría especializada y soporte post-venta</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Atención Personalizada</h4>
                <p className="text-sm text-gray-600">Ejecutivo de cuenta dedicado para tu negocio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">¿Listo para ser nuestro socio mayorista?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para obtener una cotización personalizada y descubrir todos los beneficios que tenemos para tu
            negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 text-lg px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Contactar Ahora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Descargar Catálogo PDF
            </Button>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">mayoristas@auristore.com</p>
            </div>
            <div>
              <p className="font-semibold">Teléfono</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
