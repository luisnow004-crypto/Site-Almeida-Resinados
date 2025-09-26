"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Droplets, Palette, Zap, Instagram } from "lucide-react"

export function Products() {
  const products = [
    {
      title: "Kit Nome Resinado",
      description: "Adesivos para Carenagem, Inclui Instrução e Kit de Limpeza.",
      price: "R$ 150",
      image: "/nomeresinado.jpg",
      features: ["Resina Própria Náutica", "Adepto á Norman", "Fácil Aplicação"],
      whatsappLink:
        "https://wa.me/5512997000423?text=Ol%C3%A1%2C%20Gostaria%20de%20adquirir%20um%20Kit%20de%20Nome%20para%20minha%20embarca%C3%A7%C3%A3o%21",
    },
    {
      title: "Kit Numeração Resinado",
      description: "Adesivos para Carenagem, Inclui Instrução e Kit de Limpeza.",
      price: "R$ 120",
      image: "/kitnumero.jpg",
      features: ["Resina Própria Náutica", "Adepto á Norman", "Fácil Aplicação"],
      whatsappLink:
        "https://wa.me/5512997000423?text=Ol%C3%A1%2C%20Gostaria%20de%20adquirir%20um%20Kit%20de%20Numera%C3%A7%C3%A3o%20para%20minha%20embarca%C3%A7%C3%A3o%21",
    },
    {
      title: "Kit Nome + Numeração Resinado",
      description: "Kit Nome e Número Para Carenagem, Inclui Instrução e Kit de Limpeza.",
      price: "R$ 250",
      image: "/Lampiao.jpg",
      features: ["Resina Própria Náutica", "Adepto á Norman", "Fácil Aplicação"],
      whatsappLink:
        "https://wa.me/5512997000423?text=Ol%C3%A1%2C%20Gostaria%20de%20adquirir%20um%20Kit%20de%20Nome%20%2B%20Numera%C3%A7%C3%A3o%20para%20minha%20embarca%C3%A7%C3%A3o%21",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Resistência Máxima",
      description: "Proteção contra sal, UV",
    },
    {
      icon: Droplets,
      title: "100% Impermeável",
      description: "Tecnologia resinada à prova d'água",
    },
    {
      icon: Palette,
      title: "Cores Vibrantes",
      description: "Pigmentos de alta qualidade que não desbotam",
    },
    {
      icon: Zap,
      title: "Aplicação Rápida",
      description: "Instalação em minutos, Sem deixar bolhas",
    },
  ]

  return (
    <section id="produtos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Escolha entre nossos kits profissionais e tenha mais de 80 modelos de Fontes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary transition-colors group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground mb-4 text-balance">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => window.open(product.whatsappLink, "_blank")}
                  >
                    Enviar Mensagem
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-4"
            onClick={() => window.open("https://www.instagram.com/adesivo.resinado.almeida/", "_blank")}
          >
            <Instagram className="mr-3 h-6 w-6" />
            Veja mais fotos em Nosso Instagram
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-balance">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
