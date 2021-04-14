import styled from 'styled-components'

export const OrderPlacementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    margin: auto;
    height: 70vh;
    max-width: 700px;
    overflow: auto;

    h6 {
        margin: 0;
    }

    form {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: min(30vh, 300px);
    }
`

export const TotalPriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 80%;
    margin-top: 2rem;

    h2, p {
        margin: 0.2rem 0;
    }

    p {
        color: #707070;
        font-size: 0.8rem;
    }

    @media only screen and (max-width: 30em) {
        h2 {
            font-size: 5vw
        };
    }
`