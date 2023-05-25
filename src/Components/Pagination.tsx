import styled from '@emotion/styled'
import { useEffect, useMemo, useState } from 'react'

import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons'
import { Select } from 'antd'

interface Props {
  page: number
  size: number
  total: number
  onChange?: (page: number, size: number) => void
}

export function Pagination (props: Props) {
  const { page, size, total, onChange } = props
  const [currentPage, setCurrentPage] = useState(page)

  const emitPageChange = (page: number, size: number) => {
    const maxPage = Math.ceil(total / size)
    if (page < 0) page = 0
    if (page > maxPage - 1) page = maxPage - 1
    setCurrentPage(page)
    if (onChange) {
      onChange(page, size)
    }
  }

  const maxPage = useMemo(() => {
    return Math.ceil(total / size) - 1
  }, [size, total])

  const pages = useMemo(() => {
    const start = currentPage - 2 < 0 ? 0 : currentPage - 2
    const end = currentPage + 2 > maxPage ? maxPage : currentPage + 2
    return Array.from(Array(maxPage).keys()).filter(
      el => el >= start && el <= end
    )
  }, [currentPage, maxPage])

  const pageOption = useMemo(() => {
    return Array.from(Array(maxPage).keys()).map(element => ({
      label: element + 1,
      value: element
    }))
  }, [maxPage])

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  return (
    <Div>
      <ul>
        <li>
          <button onClick={() => emitPageChange(0, size)}>
            <DoubleLeftOutlined />
          </button>
        </li>
        <li>
          <button
            disabled={currentPage === 0}
            onClick={() => emitPageChange(currentPage - 1, size)}
          >
            <LeftOutlined />
          </button>
        </li>
        {pages.map(el => (
          <li key={el}>
            <button
              className={currentPage === el ? 'active' : ''}
              onClick={() => emitPageChange(el, size)}
            >
              {el + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage >= maxPage}
            onClick={() => emitPageChange(currentPage + 1, size)}
          >
            <RightOutlined />
          </button>
        </li>
        <li>
          <button onClick={() => emitPageChange(maxPage - 1, size)}>
            <DoubleRightOutlined />
          </button>
        </li>
      </ul>

      <div className='right-side'>
        <span className=''>
          Hiển thị {size} trên tổng số {total} bản ghi
        </span>
        <Select
          options={pageOption}
          value={currentPage}
          onChange={val => emitPageChange(val, size)}
        ></Select>
      </div>
    </Div>
  )
}

const Div = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  ul: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    gap: '10px',
    padding: 0,
    'li > button': {
      width: '40px',
      display: 'flex',
      //   fontFamily: 'Segoe UI',
      fontWeight: 700,
      fontSize: '16px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      boxSizing: 'border-box',
      background: '#FFFFFF',
      border: '1px solid #EAEDEE',
      borderRadius: '4px',
      cursor: 'pointer',
      userSelect: 'none'
    },
    'li>button:hover': {
      background: 'lightgray'
    },
    '.active': {
      color: '#fff',
      backgroundColor: '#EF0032'
    },
    '.active:hover': {
      color: '#fff',
      backgroundColor: '#EF0032'
    }
  },
  '.right-side': {
    alignItems: 'center',
    display: 'flex',
    gap: '.5rem'
  }
}))
