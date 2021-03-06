import styled from 'styled-components'

export const ItemCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.NEUTRAL_BACKGROUND};
    padding: 0.5rem;
    width: 85%;
    border-radius: 8px;

    img {
        width: min(30%, 150px);
        flex: 1;
    }

    h4, h5, h6, p {
        margin: 0.4rem 0;
    }

    h6 {
        font-weight: 500;
        color: #707070;
    }

    @media only screen and (max-width: 30em) {
        h3 {
            font-size: 2vw;
            margin: 0.1rem 0;
        }

        img {
            max-width: 100px;
        }
    }
`

export const ItemDescriptionWrapper = styled.div`
    max-height: 80px;
    flex: 2;
    margin-left: 1rem;
`

export const ItemsCountWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    h4 {
        margin: 0 0.5rem;
    }

    button {
        border: none;
        background-color: ${({ theme }) => theme.colors.NEUTRAL_BACKGROUND}
    }

`