import { Route, Switch } from "wouter";
import Home from "../pages/Home";
import Proyect from "../pages/Proyect";
import type { TFunction } from "i18next";

export default function Routes({ t }: { t: TFunction }) {
  return (
    <Switch>
      <Route path="/">
        <Home t={t} />
      </Route>
      <Route path="/proyect/:id">
        {(params) => <Proyect proyectId={params.id} />}
      </Route>
    </Switch>
  )
}