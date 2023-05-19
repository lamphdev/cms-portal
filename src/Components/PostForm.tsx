import { Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { Editor } from './Editor'

export function PostForm () {
  const { control } = useForm({
    defaultValues: {
      title: '',
      content: ''
    }
  })

  return (
    <div>
      <form action=''>
        {/* <Controller
          control={control}
          name='title'
          render={({ field }) => <Input {...field} />}
        /> */}

        <Controller
          control={control}
          name='content'
          render={({ field }) => <Editor />}
        />
      </form>
    </div>
  )
}
