import styled from 'styled-components'

export const SceneCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

export const Title = styled.h2`
    position: relative;
    font-size: 800;

    &::before {
        content: ' ';
        height: 30px;
        width: 30px;
        position: absolute;
        top: -12px;
        left: -12px;
        z-index: -1;
        background-color: var(--SCREEN);
        border-radius: 8px;
    }
`