"use client"

import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const handleProductClick = () => {
    document.getElementById("produtos")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const handleAboutClick = () => {
    document.getElementById("sobre")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/minilogo1.jpg"
                alt="Almeida Adesivo Resinado Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-foreground">ALMEIDA ADESIVO RESINADO</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-balance">
              Líderes em adesivos náuticos resinados para jet ski. Qualidade premium, durabilidade excepcional e designs
              exclusivos há mais de 5 anos no mercado brasileiro.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/adesivo.resinado.almeida/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/5512997000423?text=Ol%C3%A1%2C%20Tenho%20interesse%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@adesivo.resinado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.86-4.43V7.83a8.24 8.24 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.26z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleProductClick}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Kit Nome Resinado
                </button>
              </li>
              <li>
                <button
                  onClick={handleProductClick}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Kit Numeração Resinado
                </button>
              </li>
              <li>
                <button
                  onClick={handleProductClick}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Kit Nome + Numeração Resinado
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleAboutClick}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/5512997000423?text=Ol%C3%A1%2C%20Tenho%20interesse%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Almeida Adesivo Resinado. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
