import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import { useNavigate } from 'react-router-dom';

const ControlFinanciero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <Sidebar />
      
      <main className="ml-72 min-h-screen w-[calc(100%-18rem)]">
        {/* Hero Section */}
        <div className="relative bg-gradient-dark border-b border-gothic-gold py-20 w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gothic-gold gothic-heading mb-6">
                Control financiero
              </h1>
              <h2 className="text-2xl md:text-3xl text-amber-100 italic mb-8">
                Gestión del dinero
              </h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <div className="bg-gothic-black/50 border border-gold-700/50 rounded-lg p-8 mb-12">
              <p className="text-amber-100 text-lg mb-6">
                Si la gestión del dinero nunca ha sido su punto fuerte, deje que la condesa Diamond lo guíe hacia la libertad que busca. Con la gestión diaria, los cheques bancarios al contado y los presupuestos, finalmente puedes ser libre, mientras te guío hacia una vida más rica o más pobre.
              </p>
              <p className="text-amber-100 text-lg font-bold text-center">
                Cualquiera que sea tu necesidad financiera, pagarás por ella.
              </p>
            </div>

            {/* Your Destiny Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gothic-gold gothic-heading mb-4">
                CUMPLE TU DESTINO
              </h2>
              <h3 className="text-2xl font-bold text-amber-100 mb-8">
                Control financiero
              </h3>
              
              <div className="bg-gothic-black/50 border border-gold-700/50 rounded-lg p-8 mb-8">
                <p className="text-amber-100 text-lg mb-6">
                  ¿Estás cansado de sentirte estresado y abrumado por tus finanzas?
                </p>
                <p className="text-amber-100 text-lg mb-8">
                  Es hora de tomar el control y construir el futuro financiero que te mereces. La administración del dinero requerirá que usted se someta a controles bancarios aleatorios y presupuestos. Celebra finalmente ser libre, mientras te guío hacia una vida más rica o más pobre.
                </p>
                <button 
                  onClick={() => navigate('/solicitud-control')}
                  className="bg-gold-700 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Comenzar
                </button>
              </div>
            </div>

            {/* Service Description */}
            <div className="bg-gothic-black/50 border border-gold-700/50 rounded-lg p-8 mb-12">
              <p className="text-amber-100 text-lg mb-6">
                La condesa Diamond está aquí para ayudarle a crear un plan para lograr sus objetivos financieros y mejorar su bienestar económico general.
              </p>
              <p className="text-amber-100 text-lg mb-6">
                Con una planificación financiera personalizada y orientación experta, te ayudaré a crear un presupuesto, pagar deudas, ahorrar para el futuro y tomar decisiones financieras inteligentes. Ya sea que esté buscando ahorrar para la jubilación, comprar una casa o mejorar su estabilidad financiera, estoy aquí para ayudarlo a alcanzar sus objetivos y al mismo tiempo impulsar financieramente los míos.
              </p>
              <p className="text-amber-100 text-lg mb-6">
                No dejes que el estrés financiero te detenga por más tiempo. Da el primer paso hacia la libertad financiera bajo el control de una Dominatriz.
              </p>
            </div>

            {/* Rules Section */}
            <div className="bg-red-950/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">
                Normas de control financiero:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span className="text-amber-100">Se deben proporcionar detalles sobre ingresos, gastos, deudas y estilo de vida.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span className="text-amber-100">Se requerirán controles aleatorios bancarios inmediatos en forma de capturas de pantalla.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ControlFinanciero;
