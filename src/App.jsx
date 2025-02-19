import OrderFormT2 from "./components/OrderFormT2";
import HomeT2 from "./components/HomeT2";
import SuccessT2 from "./components/SuccessT2";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Success">
          <SuccessT2 />
        </Route>
        <Route path="/Order">
          <OrderFormT2 />
        </Route>
        <Route path="/">
          <HomeT2 />
        </Route>
      </Switch>
    </Router>
  );
}
