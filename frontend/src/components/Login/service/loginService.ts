import axios from "axios";
import ILogin from "../model/ILogin";

export class LoginService {
  private static baseUrl: string = `http://localhost:3000/user`;

  public static login = (data: ILogin): Promise<any> => {
    return axios.post("/");
  };
}
