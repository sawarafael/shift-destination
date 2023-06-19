import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Home } from "../pages";
import ClientRoutes from "./client.routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        {ClientRoutes.map((clientRoute, index) => (
          <Route
            key={index}
            path={clientRoute.path}
            element={<clientRoute.component />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
