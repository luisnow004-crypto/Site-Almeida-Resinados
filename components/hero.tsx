"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-gradient"
        style={{
          backgroundImage: `url('/325.jpg')`,
          filter: "blur(2px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm text-white">Líder no Mercado Brasileiro</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span
              className="text-white"
              style={{ textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" }}
            >
              ADESIVO
            </span>
            <br />
            <span
              className="text-white"
              style={{ textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" }}
            >
              RESINADO
            </span>
            <br />
            <span
              className="text-white"
              style={{ textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" }}
            >
              NÁUTICO
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-balance drop-shadow-[0_0_12px_black]">
            Transforme seu jet ski com nossos adesivos resinados de alta qualidade. Resistência máxima, design exclusivo
            e acabamento profissional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
              onClick={() => {
                document.getElementById("produtos")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Ver Catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent"
              onClick={() => {
                document.getElementById("contato")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Solicitar Orçamento
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div
                className="text-3xl font-bold text-green-500 mb-2"
                style={{ textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" }}
              >
                5+
              </div>
              <div
                className="text-sm text-white"
                style={{ textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
              >
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-bold text-green-500 mb-2"
                style={{ textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" }}
              >
                5000+
              </div>
              <div
                className="text-sm text-white"
                style={{ textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
              >
                Jet Skis Personalizados
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-bold text-green-500 mb-2"
                style={{ textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" }}
              >
                100%
              </div>
              <div
                className="text-sm text-white"
                style={{ textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000" }}
              >
                Satisfação Garantida
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
