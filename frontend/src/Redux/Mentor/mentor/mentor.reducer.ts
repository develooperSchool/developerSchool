import { createSlice } from "@reduxjs/toolkit";
import { Imentor } from "../../../components/mentor/Model/Imentor";
import * as MentorAction  from "../../Mentor/mentor/mentor.action"

export const mentorFeatureKey = "mentorFeature";

export interface InitialState{
    mentors:Imentor[],
    mentor:Imentor
};

const initialState :InitialState ={
    mentors: [] as Imentor [],
    mentor :{} as Imentor
}

export const MentorSlice = createSlice({
name:"MentorSlice",
initialState:initialState,
reducers:{},
extraReducers:(builder)=>{

    // getAllMentor 
builder.addCase(MentorAction.getAllMentorAction.fulfilled,(state,action)=>{
    state.mentors=action.payload
});

// add Mentor
builder.addCase(MentorAction.addMentorAction.fulfilled,(state,action)=>{
    state.mentor=action.payload
});

}

});
