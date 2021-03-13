import styled from 'styled-components'

export const OrderPlacementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem;
    height: 70vh;

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
`