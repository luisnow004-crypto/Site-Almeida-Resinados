"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleContactClick = () => {
    window.open(
      "https://wa.me/5512997000423?text=Ol%C3%A1%2C%20Tenho%20interesse%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
      "_blank",
    )
  }

  const handleCatalogClick = () => {
    document.getElementById("produtos")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const handleOrcamentoClick = () => {
    document.getElementById("contato")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const handleTrackingClick = () => {
    window.open("https://rastreamento.correios.com.br/app/index.php", "_blank")
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/minilogo1.jpg" alt="Almeida Adesivos" className="h-8 w-8 rounded object-cover" />
            <span className="text-xl font-bold text-foreground">ALMEIDA ADESIVO RESINADO</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <button onClick={handleContactClick} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleCatalogClick}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Catálogo
            </Button>
            <Button
              onClick={handleTrackingClick}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Rastreie seu Pedido
            </Button>
            <Button onClick={handleOrcamentoClick} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Orçamento
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <button
                onClick={handleContactClick}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contato
              </button>
              <button
                onClick={handleTrackingClick}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Rastreie seu Pedido
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  onClick={handleCatalogClick}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Catálogo
                </Button>
                <Button
                  onClick={handleTrackingClick}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Rastreie seu Pedido
                </Button>
                <Button
                  onClick={handleOrcamentoClick}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
