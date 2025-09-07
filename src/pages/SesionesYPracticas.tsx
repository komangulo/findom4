import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import { useNavigate } from 'react-router-dom';

const SesionesYPracticas = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AgeWarning />
      <Sidebar />
      
      <main className="ml-72 min-h-screen w-[calc(100%-18rem)]">
        {/* Header */}
        <header className="relative bg-gradient-dark border-b border-gothic-gold py-12 w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gothic-gold gothic-heading mb-4 text-center">
                FINANCIAR
              </h1>
              <p className="text-xl text-amber-100 max-w-2xl text-center">
                Selecciona el tipo de servicio financiero que deseas explorar
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contratos de deudas */}
            <div 
              className="bg-gothic-black/50 border border-gold-700/50 rounded-lg p-8 hover:border-gold-500 transition-all duration-300 hover:shadow-lg hover:shadow-gold-900/30 cursor-pointer"
              onClick={() => navigate('/contratos-deudas')}
            >
              <h2 className="text-2xl font-bold text-gothic-gold mb-4">Contratos de deudas</h2>
              <p className="text-amber-100 mb-6">
                Gestiona tus compromisos financieros con acuerdos claros y estructurados que protegen tus intereses.
              </p>
              <button className="w-full bg-gold-700 hover:bg-gold-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Ver opciones
              </button>
            </div>

            {/* Control financiero */}
            <div 
              className="bg-gothic-black/50 border border-gold-700/50 rounded-lg p-8 hover:border-gold-500 transition-all duration-300 hover:shadow-lg hover:shadow-gold-900/30 cursor-pointer"
              onClick={() => navigate('/control-financiero')}
            >
              <h2 className="text-2xl font-bold text-gothic-gold mb-4">Control financiero</h2>
              <p className="text-amber-100 mb-6">
                Toma el control total de tus finanzas con estrategias personalizadas y seguimiento detallado.
              </p>
              <button className="w-full bg-gold-700 hover:bg-gold-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Explorar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SesionesYPracticas