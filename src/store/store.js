// import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

// export default function configureStore(preloadedState) {
//   const history = createBrowserHistory();
//   const store = createStore(rootReducer(history), preloadedState, applyMiddleware(thunkMiddleware));    
//   return store;
// }

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware.withExtraArgument];
  const store = createStore(
    rootReducer(),
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
  return store;
}
