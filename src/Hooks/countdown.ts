import { useEffect, useState } from 'react'

export const useCountDown = () => {
  const [value, setValue] = useState(0)
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

  const start = (seconds: number) => {
    setValue(seconds);
    setRunning(true)
  }

  return { value, stop, start }
}
