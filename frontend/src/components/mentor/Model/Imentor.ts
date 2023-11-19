export interface Imentor{

    mentor_id:string;
    mentor_name:string;
    role_id:string;
    course_id:string;
    user_id:string 
};

export interface IMentorRequest {
    mentorId:string;
    mentorName:string;
    roleId:string;
    courseId:string;
    userId:string 
}
