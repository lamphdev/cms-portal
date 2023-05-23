import { useContext, useEffect, useState } from 'react'
import { pageBuilderContext } from '../..'

export function SlideImageEditor () {
  const { selected, getSelectedComponent, updateProps } =
    useContext(pageBuilderContext)
  const [backgroundUrl, setBackgroundUrl] = useState('')

  useEffect(() => {
    const component = getSelectedComponent()
    if (component) {
      setBackgroundUrl(component?.backgroundImage || '')
    }
  }, [getSelectedComponent])

  const handleOnChange = (e: any) => {
    const value = e.target.value
    if (selected) {
      updateProps(selected, { backgroundImage: value })
    }
  }

  return (
    <form>
      <input
        type='text'
        defaultValue={backgroundUrl}
        onChange={handleOnChange}
      />
    </form>
  )
}
