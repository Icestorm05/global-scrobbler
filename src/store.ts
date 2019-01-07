import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const configureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk),
    ));

    if (process.env.NODE_ENV !== "production" && module.hot) {
        module.hot.accept("./reducers", () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;
