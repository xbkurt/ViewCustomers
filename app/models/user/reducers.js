import {GET_ALL_USER_INFO_REQUEST_SUCCESS,GET_ALL_USER_INFO_REQUEST_FAILURE} from './actions';
import { selectedAssets } from "../../../util"

const initialState = {
  assetsProps: selectedAssets()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_INFO_REQUEST_SUCCESS: {
      const {assetsProps} = action.payload;
      return {
        assetsProps
      };
    }
    case GET_ALL_USER_INFO_REQUEST_FAILURE: {
      return []
    }
    default:
      return state;
  }
};

export {reducer};