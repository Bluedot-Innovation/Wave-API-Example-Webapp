import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@bluedot-innovation/bluedot-ui";
import { useAppContext } from "../../appContext";
import Title from "../../components/Title";
import Input from "../../components/Input";
import ItemCard from "./components/ItemCard";
import { BURGER_PRICE } from "../../constants";
import * as styled from "./styled";

export default function OrderPlacement() {
  const { state, dispatch } = useAppContext();
  const history = useHistory();
  const urlParams = useLocation();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/confirm-arrival${urlParams.search}`);
  };

  const handleInputChange = (e) => {
    const firstname = e.target.value;
    dispatch({ type: "updateFirstname", payload: firstname });
  };

  return (
    <styled.OrderPlacementWrapper>
      <Title>Order Placement</Title>
      <ItemCard />
      <styled.TotalPriceWrapper>
        <p>Total Price</p>
        <h2>{state.itemsCount * BURGER_PRICE}</h2>
      </styled.TotalPriceWrapper>
      <form onSubmit={onSubmit}>
        <div>
          <h5>Please tell us about you</h5>
          <Input
            value={state.firstname}
            onChange={handleInputChange}
            placeholder="First name *"
            type="text"
            required
          />
        </div>
        <Button semiRound size="small" type="submit">
          <h6>Place Order</h6>
        </Button>
      </form>
    </styled.OrderPlacementWrapper>
  );
}
