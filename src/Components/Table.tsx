import styled from '@emotion/styled'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

interface SortInfo {
  [key: string]: 'asc' | 'desc'
}

interface TableState {
  sort: SortInfo
  setSort: (sort: SortInfo) => void
  selected: any[]
  setSelected: (selected: any[]) => void
}

interface TableProps {
  children?: ReactNode[]
  sort?: SortInfo
  selected?: any[]
  onSort?: (sort: SortInfo) => void
  onSelect?: (selected: any[]) => void
}

const defaultState: TableState = {
  sort: {},
  selected: [],
  setSort: sort => {},
  setSelected: selected => {}
}
const tableContext = createContext<TableState>(defaultState)

const StyledTable = styled('table')(({ theme }: any) => ({
  width: '100%',
  color: '#fff',
  boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.borderRadius,
  overflow: 'hidden',
  border: '1px solid black',
  thead: {
    width: '100%',
    fontWeight: 600,
    fontSize: '14px',
    backgroundColor: theme.colors.primary,
    'td, th': {
      padding: '.5rem',
      cursor: 'pointer',
      userSelect: 'none'
    }
  },
  td: {
    padding: '.5rem',
    fontWeight: 400,
    color: '#000000'
  }
}))

export function Table (props: TableProps) {
  const { onSort, onSelect } = props
  const [sort, setSort] = useState<SortInfo>(props.sort || {})
  const [selected, setSelected] = useState<any[]>(props.selected || [])

  useEffect(() => {
    if (onSort) {
      onSort(sort)
    }
  }, [sort, onSort])

  useEffect(() => {
    if (onSelect) {
      onSelect(selected)
    }
  }, [selected, onSelect])

  return (
    <tableContext.Provider value={{ sort, setSort, selected, setSelected }}>
      <StyledTable>{props.children}</StyledTable>
    </tableContext.Provider>
  )
}

interface ThProps {
  sortable?: string
  children?: ReactNode
}
const StyledTh = styled('th')<{ sort?: string }>(() => ({
  //display: 'flex',
  gap: '.5rem',
  alignItems: 'center'
}))
export function TH (props: ThProps) {
  const { sortable } = props
  const { sort, setSort } = useContext(tableContext)

  const icon = useMemo(() => {
    if (!sortable) {
      return null
    }
    const direction = sort[sortable]
    if (!direction) {
      return null
    }
    return direction === 'asc' ? <ArrowUpOutlined /> : <ArrowDownOutlined />
  }, [sortable, sort])

  const toggleSort = () => {
    if (!sortable) {
      return
    }
    const direction = sort[sortable]
    const newSort = {
      ...sort,
      [sortable]: direction === 'asc' ? 'desc' : 'asc'
    }
    setSort(newSort as SortInfo)
  }

  return (
    <StyledTh onClick={toggleSort}>
      <span>{props.children}</span>
      {icon && <span style={{ marginLeft: '.5rem' }}>{icon}</span>}
    </StyledTh>
  )
}
