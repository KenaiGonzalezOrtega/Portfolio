import type { TFunction } from "i18next";
import { Route, Switch } from "wouter";
import Home from "../pages/Home";
import Project from "../pages/Project";

export default function Routes({ t }: { t: TFunction }) {
  return (
    <Switch>
      <Route path="/">
        <Home t={t} />
      </Route>
      <Route path="/project/:id">
        {(params) => <Project projectId={params.id} />}
      </Route>
    </Switch>
  )
}