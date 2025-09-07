import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import { useNavigate } from 'react-router-dom';

const ContratosDeuda = () => {
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
                Contratos de deuda
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 italic mb-8">
                Una prisión de Findom de tu propia creación.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gothic-black/50 border border-gold-700/50 rounded-lg p-8 mb-12">
              <p className="text-amber-100 text-lg mb-6">
                A pesar de su racionalidad y experiencia previa, su interés en la dominación financiera (a veces conocida como Findom) no hace más que aumentar.
              </p>
              <p className="text-amber-100 text-lg mb-6">
                Anhelas estar vinculado financieramente con una Señora. Esta es tu oportunidad de abrazar completamente una vida bajo findom, una vida bajo mi control financiero. Bienvenido a mi juego de deuda findom fácil de jugar. Una experiencia fluida, automatizada e ineludible.
              </p>
              <p className="text-amber-100 text-lg">
                Disfrute de la presión de encontrar formas de pagar lo que debe y disfrute de la vergüenza y la culpa del contrato de deuda que pesa mucho en sus bolsillos. Tu nueva vida de findom te espera. 
              </p>
            </div>

            {/* Tu Destino de Findom Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gothic-gold gothic-heading mb-4">
                TU DESTINO DE FINDOM
              </h2>
              <h3 className="text-2xl font-bold text-amber-100 mb-8">
                Contrato de deuda
              </h3>
              
              <div className="bg-gothic-black/50 border border-gold-700/50 rounded-lg p-8 mb-8">
                <p className="text-amber-100 text-lg mb-6">
                  ¿Te entusiasma la idea de tener un contrato de deuda cada vez mayor con una amante? ¿Anhela la vergüenza y el estrés de cumplir con sus obligaciones financieras cada vez mayores?
                </p>
                <p className="text-amber-100 text-lg mb-8">
                  Elija un contrato de deuda que se adapte a sus necesidades con opciones de riesgo bajo, medio y alto. 
                </p>
                <p className="text-xl font-bold text-gothic-gold mb-6">
                  Es hora de perder el control y ceder a tus deseos.
                </p>
                <button 
                  onClick={() => window.scrollTo({ top: document.getElementById('contratos')?.offsetTop, behavior: 'smooth' })}
                  className="bg-gold-700 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Ver contratos
                </button>
              </div>
              
              <p className="text-amber-100 text-lg mb-8">
                Elija un contrato de deuda que se adapte a sus necesidades con opciones de riesgo bajo, medio y alto.
              </p>
              <p className="text-amber-100 text-lg bg-gold-900/30 border-l-4 border-gold-500 pl-4 py-2 italic">
                Según el nivel de riesgo que elijas, podrás otorgar acceso a tus cuentas bancarias para restringir tus gastos, controlar tus decisiones financieras y establecer pagos recurrentes automáticos.
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gold-900/30 border border-gold-700/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gothic-gold mb-4">
                ¿Listo para comenzar tu viaje de sumisión financiera?
              </h3>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                Completa el formulario de solicitud y da el primer paso hacia tu nueva realidad financiera.
              </p>
              <button 
                onClick={() => navigate('/solicitud')}
                className="bg-gold-700 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Solicitar Contrato
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContratosDeuda;
