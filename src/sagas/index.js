import { all, takeLatest, put, call } from "redux-saga/effects";
import { SEARCH, GET_DATA } from "../constants";
import {
  searchWithParamsSuccess,
  searchWithParamsFail,
  getDataSuccess,
  getDataFail,
} from "../actions";
import axios from "axios";
import { searchWithParamsApi, getDataApi } from "../api/nasaApi";
import { convertNasaData } from "../utils";

function* searchWithParams({ params }) {
  try {
    const res = yield call(() => axios(searchWithParamsApi(params)));
    const data = convertNasaData(res.data.collection.items);
    yield localStorage.setItem("data", JSON.stringify(data));
    yield put(
      searchWithParamsSuccess(JSON.parse(localStorage.getItem("data")))
    );
  } catch (e) {
    yield put(searchWithParamsFail(e.message));
  }
}

function* getData() {
  try {
    const res = yield call(() => axios(getDataApi()));
    const data = convertNasaData(res.data.collection.items);
    yield localStorage.setItem("data", JSON.stringify(data));
    yield put(getDataSuccess(JSON.parse(localStorage.getItem("data"))));
  } catch (e) {
    yield put(getDataFail(e.message));
  }
}

function* watchSagas() {
  yield takeLatest(SEARCH.SEARCH, searchWithParams);
  yield takeLatest(GET_DATA.GET_DATA, getData);
}

export default function* rootSaga() {
  yield all([watchSagas()]);
}
