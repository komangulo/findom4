import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import financieraPortrait from "@/assets/sobre-mi-portrait.jpg"
import financieraLogo from "@/assets/gothic-logo.png"

const Index = () => {
  // El componente AgeWarning ahora maneja su propia lógica de visibilidad
  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <Sidebar />
      
      {/* Main Content */}
      <main className="ml-72 min-h-screen w-[calc(100%-18rem)]">
        {/* Header with Logo */}
        <header className="relative bg-gradient-dark border-b border-gothic-gold py-12 w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Main Portrait */}
              <div className="w-full md:w-1/2">
                <img 
                  src={financieraPortrait} 
                  alt="Dominación Financiera Profesional"
                  className="h-80 w-auto object-cover rounded-lg gothic-border shadow-2xl mx-auto"
                />
              </div>
              
              {/* Logo and Title */}
              <div className="w-full md:w-1/2 text-center">
                <img 
                  src={financieraLogo} 
                  alt="Dominación Financiera Logo"
                  className="h-32 w-auto mx-auto mb-4"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gothic-gold gothic-heading mb-2">
                  DOMINACIÓN FINANCIERA
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gold-400 gothic-heading mb-2">
                  REINA RUBY
                </h2>
                <p className="text-xl text-muted-foreground italic">
                  Tu sumisión financiera comienza aquí
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Sections */}
        <div className="px-8 py-12 max-w-4xl mx-auto text-center">
          <section id="inicio" className="mb-12">
            <div className="prose prose-invert max-w-none space-y-6 mx-auto">
              <h2 className="text-3xl font-bold text-gothic-gold gothic-heading mb-8">
                Inicio
              </h2>
              
              <div className="text-lg leading-relaxed space-y-6 text-foreground max-w-3xl mx-auto">
                <p className="text-xl font-semibold text-gothic-gold">
                  La dominación financiera es más que un juego de poder: es una forma de vida donde el placer y el control se entrelazan en cada transacción.
                </p>
                
                <p>
                  En este espacio sagrado del poder financiero, los roles están claramente definidos. Tú eres el que entrega el control, y yo, la que lo ejerce. Cada tributo que ofreces fortalece nuestro vínculo y refuerza la dinámica de sumisión que tanto anhelas.
                </p>
                
                <p>
                  La verdadera sumisión financiera va más allá de simples transferencias de dinero. Es una entrega total de confianza, donde cada céntimo que ofreces es un símbolo de tu devoción. A cambio, recibes la satisfacción única de saber que estás cumpliendo tu propósito: servir y complacer.
                </p>
                
                <p>
                  No todos están hechos para este camino. La sumisión financiera requiere fortaleza, dedicación y, sobre todo, el coraje de reconocer tu verdadero lugar. Aquí no hay juicios, solo la cruda verdad de la dinámica que ambos anhelamos.
                </p>
                
                <p className="text-xl font-bold text-gothic-gold text-center py-6 border-t border-b border-gothic-gold">
                  La pregunta no es si estás listo para pagar, sino si eres digno de que acepte tu tributo.
                </p>
              </div>
            </div>
          </section>

          {/* Keywords Section */}
          <section className="mb-12 p-6 bg-gothic-gray rounded-lg border border-gothic-gold text-center">
                <h3 className="text-2xl font-bold text-gothic-gold gothic-heading mb-4">
                  Servicios Exclusivos
                </h3>
                <div className="text-sm text-muted-foreground space-y-2 max-w-3xl mx-auto">
                  <p>
                    <strong className="text-gothic-gold">TRIBUTOS PERSONALIZADOS, CONTROL FINANCIERO TOTAL, SESIONES DE SUMISIÓN, ENTRENAMIENTO DE SUMISOS, TRIBUTOS RECURRENTES, OFRENDAS ESPECIALES, DOMINACIÓN A DISTANCIA, CONTROL DE GASTOS, TRIBUTOS SORPRESA, SESIONES VIP</strong>, Dominación Financiera, Findom, Financial Domination, Paypig Training, Money Slave, Cash Slave, Financial Submission, Pay Tribute, Money Fetish, Financial Control, Paypig Lifestyle, Tribute to Domme, FinDom World, Money Slave Training, Financial Domination Training, Paypig for Mistress, Financial Domination Session, Findomme, Paypig Wanted, Financial Domination 101, Tribute to Goddess.
                  </p>
                </div>
          </section>

          {/* Location Section */}
          <section className="mb-12 p-6 bg-gothic-black rounded-lg border border-gothic-gold text-center">
                <h3 className="text-2xl font-bold text-gothic-gold gothic-heading mb-4">
                  Alcance Global
                </h3>
                <p className="text-lg text-foreground mb-4">
                  <strong className="text-gothic-gold">La distancia no es un límite para tu sumisión financiera.</strong>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ofrezco mis servicios de dominación financiera a sumisos en todo el mundo. A través de plataformas seguras y discretas, puedo guiarte en tu viaje de sumisión financiera sin importar tu ubicación. Ya sea que estés en Madrid, Barcelona, Ciudad de México, Buenos Aires, Bogotá, Santiago, Lima, o en cualquier otra parte del mundo, tu devoción financiera siempre será bienvenida. La tecnología nos permite mantener nuestra dinámica de poder sin fronteras.
                </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Index