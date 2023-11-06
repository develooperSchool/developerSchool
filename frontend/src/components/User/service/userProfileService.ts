import axios from "axios";
import { IUser } from "../model/IUser";
import ILogin from "../model/ILogin";

class UserService {
  private static baseUrl: string = `http://localhost:8080/api/v1/user`;

  public static getUserById = async (id: string): Promise<IUser | any> => {
    return await axios.get(`${this.baseUrl}/${id}`);
  };

  public static login = async (data: ILogin): Promise<IUser | any> => {
    return await axios.post(`${this.baseUrl}/signin`, data);
  };
}

export default UserService;

