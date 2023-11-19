import axios from "axios";
import { IMentorRequest, Imentor } from "../Model/Imentor";

class MentorService {

    private static baseurl: string = `http://localhost:8080/api/v1/mentor`;

    public static getAllMentor(): Promise<{ data: Imentor[] }> {
        console.log(this.baseurl)
        const data = `${this.baseurl}/mentors`
        return axios.get(data)
    }

    public static addMentor = (body: IMentorRequest): Promise<{ data: Imentor }> => {
        //    console.log(this.baseurl)
        const data = `${this.baseurl}/addMentor`
        return axios.post(data, body)
    }

    // get mentor by id 
    public static getMentorById(id: string): Promise<{ data: Imentor }> {
        const data = `${this.baseurl}/mentor/${id}`
        return axios.get(data)
    }
         
    public static updateMentor(body: IMentorRequest, id: number): Promise<{ data: Imentor[] }> {
        console.log("id", id)
        console.log("body", body)
        const data = `${this.baseurl}/update/${id}`
        // await axios.put(data, body).then(res => console.log("respnse", res)).catch(err => console.log("err", err));
        return axios.put(data, body)
    }

    public static deleteMentor(id: string): Promise<{ data: {} }> {
        const data = `${this.baseurl}/delete/${id}`
        return axios.delete(data)
    }
};

export default MentorService;
