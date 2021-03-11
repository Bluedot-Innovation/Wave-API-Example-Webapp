import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import OrderPlacement from "./scenes/OrderPlacement"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <OrderPlacement />
        </Route>
        <Route exact path="/">
          <h1>Bluedot</h1>
        </Route>
        <Route exact path="/">
          <h1>Bluedot</h1>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
