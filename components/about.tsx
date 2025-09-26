import { Button } from "@/components/ui/button"
import { Award, Users, Clock, MapPin } from "lucide-react"

export function About() {
  const stats = [
    { icon: Award, value: "5 +", label: "Anos no Mercado" },
    { icon: Users, value: "5000 +", label: "Clientes Satisfeitos" },
    { icon: Clock, value: "Até 72h", label: "Tempo de Entrega" },
    { icon: MapPin, value: "Todo", label: "Brasil" },
  ]

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Líderes em <span className="text-gradient">Adesivos Náuticos</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-balance">
              A Almeida Adesivo Resinado é referência no mercado brasileiro de personalização náutica há mais de 5 anos.
              Especializados em adesivos resinados de alta qualidade para jet skis, oferecemos produtos que combinam
              durabilidade excepcional com design exclusivo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Nossa tecnologia de resina UV garante proteção máxima contra os elementos marinhos, mantendo as cores
              vibrantes e o acabamento impecável por anos. Cada projeto é desenvolvido com atenção aos detalhes e paixão
              pela excelência.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Nossa História
              </Button>
            </div>
          </div>

          <div className="relative">
            <img src="/logoss.jpg" alt="Workshop Almeida Adesivos" className="rounded-lg shadow-2xl" />
            <div
            >
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
