import axios from "axios";
import { IUser } from "../model/IUser";

class UserService {
  private static baseUrl: string = `http://localhost:8080/api/v1/user`;

  public static getUserById = async (id: string): Promise<IUser | any> => {
    console.log(this.baseUrl);
    const result = await axios.get(`${this.baseUrl}/${id}`);
    console.log("result", result);
    return result;
  };
}

export default UserService;

