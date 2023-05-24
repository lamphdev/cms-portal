import styled from "@emotion/styled"


const Div = styled('div')(() => ({
    color: 'red'
}))

export const TextError = ({ children }: any) => {
    return <Div>
        {children}
    </Div>
}