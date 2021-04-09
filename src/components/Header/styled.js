import { Logo } from '@bluedot-innovation/bluedot-ui'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    padding: min(2%, 1rem);
    border-bottom: solid ${({ theme }) => theme.colors.PRIMARY} 2px;

    ${Logo} {
        width: 140px;
    }
`
