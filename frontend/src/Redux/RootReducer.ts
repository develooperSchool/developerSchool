import {combineReducers} from "@reduxjs/toolkit";
import * as UserReducer from "./User/user.reducer";

const rootReducer: any = combineReducers({
  [UserReducer.UserFeatureKey]: UserReducer.userSlice.reducer,
});
export default rootReducer;