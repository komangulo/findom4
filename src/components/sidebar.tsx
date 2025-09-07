import { cn } from "@/lib/utils"
import { GothicButton } from "./gothic-button"
import { useLocation } from "react-router-dom"

interface SidebarProps {
  className?: string
}

const menuItems = [
  { name: "INICIO", href: "/" },
  { name: "SOBRE MÍ", href: "/sobre-mi" },
  { name: "FINANCIAR", href: "/sesiones-y-practicas" },
  { name: "ASESORÍA A DISTANCIA", href: "/dominacion-distancia" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACTO", href: "/lista-deseos" },
]

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation()
  
  return (
    <aside className={cn(
      "fixed left-0 top-0 h-full w-72 bg-gothic-black border-r border-gothic-gold",
      "overflow-y-auto scrollbar-thin scrollbar-track-gothic-gray scrollbar-thumb-gothic-gold",
      className
    )}>
      {/* Logo/Header */}
      <div className="p-6 border-b border-gothic-gold">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gothic-gold gothic-heading mb-2">
            DOMINACIÓN FINANCIERA
          </h1>
          <h2 className="text-2xl font-bold text-gold-400 gothic-heading">
            REINA RUBY
          </h2>
          <p className="text-xs text-muted-foreground mt-2 italic">
            CONTROL DE ACTIVOS
          </p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href || 
                         (item.href !== '/' && location.pathname.startsWith(item.href))
          
          return (
            <GothicButton
              key={item.name}
              variant={isActive ? "elegant" : "ghost"}
              className={"w-full justify-start text-left h-auto py-3 px-4 text-sm font-medium tracking-wide"
            }
            asChild
          >
            <a href={item.href}>
              {item.name}
            </a>
          </GothicButton>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gothic-gold bg-gothic-gray text-center">
        <p className="text-xs text-muted-foreground">© Dominación Financiera</p>
      </div>
    </aside>
  )
}