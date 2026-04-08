import { useEffect, useRef } from 'react'
import './Particles.css'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    let W = (canvas.width  = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    const particles = Array.from({ length: 30 }, () => ({
      x:       Math.random() * W,
      y:       Math.random() * H,
      r:       Math.random() * 1.5 + 0.5,
      speed:   Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.12 + 0.04,
    }))

    let rafId

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.y -= p.speed
        if (p.y < -10) {
          p.y = H + 10
          p.x = Math.random() * W
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,164,82,${p.opacity})`
        ctx.fill()
      })
      rafId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className='particles' />
}
