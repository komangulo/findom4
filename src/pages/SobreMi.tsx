import { Sidebar } from "@/components/sidebar"
import { AgeWarning } from "@/components/age-warning"
import financieraPortrait from "@/assets/sobre-mi-portrait.jpg"

const SobreMi = () => {

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
                  SOBRE MÍ
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  Experta en Dominación Financiera y Control de Activos
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-12 max-w-6xl mx-auto text-center">
          {/* Main Content Section */}
          <div className="flex flex-col items-center space-y-12 mb-16">
            {/* Portrait */}
            <div className="w-full max-w-2xl">
              <div className="w-full h-96 overflow-hidden rounded-lg gothic-border shadow-gothic">
                <img 
                  src={financieraPortrait} 
                  alt="Experta en Dominación Financiera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Biography Text */}
            <div className="w-full max-w-4xl space-y-6">
              <div className="prose prose-invert max-w-none text-left space-y-6">
                <h2 className="text-3xl font-bold text-gothic-gold gothic-heading mb-6">
                  ¿Cuando me di cuenta que era Dominante?
                </h2>
                <p>
                  La dominación es lo que soy y la expreso en todo lo que hago. ¡No puedo evitarlo! Me hace sentir muy viva envolver a los hombres alrededor de mi dedo meñique – y soy natural en eso.
                </p>
                <p>
                  Influyo y controlo sin esfuerzo a los hombres de mi vida. Desde que me convertí en dominatriz profesional, perfeccioné mis habilidades técnicas y comencé a experimentar, y pronto descubrí que mi estilo de dominio lúdico, provocador y cerebral era bastante específico.
                </p>
                <p>
                  Estoy orgulloso de mi dominio y de la comunidad de sumisos al servicio que he construido.
                </p>

                <div className="mt-10 mb-8 p-6 bg-gold-900/10 border border-gold-700/50 rounded-lg text-center">
                  <p className="text-lg text-amber-100 mb-4">
                    ¿Anhelas aprender más sobre mí? Aquí repaso mis 5 problemas más importantes de todos los tiempos.
                  </p>
                  <a 
                    href="/top-5-kinks"
                    className="inline-block px-6 py-3 bg-gold-700 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors duration-200 ease-in-out"
                  >
                    Top 5 kinks / fetiches
                  </a>
                </div>

                <h3 id="top-kinks" className="text-2xl font-bold text-gothic-gold mt-8 mb-4">Top 5 kinks / fetiches</h3>
                
                <h3 className="text-xl font-semibold text-amber-200 mt-6 mb-2">¿Qué me gusta hacer?</h3>
                <p>
                  Soy una dominante artística y cerebral y me encanta el control psicológico.
                </p>
                <p>
                  Anhelo experiencias íntimas que traspasen los límites y rompan corazones. Disfruto jugando con socios que están abiertos a cumplir mis deseos con su sumisión.
                </p>

                <h3 className="text-xl font-semibold text-amber-200 mt-6 mb-2">¿Cómo puede un sumiso servirme?</h3>
                <p>
                  Me interesan los detalles. Pido que quienes deseen verme tengan conciencia de sí mismos y busquen encontrar placer en una seducción artística, cerebral y lenta. Ofrécete a Mí comenzando tu viaje.
                </p>
                <blockquote className="border-l-4 border-gothic-gold pl-4 italic text-amber-100">
                  "Retrasar lo inevitable sólo te atrapa en la cabeza, y ese no es el tipo de tortura adecuado"
                </blockquote>
                
                <h3 className="text-2xl font-bold text-gothic-gold mt-10 mb-4">¿Qué clase de Domme soy?</h3>
                <p>
                  Detectar la clase y el dominio es fácil. Es la vibración que emito, así que incluso cuando tus ojos no pueden verme, puedes sentir Mi presencia. Por eso te giras a mirarme mientras camino por tu calle principal, en tu pueblo tradicional.
                </p>
                <p>
                  Una mezcla seductora, enriquecedora, sensual y hedonista de atractivo sexual e inteligencia. Soy un sádico emocional, tomo corazones y los guardo mientras exploro el erotismo, creando momentos que permanecerán contigo para siempre. Soy sabio, paciente y discreto.
                </p>
                <p>
                  Déjame ser el guardián de tu mente subconsciente, usando mi conocimiento intuitivo para desbloquear tus deseos ocultos.
                </p>
                <p>
                  Un Dominante sensual con un talento natural para obligar a los hombres a someterse a Mi voluntad. 
                </p>
                <p>
                  Espero respeto y creo en los valores caballerosos tradicionales, y me gusta que me traten como a una dama. Espero que leas mi sitio web, entiendas lo que debo y no debo hacer y solo entonces me contactes.
                </p>
                
                <div className="text-lg leading-relaxed space-y-4 text-foreground">
                  <p>
                    Soy <strong className="text-gothic-gold">Especialista en Dominación Financiera</strong>, y durante los últimos años me he dedicado profesionalmente al arte del control financiero. Lo que comenzó como una fascinación por la psicología del dinero y el poder, se ha convertido en mi vocación y especialización.
                  </p>
                  
                  <p>
                    Desde muy joven, siempre mostré una habilidad excepcional para comprender las finanzas personales y la gestión de activos. Mi enfoque profesional se centra en ayudar a mis clientes a alcanzar la libertad financiera a través de estrategias de inversión inteligentes y control de gastos.
                  </p>
                  
                  <p>
                    Mi enfoque como Dominatrix no se basa únicamente en la fuerza física, sino en la <strong className="text-gothic-gold">dominación psicológica</strong>. Creo firmemente que la verdadera sumisión nace de la mente, no del cuerpo. Por eso, mis sesiones están cuidadosamente diseñadas para explorar los límites mentales y emocionales de mis sumisos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <section className="mb-16 p-8 bg-gothic-gray rounded-lg border border-gothic-gold">
            <h3 className="text-3xl font-bold text-gothic-gold gothic-heading mb-6 text-center">
              Mi Filosofía
            </h3>
            
            <div className="text-lg leading-relaxed space-y-6 text-foreground">
              <p className="text-center text-xl font-semibold text-gothic-gold italic">
                "La verdadera dominación es un arte que requiere inteligencia, creatividad y, sobre todo, respeto."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gothic-gold">Dominación Consensual</h4>
                  <p>
                    Cada sesión se basa en el consentimiento mutuo y el respeto por los límites establecidos. La confianza es la base fundamental de cualquier relación D/s exitosa.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gothic-gold">Crecimiento Personal</h4>
                  <p>
                    Veo cada sesión como una oportunidad para que mis sumisos exploren aspectos profundos de su personalidad y descubran nuevas facetas de sí mismos.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gothic-gold">Profesionalismo</h4>
                  <p>
                    Mantengo los más altos estándares de profesionalismo, higiene y discreción. La privacidad de mis sumisos es sagrada.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gothic-gold">Evolución Constante</h4>
                  <p>
                    Estoy en constante aprendizaje, perfeccionando mis técnicas y explorando nuevas formas de dominación psicológica y física.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Interests */}
          <section className="mb-16 p-8 bg-gothic-black rounded-lg border border-gothic-gold">
            <h3 className="text-3xl font-bold text-gothic-gold gothic-heading mb-6 text-center">
              Más Allá de la Dominación
            </h3>
            
            <div className="text-lg leading-relaxed space-y-4 text-foreground">
              <p>
                Cuando no estoy en sesión, disfruto de actividades que alimentan mi mente y mi alma. Soy una apasionada de la <strong className="text-gothic-gold">literatura clásica</strong>, especialmente obras que exploran la psicología humana y las dinámicas de poder.
              </p>
              
              <p>
                La <strong className="text-gothic-gold">moda gótica y fetichista</strong> es una de mis grandes pasiones. Colecciono piezas únicas de latex, cuero y lencería, cada una cuidadosamente seleccionada no solo por su belleza, sino por el poder psicológico que transmite.
              </p>
              
              <p>
                También dedico tiempo al estudio de <strong className="text-gothic-gold">psicología</strong> y técnicas de dominación, asistiendo a eventos y talleres especializados para mantenerme actualizada en las mejores prácticas del BDSM profesional.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center p-8 bg-gradient-gold rounded-lg border border-gothic-gold">
            <h3 className="text-3xl font-bold text-gothic-black gothic-heading mb-4">
              ¿Listo para Conocer tu Lugar?
            </h3>
            <p className="text-lg text-gothic-black mb-6">
              Si has llegado hasta aquí, es porque algo en tu interior te llama a explorar la sumisión. 
              No esperes más para descubrir el placer de servir a una verdadera Dominatrix.
            </p>
            <div className="text-sm text-gothic-black/80">
              <p>Consulta mis servicios y contacta conmigo para comenzar tu viaje hacia la verdadera sumisión.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default SobreMi