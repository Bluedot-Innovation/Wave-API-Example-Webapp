import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderPlacement from "./scenes/OrderPlacement";
import ConfirmArrival from "./scenes/ConfirmArrival";
import CurbsidePickup from "./scenes/CurbsidePickup";
import InvalidParams from "./scenes/InvalidParams";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <OrderPlacement />
        </Route>
        <Route exact path="/confirm-arrival">
          <ConfirmArrival />
        </Route>
        <Route exact path="/curbside-pickup">
          <CurbsidePickup />
        </Route>
        <Route exact path="/invalid-params">
          <InvalidParams />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
