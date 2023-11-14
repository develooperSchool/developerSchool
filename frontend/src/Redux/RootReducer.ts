import {combineReducers} from "@reduxjs/toolkit";
import * as UserReducer from "./User/user.reducer";
import * as MentorReducer from "./Mentor/mentor/mentor.reducer"
const rootReducer: any = combineReducers({
  [UserReducer.UserFeatureKey]: UserReducer.userSlice.reducer,
  [MentorReducer.mentorFeatureKey]:MentorReducer.MentorSlice.reducer
});
export default rootReducer;