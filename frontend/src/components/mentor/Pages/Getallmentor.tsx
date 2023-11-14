import React, { useEffect, useState } from  "react";
import { Imentor } from "../Model/Imentor";
import { AppDispatch, RootState } from "../../../Redux/Store";
import { useDispatch } from "react-redux";
import * as MentorReducer from "../../../Redux/Mentor/mentor/mentor.reducer"
import { useSelector } from "react-redux";
import * as MentorAction from "../../../Redux/Mentor/mentor/mentor.action"
import { useNavigate } from "react-router-dom";


const GetAllMentor: React.FC =() =>{
// get method start 
 const dispatch: AppDispatch=useDispatch();
 const mentorReduxState:MentorReducer.InitialState =useSelector((state:RootState)=>{
    return state[MentorReducer.mentorFeatureKey]
 }) 

useEffect(()=>{
getAllMentors()
},[])

const getAllMentors=()=>{
    dispatch(MentorAction.getAllMentorAction())
};
// get method end 

// post method start 
const navigate =useNavigate();

const [mentor,setmentor]= useState<Imentor>({
    mentor_id: "",
    mentor_name:"",
    role_id:"",
    course_id:"",
    user_id:""
});

const changeInput =(event:React.ChangeEvent<HTMLInputElement>) =>{
    setmentor({
        ...mentor,
        [event.target.name]: event.target.value
    })
}

const submitMentorData=(event:React.FormEvent<HTMLFormElement>)=>{
    // event.preventDefault();
    console.log(mentor)
    dispatch(MentorAction.addMentorAction({body:mentor})).then((res:any)=>{
        if(res && !res.error){
            navigate('/getallmentor')
        }
    })
};

// post method end 


    return(

        <>
         <div className="container-fluid">
         <div className="row">
            <div className="col-lg-12">
            <h4 className="text-warning fst-italic">Get All Mentor</h4>
           <p>
            Mentorship can offer numerous benefits for students, contributing to their
            personal, academic, and professional development.
            Here are some key :
           </p>
           <div className="mb-3">
           <button type="button" data-bs-toggle="modal" data-bs-target="#addMentor" className="btn btn-success">
            <i className="bi bi-plus-circle"></i>
             <span className="mx-1"> Add Mentor</span></button>           
            </div> 
         </div>

    
         <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <table className="table text-center table-striped table-hover table-info">
                        <thead >
                              <tr>                        
                                <td>Mentor Id</td>
                                <td>Mentor Name</td>
                                <td>Role Id</td>
                                <td>Course Id</td>
                                <td>User Id</td>
                                <td>Actions</td>
                              </tr>
                        </thead>
                        <tbody>
                    
                        {
                          mentorReduxState.mentors.map((mentor,index)=>{
                             return(
                            <tr key={mentor.mentor_id}>
                                <td>{mentor.mentor_id}</td>
                                <td>{mentor.mentor_name}</td>
                                <td>{mentor.role_id}</td>
                                <td>{mentor.course_id}</td>
                                <td>{mentor.user_id}</td>                                
                                <td>

                            <button  className="btn btn-outline-primary">
                            <i className="bi-pencil-square" ></i>
                            </button>                                

                                <button className="btn btn-outline-danger mx-2">
                                <i className='bi bi-trash-fill'></i> 
                                </button>
                                </td>
                            </tr>
                        
                             )
                          })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
         </div>

            </div>
        </div>   

{/* Add Mentor */}

 

<hr />


{/* add mentor modal   tabindex="-1" */}
<hr />


<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMentor">
  Launch demo modal
</button>


<div className="modal fade" id="addMentor"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header"> 
      <div className="container">
    <div className="row">
        <div className="col-sm-12">
        <form onSubmit={(e)=>submitMentorData(e)}>

            <div className="card">
                <div className="card-header h4 fst-italic bg-info">
                  Add Mentor
                </div>
                <div className="card-body">
                     <div className="form-group">
                           <label className="form-label">Mentor Id</label>
                           <input 
                                name='mentor_id'
                                value={mentor.mentor_id}
                                onChange={(e)=>changeInput(e)}
                           type="text" className="form-control" />
                    </div>   

                    <div className="form-group">
                           <label className="form-label">Mentor Name</label>
                           <input type="text"
                              name='mentor_name'
                              value={mentor.mentor_name}
                              onChange={(e)=>changeInput(e)}
                           className="form-control" />
                    </div>   

                    <div className="form-group">
                           <label className="form-label">Role Id</label>
                           <input type="text"
                                name='role_id'
                                value={mentor.role_id}
                                onChange={(e)=>changeInput(e)}   
                           
                           className="form-control" />
                    </div>   
                    <div className="form-group">
                           <label className="form-label">Course Id</label>
                           <input
                                name='course_id'
                                value={mentor.course_id}
                                onChange={(e)=>changeInput(e)}   
                                                      
                           type="text" className="form-control" />
                    </div>   
                    <div className="form-group">
                           <label className="form-label">User Id</label>
                           <input 
                                name='user_id'
                                value={mentor.user_id}
                                onChange={(e)=>changeInput(e)}   
                                                      
                           type="text" className="form-control" />
                    </div>   
                    <div className="form-group mt-4">
                    <button data-bs-dismiss="modal" className="btn btn-outline-info">Submit</button>
                    </div>
                </div>
            </div>

                </form>
        </div>
    </div>
</div> 


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


{/* update mentor modal  */}

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateMentor">
  Launch demo modal
</button>


<div className="modal fade" id="updateMentor"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header"> 
      <div className="container">
    <div className="row">
        <div className="col-sm-12">
        <form action="">

            <div className="card">
                <div className="card-header h4 fst-italic bg-info">
                    Update Mentor
                </div>
                <div className="card-body">
                     <div className="form-group">
                           <label className="form-label">Mentor Id</label>
                           <input type="text" className="form-control" />
                    </div>   

                    <div className="form-group">
                           <label className="form-label">Mentor Name</label>
                           <input type="text" className="form-control" />
                    </div>   

                    <div className="form-group">
                           <label className="form-label">Role Id</label>
                           <input type="text" className="form-control" />
                    </div>   
                    <div className="form-group">
                           <label className="form-label">Course Id</label>
                           <input type="text" className="form-control" />
                    </div>   
                    <div className="form-group">
                           <label className="form-label">User Id</label>
                           <input type="text" className="form-control" />
                    </div>   
                    <div className="form-group mt-4">
                    <button className="btn btn-outline-info">Submit</button>
                    </div>


                </div>
            </div>

                </form>
        </div>
    </div>
</div> 


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



        </>
    )
};

export default GetAllMentor;
