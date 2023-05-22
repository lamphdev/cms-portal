import { Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { Editor } from './Editor'
import styled from '@emotion/styled'

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
        <Controller
          control={control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <label className='required' htmlFor='name'>
                Tên tin tức
              </label>
              <Input id='name' {...field} />
            </FormItem>
          )}
        />

        <Controller
          control={control}
          name='content'
          render={({ field }) => (
            <FormItem style={{ marginTop: '1rem' }}>
              <Editor {...field} />
            </FormItem>
          )}
        />
      </form>
    </div>
  )
}

const FormItem = styled('div')(() => ({
  label: {
    fontSize: '14px',
    lineHeight: '19px',
    fontWeight: '600',
    fontFamily: 'Open Sans'
  },
  '.required:after': {
    content: '"*"',
    color: 'red'
  }
}))
