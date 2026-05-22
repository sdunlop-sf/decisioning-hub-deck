import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Slide from './components/Slide'
import NavBar from './components/NavBar'
import SlideTitle from './slides/SlideTitle'
import SlideProblem from './slides/SlideProblem'
import SlideArchitecture from './slides/SlideArchitecture'
import SlideHowItWorks from './slides/SlideHowItWorks'
import SlideFeatures from './slides/SlideFeatures'
import SlideDifferentiators from './slides/SlideDifferentiators'
import SlideCTA from './slides/SlideCTA'
import './App.css'

const slides = [
  SlideTitle,
  SlideProblem,
  SlideArchitecture,
  SlideHowItWorks,
  SlideFeatures,
  SlideDifferentiators,
  SlideCTA,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((n) => {
    const next = Math.max(0, Math.min(slides.length - 1, n))
    if (next === current) return
    setDirection(next > current ? 1 : -1)
    setCurrent(next)
  }, [current])

  const next = useCallback(() => go(current + 1), [go, current])
  const prev = useCallback(() => go(current - 1), [go, current])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  useEffect(() => {
    let startX = 0
    const onStart = (e) => { startX = e.touches[0].clientX }
    const onEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 50) dx > 0 ? prev() : next()
    }
    window.addEventListener('touchstart', onStart)
    window.addEventListener('touchend', onEnd)
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [next, prev])

  const CurrentSlide = slides[current]

  return (
    <div className="deck">
      <div className="deck-bg" />
      <AnimatePresence mode="wait" custom={direction}>
        <Slide key={current} direction={direction}>
          <CurrentSlide />
        </Slide>
      </AnimatePresence>
      <NavBar current={current} total={slides.length} onGo={go} />
    </div>
  )
}
