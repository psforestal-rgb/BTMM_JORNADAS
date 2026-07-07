import { useEffect, useRef } from 'react'

/**
 * Detector ligero de swipe horizontal sobre un elemento (ref).
 *
 *  - threshold: distancia mínima (px) para contar como swipe (default 60).
 *  - restraint: máx desplazamiento vertical aceptado (default 80, evita
 *    conflictos con scroll vertical).
 *  - allowedTime: máx tiempo entre touchstart y touchend (default 600 ms).
 *
 * No interfiere con scroll; sólo dispara cuando el gesto es claramente
 * horizontal. Mantiene los botones existentes como ruta principal.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 60, restraint = 80, allowedTime = 600 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    let startX = 0
    let startY = 0
    let startTime = 0
    let blocked = false

    const onTouchStart = (e) => {
      const t = e.changedTouches?.[0]
      if (!t) return
      const target = e.target instanceof Element ? e.target : null
      blocked = !!target?.closest(
        'button, a, input, select, textarea, [role="button"], [data-swipe-ignore], table, .overflow-x-auto, .overflow-auto',
      ) || t.clientX < 24 || t.clientX > window.innerWidth - 24
      startX = t.clientX
      startY = t.clientY
      startTime = Date.now()
    }
    const onTouchEnd = (e) => {
      const t = e.changedTouches?.[0]
      if (!t || blocked) return
      const dx = t.clientX - startX
      const dy = t.clientY - startY
      const elapsed = Date.now() - startTime
      if (elapsed > allowedTime) return
      if (Math.abs(dx) < threshold || Math.abs(dy) > restraint || Math.abs(dx) <= Math.abs(dy) * 1.2) return
      if (dx < 0) onSwipeLeft?.()
      else onSwipeRight?.()
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [onSwipeLeft, onSwipeRight, threshold, restraint, allowedTime])

  return ref
}
