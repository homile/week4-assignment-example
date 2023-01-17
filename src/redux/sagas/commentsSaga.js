import { commentsActions } from "../reducers/comments";
import { apis } from "../../apis/apis";
import { call, put, takeEvery } from "redux-saga/effects";

export function* getCommentsData() {
  try {
    // *, yield saga에서 프로미스처리하기 위함
    const response = yield call(apis.getComments);
    yield put(commentsActions.getCommentsSuccess(response.data));
  } catch (error) {
    yield put(commentsActions.getCommentsError(error));
  }
}

// // getComments 액션을 감지하는 saga
// function* watchGetComments() {
//   // getComments가 감지되면 getCommentsSaga를 호출한다.
//   yield takeLatest(commentsActions.getComments, getComments);
// }

export function* getCommentsSaga() {
  const { getComments } = commentsActions;
  yield takeEvery(getComments, getCommentsData)
}
