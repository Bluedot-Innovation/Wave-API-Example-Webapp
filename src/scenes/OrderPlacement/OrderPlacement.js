import { useHistory } from "react-router-dom";
import { Button } from '@bluedot-innovation/bluedot-ui'
import Title from '../../components/Title'
import ItemCard from './components/ItemCard'
import * as styled from './styled'
import burgerImage from "../../images/burger.svg";

export default function OrderPlacement() {
  const history = useHistory();

  return (
      <styled.OrderPlacementWrapper>
          <Title>Order Placement</Title>
          <ItemCard />
        <Button semiRound size="small">
            <h6>Place Order</h6>
        </Button>
      </styled.OrderPlacementWrapper>
  );
}
