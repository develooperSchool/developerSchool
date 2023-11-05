import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../components/User/service/userProfileService";
import { IUser } from "../../components/User/model/IUser";

export const getUserByIdAction: any = createAsyncThunk(
  "getUserById",
  async (
    payload: { id: string },
    { rejectWithValue }
  ): Promise<IUser | any> => {
    try {
      const { id } = payload;
      let response = await UserService.getUserById(id);
      console.log(response);
      return response;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.res.data);
    }
  }
);
