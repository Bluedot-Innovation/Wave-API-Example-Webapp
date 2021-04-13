import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    padding: min(2%, 1rem);
    border-bottom: solid ${({ theme }) => theme.colors.PRIMARY} 2px;
    background-color: white;
    min-height: 35px;
    z-index: 2;
`
