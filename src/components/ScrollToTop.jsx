'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ScrollToTop = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (window.location.hash) return

    try {
      window.scrollTo(0, 0)
    } catch (e) {
      // ignore in non-browser environments
    }
  }, [pathname])

  return null
}

export default ScrollToTop
