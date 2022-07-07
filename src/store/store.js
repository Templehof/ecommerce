/* import { compose, applyMiddleware } from "redux"; */
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middlewares = [logger];

/*const composedEnhancers = compose(applyMiddleware(...middlewares)); */

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
