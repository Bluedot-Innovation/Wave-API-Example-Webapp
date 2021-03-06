import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from './theme'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./scenes/Welcome";
import OrderPlacement from "./scenes/OrderPlacement";
import OnTheWay from "./scenes/OnTheWay";
import ConfirmArrival from "./scenes/ConfirmArrival";
import CurbsidePickup from "./scenes/CurbsidePickup";
import InvalidParams from "./scenes/InvalidParams";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/order-placement">
            <OrderPlacement />
          </Route>
          <Route exact path="/on-the-way">
            <OnTheWay />
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
    </ThemeProvider>
  );
}

export default App;
