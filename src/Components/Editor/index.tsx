import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface Props {
  value?: string
  onChange?: (html: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

export const Editor = React.forwardRef((props: Props, ref: any) => {
  const { value, onBlur, onFocus, onChange } = props
  const [state, setState] = useState(value)

  const _onChange = (html: string) => {
    if (onChange) {
      onChange(html)
    }
    setState(html)
  }

  const _onBlur = () => {
    if (onBlur) {
      onBlur()
    }
  }

  const _onFocus = () => {
    if (onFocus) {
      onFocus()
    }
  }

  return (
    <ReactQuill
      ref={ref}
      style={{ minHeight: '500px' }}
      theme='snow'
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          ['link', 'image'],
          ['code'],
          ['clean'] // remove formatting button
        ]
      }}
      value={state}
      onChange={_onChange}
      onFocus={_onFocus}
      onBlur={_onBlur}
    />
  )
})

// export function Editor (props: Props) {
//   const { value, onBlur, onFocus, onChange } = props
//   const [state, setState] = useState(value)

//   const _onChange = (html: string) => {
//     if (onChange) {
//       onChange(html)
//     }
//     setState(html)
//   }

//   const _onBlur = () => {
//     if (onBlur) {
//       onBlur()
//     }
//   }

//   const _onFocus = () => {
//     if (onFocus) {
//       onFocus()
//     }
//   }

//   return (
//     <ReactQuill
//       theme='snow'
//       modules={{
//         toolbar: [
//           ['bold', 'italic', 'underline', 'strike'], // toggled buttons
//           ['blockquote', 'code-block'],

//           [{ header: 1 }, { header: 2 }], // custom button values
//           [{ list: 'ordered' }, { list: 'bullet' }],
//           [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
//           [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
//           [{ direction: 'rtl' }], // text direction

//           [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
//           [{ header: [1, 2, 3, 4, 5, 6, false] }],

//           [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//           [{ font: [] }],
//           [{ align: [] }],
//           ['link', 'image'],
//           ['code'],
//           ['clean'] // remove formatting button
//         ]
//       }}
//       value={state}
//       onChange={_onChange}
//       onFocus={_onFocus}
//       onBlur={_onBlur}
//     />
//   )
// }
