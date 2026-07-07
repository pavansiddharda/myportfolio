import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const CustomCursor = () => {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const moveCursor = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    }

    const updateCursorState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const isInteractive = !!target?.closest('a, button, input, textarea, select, [role="button"], [data-interactive="true"]')
      cursor.classList.toggle('active', isInteractive)
    }

    const handleMouseDown = () => cursor.classList.add('clicking')
    const handleMouseUp = () => cursor.classList.remove('clicking')

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousemove', updateCursorState)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseleave', () => cursor.classList.remove('active'))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousemove', updateCursorState)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseleave', () => cursor.classList.remove('active'))
      cursor.remove()
    }
  }, [])

  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomCursor />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
