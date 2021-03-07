import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import {Route, Switch, Redirect} from "react-router-dom"
import Featurs from "./Featurs";
import Contact from "./Contact";
function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
      <Route exact path="/">
          <Main />
      </Route>
      <Route path="/featurs">
          <Featurs />
      </Route>
      <Route path="/contact">
          <Contact />
      </Route>
       <Route>
        <Redirect to="/" />
       </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
