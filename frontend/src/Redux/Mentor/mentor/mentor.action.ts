import { createAsyncThunk } from "@reduxjs/toolkit";
import MentorService from "../../../components/mentor/Service/MentorService"
import { IMentorRequest, Imentor } from "../../../components/mentor/Model/Imentor";
import { constants } from "crypto";

export const getAllMentorAction: any = createAsyncThunk('Mentor/getAllMentorAction',
    async (payload: {}, { rejectWithValue }): Promise<Imentor[] | any> => {

        try {
            let res = await MentorService.getAllMentor()
            return res.data
        } catch (error: any) {
            if (!error.res) {
                throw error
            }
            return rejectWithValue(error.res.data)
        }
    });

// add mentor action 
export const addMentorAction: any = createAsyncThunk('Mentor/addMentorAction',
    async (payload: { body: IMentorRequest }, { rejectWithValue }): Promise<Imentor | any> => {
        try {
            const { body } = payload
            let res = await MentorService.addMentor(body)
            console.log("response", res.data)
            return res.data
        }
        catch (error: any) {
            if (!error.res) {
                throw error
            }
            return rejectWithValue(error.res.data)
        }
    }
);

// get mentor by id action 
export const getMentorByIdAction: any = createAsyncThunk('Mentor/getMentorByIdAction',
    async (payload: { id: string }, { rejectWithValue }): Promise<Imentor | any> => {
        try {
            const { id } = payload
            let res = await MentorService.getMentorById(id)
            return res.data
        }
        catch (error: any) {
            if (!error.res) {
                throw error
            }
            throw rejectWithValue(error.res.data)
        }
    }
)


// update mentor action 
export const updateMentorAction: any = createAsyncThunk('Mentor/updateMentorAction',
    async (payload: { body: IMentorRequest, id: number }, { rejectWithValue }): Promise<Imentor | any> => {
        try {
            const { body, id } = payload
            let res = await MentorService.updateMentor(body, id)
            return res.data
        } catch (error: any) {
            if (!error.res) {
                throw error
            }
            return rejectWithValue(error.res.data)
        }
    }
);

// deleteEmployeeAction 
export const deleteMentorAction: any = createAsyncThunk('Mentor/deleteMentorAction',
    async (payload: { mentorId: string }, { rejectWithValue }): Promise<Imentor | any> => {
        try {
            const { mentorId } = payload
            let res = await MentorService.deleteMentor(mentorId)
            return res.data
        }
        catch (error: any) {
            if (!error.res) {
                throw error
            }
            return rejectWithValue(error.res.data)
        }
    }
);



