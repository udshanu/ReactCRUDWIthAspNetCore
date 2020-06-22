import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store = createStore(
    {},
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );