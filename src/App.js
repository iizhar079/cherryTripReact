import Home from "./components/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Destination from "./Destination";
import Tour from "./components/tour";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/tour" component={Tour} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default App;