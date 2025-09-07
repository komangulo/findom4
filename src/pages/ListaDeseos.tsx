import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ListaDeseos() {
  const [showCrypto, setShowCrypto] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-72 min-h-screen w-[calc(100%-18rem)]">
          {/* Header */}
          <header className="relative bg-gradient-dark border-b border-gothic-gold py-12 w-full">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-gothic-gold gothic-heading mb-4">
                    LISTA DE DESEOS
                  </h1>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="px-8 py-12 max-w-6xl mx-auto">
            <div className="prose prose-invert max-w-none space-y-8">
              {/* New Section */}
              <div className="bg-gothic-black/70 border-l-4 border-gold-500 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gold-400 gothic-heading mb-4">
                  Tratamiento y tributos
                </h2>
                <p className="text-amber-100 italic mb-4">
                  Quizás quieras causar una buena impresión desde el principio o compensar cualquier desliz en tu servidumbre.
                </p>
                <p className="text-amber-100">
                  Mi Amazon Lista de deseos es un lugar fantástico para encontrar un regalo práctico que puedes estar seguro que adoraré. Si prefieres regalar un artículo más lujoso o específico, puedes enviar tarjetas de regalo por correo electrónico o criptomonedas.
                </p>
              </div>

              <div className="bg-gothic-black/70 border-l-4 border-gothic-gold p-6 mb-8">
                <h2 className="text-2xl font-bold text-gothic-gold gothic-heading mb-4">
                  Instrucciones Importantes
                </h2>
                <p className="mb-4">
                  Para recibir mi atención personalizada, es necesario realizar una <strong>aportación mínima</strong> a través de mi lista de deseos de Amazon o Cripto.
                </p>
                <p className="mb-4 font-semibold">
                  Por favor, ten en cuenta que:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Se requiere una aportación mínima para recibir mi atención personalizada.</li>
                  <li>Al realizar tu aportación, <strong>debes incluir en los comentarios del pedido</strong>:</li>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>La hora exacta de la donación</li>
                    <li>La fecha de la donación</li>
                    <li>Tu nombre o seudónimo</li>
                  </ul>
                  <li>Sin esta información, no podré verificar tu donación.</li>
                </ul>
                <p className="mb-4">
                  Tu generosidad será recompensada con mi atención. Cuanto más generoso seas, más especial será tu recompensa.
                </p>
                <p className="text-sm text-amber-200">
                  <strong>Nota:</strong> Una vez hagas el pedido en la lista de deseos, en el campo "Mensaje del regalo" añade tu correo para poder comunicarnos.
                </p>
              </div>

            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default"
                className="w-full md:w-auto"
                onClick={() => window.open('https://www.amazon.es/hz/wishlist/ls/13LOQVJ4SF5CM?ref_=wl_share', '_blank')}
              >
                Ver mi lista de deseos en Amazon
              </Button>
              <Button 
                variant="outline"
                className="w-full md:w-auto bg-gold-900/20 hover:bg-gold-800/40 text-gothic-gold hover:text-amber-50 border-gold-700"
                onClick={() => setShowCrypto(!showCrypto)}
              >
                {showCrypto ? 'Ocultar' : 'Mostrar'} Opciones de Pago con cripto
              </Button>
            </div>

            {showCrypto && (
              <Card className="mt-6 bg-gothic-black/70 border-gold-700/50 p-6">
                <h3 className="text-xl font-bold text-gothic-gold mb-4">Elige tu red preferida:</h3>
                <p className="font-semibold text-amber-100 mb-2">Monedas aceptadas:</p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-gold-300">Ethereum (ETH)</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-amber-300 hover:bg-gold-800/30 border-gold-700 w-full md:w-auto"
                      onClick={() => navigator.clipboard.writeText('0x2A21f3052A12CeB43c372B7d2BD6a098b0053554')}
                    >
                      Copiar dirección cartera
                    </Button>
                    <div className="bg-gold-900/30 px-3 py-1.5 rounded text-sm font-mono break-all text-transparent select-none">
                      •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gold-300">BNB Chain (BNB)</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-amber-300 hover:bg-gold-800/30 border-gold-700 w-full md:w-auto"
                      onClick={() => navigator.clipboard.writeText('0x2A21f3052A12CeB43c372B7d2BD6a098b0053554')}
                    >
                      Copiar dirección cartera
                    </Button>
                    <div className="bg-gold-900/30 px-3 py-1.5 rounded text-sm font-mono break-all text-transparent select-none">
                      •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                    </div>
                  </div>
                  
                  <p className="text-sm text-amber-200/80 mt-4">
                    * Asegúrate de enviar solo ETH o BNB a sus respectivas direcciones.
                  </p>
                </div>
              </Card>
            )}
            
            <Card className="bg-gothic-black border-gothic-gold p-8 mt-8">
              <h2 className="text-2xl font-bold text-gothic-gold gothic-heading mb-6">
                El Camino de la Sumisión Financiera
              </h2>
              
              <div className="prose prose-invert max-w-none space-y-6">
                <p>
                  La verdadera sumisión financiera es un viaje de entrega total. No es para todos, solo para aquellos dispuestos a renunciar al control y encontrar libertad en la obediencia.
                </p>
                
                <div className="bg-gold-900/20 border-l-4 border-gothic-gold p-4">
                  <h4 className="font-bold text-gothic-gold mb-2">¿Cómo funciona la dominación financiera?</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Iniciación:</strong> Realiza tu primera ofrenda y demuestra tu compromiso</li>
                    <li><strong>Sumisión:</strong> Sigue mis instrucciones al pie de la letra</li>
                    <li><strong>Entrega:</strong> Confía en que tomaré las mejores decisiones por ti</li>
                    <li><strong>Deleite:</strong> Disfruta de la libertad que viene con la sumisión total</li>
                  </ol>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gothic-gold mb-4">Ofrendas y Tributos</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gothic-black/50 p-4 border-gold-800/50">
                      <h5 className="font-semibold text-gothic-gold mb-2">Ofrenda Inicial</h5>
                      <p className="text-sm text-muted-foreground">Mínimo 100€ para comenzar tu viaje de sumisión</p>
                    </Card>
                    
                    <Card className="bg-gothic-black/50 p-4 border-gold-800/50">
                      <h5 className="font-semibold text-gothic-gold mb-2">Tributos Recurrentes</h5>
                      <p className="text-sm text-muted-foreground">Establecidos según tu capacidad y devoción</p>
                    </Card>
                  </div>
                  
                  <div className="mt-6">
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gothic-gold/30">
                  <p className="text-sm text-amber-300/80 italic">
                    * Recuerda: La sumisión es un privilegio, no un derecho. Demuestra tu devoción y quizá seas digno de mi atención.
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gothic-gold gothic-heading mb-8 text-center">
                Servicios de Dominación Financiera
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gothic-black/50 border-gothic-gold/30 p-6 hover:shadow-gold/20 transition-shadow">
                  <h3 className="text-xl font-bold text-gothic-gold mb-3">Control Financiero Total</h3>
                  <p className="text-muted-foreground">
                    Entrega el control de tus finanzas y déjame tomar las decisiones por ti. Tu sumisión financiera comienza aquí.
                  </p>
                </Card>
                
                <Card className="bg-gothic-black/50 border-gothic-gold/30 p-6 hover:shadow-gold/20 transition-shadow">
                  <h3 className="text-xl font-bold text-gothic-gold mb-3">Tributos y Ofrendas</h3>
                  <p className="text-muted-foreground">
                    Demuestra tu devoción a través de tributos regulares. Cada ofrenda fortalece nuestra dinámica.
                  </p>
                </Card>
                
                <Card className="bg-gothic-black/50 border-gothic-gold/30 p-6 hover:shadow-gold/20 transition-shadow">
                  <h3 className="text-xl font-bold text-gothic-gold mb-3">Sesiones de Control</h3>
                  <p className="text-muted-foreground">
                    Sesiones personalizadas donde estableceremos los términos de tu sumisión financiera y los rituales de entrega.
                  </p>
                </Card>
                
                <Card className="bg-gothic-black/50 border-gothic-gold/30 p-6 hover:shadow-gold/20 transition-shadow">
                  <h3 className="text-xl font-bold text-gothic-gold mb-3">Entrenamiento de Sumisos</h3>
                  <p className="text-muted-foreground">
                    Aprende a entregarte completamente, a seguir instrucciones y a encontrar placer en la entrega financiera.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
