'use client'

import { useEffect, useState } from 'react'

let currentVersion: number | null = null

export function FlyonuiHotReload() {
  const [, setVersion] = useState(0)

  useEffect(() => {
    // Solo en desarrollo
    if (process.env.NODE_ENV !== 'development') return

    async function checkVersion() {
      try {
        const res = await fetch('/flyonui-version.json', { cache: 'no-store' })
        const data = await res.json()
        
        if (currentVersion === null) {
          currentVersion = data.version
        } else if (data.version !== currentVersion) {
          console.log('🎨 FlyonUI CSS updated, reloading styles...')
          currentVersion = data.version
          
          // Actualizar el link del CSS
          const link = document.querySelector('link[href^="/flyonui.css"]') as HTMLLinkElement
          if (link) {
            link.href = `/flyonui.css?v=${data.version}`
          }
          
          setVersion(data.version)
        }
      } catch (e) {
        // Ignorar errores silenciosamente
      }
    }

    // Verificar cuando hay cambios detectados por Next.js Fast Refresh
    const handleFocus = () => checkVersion()
    
    window.addEventListener('focus', handleFocus)
    checkVersion()

    // Verificar periódicamente pero solo cuando la ventana está enfocada
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        checkVersion()
      }
    }, 2000)

    return () => {
      window.removeEventListener('focus', handleFocus)
      clearInterval(interval)
    }
  }, [])

  return null
}
