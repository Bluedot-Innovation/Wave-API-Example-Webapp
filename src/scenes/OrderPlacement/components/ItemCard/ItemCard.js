import * as styled from './styled'
import burgerImage from '../../../../images/burger.svg'

export default function ItemCard() {
    return (
        <styled.ItemCardWrapper>
            <img src={burgerImage} alt="Burger illustration"/>
            <styled.ItemDescriptionWrapper>
                <h4>Helloburger</h4>
                <h6>Veggie burger</h6>
                <h3>$12.99</h3>
            </styled.ItemDescriptionWrapper>
            <styled.ItemsCountWrapper>
                <button><h5>-</h5></button>
                <h4>1</h4>
                <button><h5>+</h5></button>
            </styled.ItemsCountWrapper>
        </styled.ItemCardWrapper>
    )
}