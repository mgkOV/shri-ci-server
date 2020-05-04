import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares: (SagaMiddleware | Middleware)[] = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const configureStore = (persistedState = {}) => {
  const store = createStore(
    rootReducer,
    { ...persistedState },
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
