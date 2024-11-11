import OrderForm from "./components/OrderForm"
import Home from "./components/Home"
import Success from "./components/Success"
import OrderFormT2 from "./components/OrderFormT2"
import HomeT2 from "./components/HomeT2"
import SuccessT2 from "./components/SuccessT2"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
export default function App(){


 
      

  return(
    <>
    <div>
      <Switch>
        <Route Path="/order">
          <OrderForm/>
        </Route>

        <Route Path="/success">
          <Success/>
        </Route>

        <Route Path="/">
          <Home/>
        </Route>

      </Switch>
    </div>


    <div className="T1">
    <h2>T1/Pizza + 🍕</h2>
    <OrderForm></OrderForm>
     <br></br>
     <br></br>
     <hr></hr>
     <br></br>
     <br></br>
     <Home></Home>
     <br></br>
     <br></br>
     <hr></hr>
     <br></br>
     <br></br>
     <Success></Success>
    </div>

    <div>
      <h1>T2/Pizza + 🍕</h1>
      <OrderFormT2></OrderFormT2>
      <br></br>
     <br></br>
     <hr></hr>
     <br></br>
     <br></br>
     <HomeT2></HomeT2>
     <br></br>
     <br></br>
     <hr></hr>
     <br></br>
     <br></br>
     <SuccessT2></SuccessT2>
    </div>
    </>
   
  )
}