import {takeEvery, put} from 'redux-saga/effects';
import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from './actions';

import { selectedAssets } from "../../../util"

function* handler() {
  yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

export const assetsProps = selectedAssets()

function* getAllUserInfo(action) {
  try {
    // API call
    yield put({
      type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
      payload: {
          assetsProps: assetsProps
      }
    });
  } catch (err) {
    // Handle error
    yield put({
      type: GET_ALL_USER_INFO_REQUEST_FAILURE,
      error
    });
  }
}

export {handler};