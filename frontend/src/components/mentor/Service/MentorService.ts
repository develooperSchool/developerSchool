import axios from "axios";
import { Imentor } from "../Model/Imentor";

 class MentorService{

    private static baseurl:string = `http://localhost:8080/api/v1/mentor`;

    public static getAllMentor():Promise<{data:Imentor[]}>{
        console.log(this.baseurl)
        const data =`${this.baseurl}/mentors`
        return axios.get(data)
    }

    public static addMentor=(body:Imentor):Promise<{data:Imentor}>=>{
    //    console.log(this.baseurl)
       const data=`${this.baseurl}/addMentor`
       return axios.post(data,body)
    }

    public static updateMentor(body:Imentor,id:number):Promise<{data:Imentor []}>{
        const data=`${this.baseurl}/update/${id}`
        return axios.put(data,body)
    }

    public static deleteMentor(id:string):Promise<{data:{}}>{
        const data=`${this.baseurl}/delete/${id}`
        return axios.delete(data)
    }

};

export default MentorService;
