import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import { Card } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom';

const DominacionDistancia = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <Sidebar />
      
      {/* Main Content */}
      <main className="ml-72 min-h-screen w-[calc(100%-18rem)]">
        {/* Header */}
        <header className="relative bg-gradient-dark border-b border-gothic-gold py-12 w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gothic-gold gothic-heading mb-4">
                  DOMINACIÓN FINANCIERA A DISTANCIA
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  Tu sumisión financiera no conoce fronteras
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-12 max-w-6xl mx-auto text-center">
          <Card className="p-8 bg-gothic-black border-gothic-gold">
            <div className="prose prose-invert max-w-none space-y-8">
              <h2 className="text-3xl font-bold text-gothic-gold gothic-heading">
                Sumisión Financiera Global
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  En la era digital, la sumisión financiera ha alcanzado nuevas dimensiones. Ya no hay límites geográficos para aquellos que desean entregar el control de sus finanzas. 
                  Nuestros servicios de dominación financiera a distancia te permiten experimentar la emoción de la entrega total, sin importar dónde te encuentres.
                </p>

                <p>
                  Con años de experiencia en el arte de la dominación financiera, ofrecemos una experiencia personalizada que satisface tus necesidades más profundas de sumisión. 
                  Utilizamos tecnología segura para garantizar una comunicación fluida y discreta, permitiéndote disfrutar de la dinámica de poder sin restricciones.
                </p>

                <p>
                  Nuestro enfoque combina la psicología del poder con un profundo entendimiento de la dinámica de sumisión, 
                  creando experiencias únicas que van más allá de las transacciones financieras convencionales.
                </p>

                <p>
                  La distancia ya no es una excusa para no experimentar el placer de la entrega financiera. 
                  Nuestros sumisos en todo el mundo pueden dar fe de la intensidad y la satisfacción que se logra a través de nuestros servicios remotos.
                </p>

                <p className="text-xl italic text-gothic-gold font-medium">
                  "La verdadera sumisión financiera no conoce fronteras. Tu deseo de entrega merece ser satisfecho, sin importar dónde te encuentres. Permíteme guiarte en este viaje de entrega total."
                </p>

                <p>
                  Nuestras sesiones están diseñadas para ofrecer la misma intensidad y conexión que un encuentro presencial, con la ventaja añadida de la discreción absoluta y la flexibilidad que ofrece la tecnología moderna.
                </p>

                <p className="text-xl font-semibold text-gothic-gold">
                  La distancia ya no es un obstáculo para experimentar la emoción de la sumisión financiera. Dondequiera que estés, tu viaje hacia la entrega total puede comenzar hoy.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gothic-gold">
                <h3 className="text-2xl font-bold text-gothic-gold gothic-heading mb-6">
                  ¿Listo para entregar el control?
                </h3>
                <p className="text-lg mb-8">
                  Envía tu ofrenda inicial y comienza tu viaje de sumisión financiera. La distancia ya no es un obstáculo para experimentar el placer de la entrega total.
                </p>
                <button 
                  onClick={() => navigate('/lista-deseos')}
                  className="inline-block bg-gothic-gold text-gothic-black hover:bg-gold-400 font-bold py-3 px-8 rounded transition-colors"
                >
                  INICIAR SUMISIÓN
                </button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default DominacionDistancia
