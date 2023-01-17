import { commentsActions } from "../reducers/comments";
import { apis } from "../../apis/apis";
import { call, put, takeEvery } from "redux-saga/effects";

export function* getCommentsData(action) {
  try {
    // *, yield saga에서 프로미스처리하기 위함
    const comments = yield call(apis.getComments);
    const pagenationComments = yield call(apis.getPagenation, action.payload);

    // put -> dispatch와 같은 역할
    yield put(commentsActions.getCommentsSuccess(comments.data));
    yield put(commentsActions.getPagenationSuccess(pagenationComments.data));
  } catch (error) {
    yield put(commentsActions.getCommentsError(error));
  }
}

export function* getCommentsSaga() {
  const { getComments } = commentsActions;
  yield takeEvery(getComments, getCommentsData);
}
