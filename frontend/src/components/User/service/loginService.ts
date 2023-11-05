import axios from "axios";
import ILogin from "../model/ILogin";

class LoginService {
  private static baseUrl: string = `http://localhost:3000/api/v1/user`;

  public static login = async (data: ILogin): Promise<any> => {
    console.log(this.baseUrl);
    const result = await axios.post(`${this.baseUrl}/signin`, data);
    console.log("result", result);
    return result;
  };
}

export default LoginService;