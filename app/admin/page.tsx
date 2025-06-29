"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Trash2, Edit, Plus, Upload, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  name: string
  description: string
  price: number
  wholesalePrice: number
  image: string
  category: string
  inStock: boolean
  rating: number
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([
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
  ])

  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    description: "",
    price: 0,
    wholesalePrice: 0,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    inStock: true,
    rating: 5,
  })

  const handleAddProduct = () => {
    const product: Product = {
      ...newProduct,
      id: Math.max(...products.map((p) => p.id), 0) + 1,
    }
    setProducts([...products, product])
    setNewProduct({
      name: "",
      description: "",
      price: 0,
      wholesalePrice: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Premium",
      inStock: true,
      rating: 5,
    })
    setIsDialogOpen(false)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setIsDialogOpen(true)
  }

  const handleUpdateProduct = () => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)))
      setEditingProduct(null)
      setIsDialogOpen(false)
    }
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const currentProduct = editingProduct || newProduct

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
                  Volver a la tienda
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                  onClick={() => {
                    setEditingProduct(null)
                    setNewProduct({
                      name: "",
                      description: "",
                      price: 0,
                      wholesalePrice: 0,
                      image: "/placeholder.svg?height=300&width=300",
                      category: "Premium",
                      inStock: true,
                      rating: 5,
                    })
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Producto
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingProduct ? "Editar Producto" : "Agregar Nuevo Producto"}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre del Producto</Label>
                      <Input
                        id="name"
                        value={currentProduct.name}
                        onChange={(e) => {
                          if (editingProduct) {
                            setEditingProduct({ ...editingProduct, name: e.target.value })
                          } else {
                            setNewProduct({ ...newProduct, name: e.target.value })
                          }
                        }}
                        placeholder="Ej: AirPods Pro Max"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Categoría</Label>
                      <Select
                        value={currentProduct.category}
                        onValueChange={(value) => {
                          if (editingProduct) {
                            setEditingProduct({ ...editingProduct, category: value })
                          } else {
                            setNewProduct({ ...newProduct, category: value })
                          }
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Premium">Premium</SelectItem>
                          <SelectItem value="Medio">Medio</SelectItem>
                          <SelectItem value="Deportivo">Deportivo</SelectItem>
                          <SelectItem value="Gaming">Gaming</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      value={currentProduct.description}
                      onChange={(e) => {
                        if (editingProduct) {
                          setEditingProduct({ ...editingProduct, description: e.target.value })
                        } else {
                          setNewProduct({ ...newProduct, description: e.target.value })
                        }
                      }}
                      placeholder="Descripción detallada del producto"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Precio Minorista ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={currentProduct.price}
                        onChange={(e) => {
                          if (editingProduct) {
                            setEditingProduct({ ...editingProduct, price: Number.parseFloat(e.target.value) || 0 })
                          } else {
                            setNewProduct({ ...newProduct, price: Number.parseFloat(e.target.value) || 0 })
                          }
                        }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="wholesalePrice">Precio Mayorista ($)</Label>
                      <Input
                        id="wholesalePrice"
                        type="number"
                        step="0.01"
                        value={currentProduct.wholesalePrice}
                        onChange={(e) => {
                          if (editingProduct) {
                            setEditingProduct({
                              ...editingProduct,
                              wholesalePrice: Number.parseFloat(e.target.value) || 0,
                            })
                          } else {
                            setNewProduct({ ...newProduct, wholesalePrice: Number.parseFloat(e.target.value) || 0 })
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="inStock"
                      checked={currentProduct.inStock}
                      onCheckedChange={(checked) => {
                        if (editingProduct) {
                          setEditingProduct({ ...editingProduct, inStock: checked })
                        } else {
                          setNewProduct({ ...newProduct, inStock: checked })
                        }
                      }}
                    />
                    <Label htmlFor="inStock">Producto en stock</Label>
                  </div>

                  <div>
                    <Label>Imagen del Producto</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Image
                        src={currentProduct.image || "/placeholder.svg"}
                        alt="Preview"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Subir Imagen
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Formatos soportados: JPG, PNG, WebP (máx. 5MB)</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button
                    onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                    className="bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    {editingProduct ? "Actualizar" : "Agregar"} Producto
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">Gestión de Productos</TabsTrigger>
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Productos Actuales ({products.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {products.map((product) => (
                      <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-sm text-gray-600 line-clamp-1">{product.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline">{product.category}</Badge>
                            <span className="text-sm font-medium">
                              Minorista: ${product.price} | Mayorista: ${product.wholesalePrice}
                            </span>
                            <Badge variant={product.inStock ? "default" : "secondary"}>
                              {product.inStock ? "En Stock" : "Agotado"}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleEditProduct(product)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aquí podrás gestionar los pedidos de tus clientes. Esta funcionalidad se puede expandir para incluir
                  seguimiento de pedidos, estados de envío, y más.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de la Tienda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="storeName">Nombre de la Tienda</Label>
                  <Input id="storeName" defaultValue="Auristore" />
                </div>
                <div>
                  <Label htmlFor="storeDescription">Descripción</Label>
                  <Textarea
                    id="storeDescription"
                    defaultValue="Tu tienda especializada en productos de audio premium."
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Email de Contacto</Label>
                  <Input id="contactEmail" defaultValue="info@auristore.com" />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Teléfono</Label>
                  <Input id="contactPhone" defaultValue="+1 (555) 123-4567" />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Guardar Configuración</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
