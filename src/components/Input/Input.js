import styled from 'styled-components'

const StyledInput = styled.input`
    outline: none;
    border: none;
    border-bottom: solid ${({ theme }) => theme.colors.PRIMARY} 2px;
    padding-bottom: 1px;
    margin-bottom: 1rem;
`

export default function Input(props) {
    return <StyledInput {...props}/>
}