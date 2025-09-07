import { useEffect, useState } from "react"
import { GothicButton } from "./gothic-button"
import { Card } from "@/components/ui/card"

export function AgeWarning() {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('ageVerified') === 'true'
    setShowWarning(!hasAccepted)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('ageVerified', 'true')
    setShowWarning(false)
  }

  if (!showWarning) return null
  
  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 bg-gothic-black border-gothic-gold shadow-2xl">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-gothic-gold gothic-heading mb-6">
            ¡Bienvenido!
          </h1>
          
          <div className="space-y-4 text-sm text-foreground">
            <p>
              Gracias por visitar nuestra página web.
            </p>
            
            <div className="flex justify-center gap-4 mt-6">
              <GothicButton 
                onClick={handleAccept}
                className="px-8 py-3"
              >
                Continuar
              </GothicButton>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}