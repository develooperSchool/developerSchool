import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../components/User/service/userProfileService";
import { IUser } from "../../components/User/model/IUser";
import ILogin from "../../components/User/model/ILogin";

export const getUserByIdAction: any = createAsyncThunk(
  "getUserById",
  async (
    payload: { id: string },
    { rejectWithValue }
  ): Promise<IUser | any> => {
    try {
      const { id } = payload;
      let response = await UserService.getUserById(id);
      return response;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.res.data);
    }
  }
);

export const login: any = createAsyncThunk(
  "login",
  async (payload: ILogin, { rejectWithValue }): Promise<any> => {
    try {
      let response = await UserService.login(payload);
      return response;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.res.data);
    }
  }
);
