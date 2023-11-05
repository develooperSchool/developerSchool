import axios, { Axios } from "axios"
import { Icourse } from "../model/Icourse"

export class CoursesService{


private static serverUrl:string="http://localhost:3000/course"


public static getAllCourse=():Promise<{data:Icourse[]}>=>{
    const dataUrl=`${this.serverUrl}/`
    return axios.get(dataUrl)
}

public static getByid=(id:number):Promise<{data:Icourse}>=>{
   const dataUrl = `${this.serverUrl}/${id}`
   return axios.get(dataUrl)
}

public static createCourse = (body:Icourse):Promise<{data:Icourse}> =>{
  const dataUrl  = `${this.serverUrl}/add`
  return axios.post(dataUrl,body)
}

public static updateCourse = (id:number , body:Icourse):Promise<{data:Icourse[]}>=>{
    const dataUrl = `${this.serverUrl}/update/${id}`
    return axios.put(dataUrl,body)
}

public static deleteCourse = (id:string) =>{
  const dataUrl = `${this.serverUrl}/delete/${id}`
  return axios.delete(dataUrl)
}
 
}