import styled from "@emotion/styled"
import { Button, Input, Select, PaginationProps, Pagination } from "antd"

const Div = styled('div')(() => ({

}))

interface IProps extends PaginationProps {

}

export const PaginationCustom = (props: IProps) => {
    return <Div>
        <Pagination {...props}/>
    </Div>
}