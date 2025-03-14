import type { TFunction } from "i18next";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Home from "../pages/Home";
import Project from "../pages/Project";

export default function Routes({ t }: { t: TFunction }) {
  const [location] = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Switch>
      <Route path="/">
        <Home t={t} />
      </Route>
      <Route path="/project/:id">
        {(params) => <Project projectId={params.id} t={t} />}
      </Route>
    </Switch>
  )
}