import styled from 'styled-components'

export const FooterWrapper = styled.div`
    min-height: 2rem;
    border-top: solid ${({ theme }) => theme.colors.PRIMARY} 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
`