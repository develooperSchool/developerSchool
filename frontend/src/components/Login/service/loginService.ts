import axios from "axios";

export class LoginService {
  private static baseUrl: string = `http://localhost:3000/user`;

  public static login = (username: string, password: string): Promise<any> => {
    return axios.post("/");
  };
}
