import { all, takeLatest, put, call } from "redux-saga/effects";
import { SEARCH } from "../constants";
import { searchWithParamsSuccess, searchWithParamsFail } from "../actions";
import axios from "axios";
import { searchWithParamsApi } from "../api/nasaApi";

function* searchWithParams({ params }) {
  try {
    const res = yield call(() => axios(searchWithParamsApi(params)));
    const { items } = res.data.collection;
    yield localStorage.setItem("items", JSON.stringify(items));
    yield put(
      searchWithParamsSuccess(JSON.parse(localStorage.getItem("items")))
    );
  } catch (e) {
    yield put(searchWithParamsFail(e.message));
  }
}

function* watchSagas() {
  yield takeLatest(SEARCH.SEARCH, searchWithParams);
}

export default function* rootSaga() {
  yield all([watchSagas()]);
}
