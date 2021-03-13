import * as styled from "./styled";
import { useAppContext } from "../../../../appContext";
import { BURGER_PRICE } from '../../../../constants'
import burgerImage from "../../../../images/burger.svg";

export default function ItemCard() {
  const { state, dispatch } = useAppContext();
  return (
    <styled.ItemCardWrapper>
      <img src={burgerImage} alt="Burger illustration" />
      <styled.ItemDescriptionWrapper>
        <h4>Helloburger</h4>
        <h6>Veggie burger</h6>
        <h3>${BURGER_PRICE}</h3>
      </styled.ItemDescriptionWrapper>
      <styled.ItemsCountWrapper>
        <button onClick={() => dispatch({ type: "decreaseItemsCount" })}>
          <h5>-</h5>
        </button>
        <h4>{state.itemsCount}</h4>
        <button onClick={() => dispatch({ type: "increaseItemsCount" })}>
          <h5>+</h5>
        </button>
      </styled.ItemsCountWrapper>
    </styled.ItemCardWrapper>
  );
}
