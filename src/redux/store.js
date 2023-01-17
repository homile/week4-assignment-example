import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { all } from "redux-saga/effects";
import comments from "./reducers/comments";
import { getCommentsSaga } from "./sagas/commentsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { comments: comments },
  middleware: [sagaMiddleware, logger],
  devTools: process.env.NODE_ENV !== "production",
});

function* rootSaga() {
  yield all([getCommentsSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
