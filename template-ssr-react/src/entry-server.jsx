import { renderToString } from 'react-dom/server'
import Router from "./Router";
import { StaticRouter } from "react-router-dom/server";

export function render({path}) {
    console.log({path})
  const html = renderToString(
      <StaticRouter basename="hotel" location={path}>
          <Router />
      </StaticRouter>,
  )
  return { html }
}
