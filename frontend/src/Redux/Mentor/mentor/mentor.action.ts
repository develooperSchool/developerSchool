import  {createAsyncThunk} from "@reduxjs/toolkit";
import MentorService from "../../../components/mentor/Service/MentorService"
import { Imentor } from "../../../components/mentor/Model/Imentor"; 

export const getAllMentorAction:any =createAsyncThunk ('Mentor/getAllMentorAction',
async(payload:{},{rejectWithValue}):Promise<Imentor[] | any > =>{

    try{
        let res =await MentorService.getAllMentor()
       return res.data
    }catch(error:any){
        if(!error.res){
            throw error
        }
        return rejectWithValue(error.res.data)
    }
});

// add mentor action 
export const addMentorAction:any = createAsyncThunk('Mentor/addMentorAction',
async(payload:{body:Imentor},{rejectWithValue}):Promise<Imentor | any> =>{
    try{
        const {body}=payload
let res= await MentorService.addMentor(body)
return res.data
    }
    catch(error:any){
      if(!error.res){
        throw error
      }
      return rejectWithValue(error.res.data)
    }
}
);

