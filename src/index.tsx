import React from "react";
import ReactDOM from "react-dom";
import Router from "~/routes/Router";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

const render = () => ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("root"),
);

serviceWorker.register();

if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("~/routes/Router", () => {
        render();
    });
}

render();
