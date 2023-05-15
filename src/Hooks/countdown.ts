import { useEffect, useState } from 'react'

export const useCountDown = (seconds: number) => {
  const [value, setValue] = useState(seconds)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) {
      return
    }

    const countdown = () => {
      let seconds = value
      return setInterval(() => {
        seconds = seconds - 1
        if (seconds >= 0) {
          setValue(seconds)
        }
      }, 1000)
    }

    const timer = countdown()

    return () => {
      clearTimeout(timer)
    }
  }, [value, setValue, running])

  const stop = () => {
    setRunning(false)
  }

  const start = () => {
    setRunning(true)
  }

  return { value, stop, start }
}
