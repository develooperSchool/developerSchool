import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../components/User/model/IUser";
import * as userAction from "../User/user.action";

export const UserFeatureKey: string = "userFeatureKey";

export interface InitialState {
  user: IUser;
  users: IUser[];
}

const initialState: InitialState = {
  user: {} as IUser,
  users: [] as IUser[],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(userAction.getUserByIdAction.fulfilled, (state, action) => {
      console.log("payload: ", action.payload);
      const { data } = action.payload;
      console.log("Data: ", data);
      state.user = data[0];
    });
  },
});
