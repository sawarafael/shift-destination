import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route key={1} path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
