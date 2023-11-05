import React, { useEffect, useState } from 'react'
import { Icourse } from '../model/Icourse'
import {CoursesService} from "../service/courseService"


interface Istate{
    allcourse:Icourse[]
}

const Getallcourse:React.FC = () => {

const [course,setcourse] = useState<Istate>({
    allcourse:[]
})


useEffect(()=>{
    dataFromserver()
},[])


const dataFromserver=()=>{
  CoursesService.getAllCourse().then((res)=>{
     setcourse({
        ...course,
        allcourse:res.data
     })
  }).catch((error)=>{
    console.log(error)
  })
}

  return (
    <div>
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                  {
                    course.allcourse.map((newcourse,index)=>{
                        return(
                            <div className="card">
                    <img className="card-img-top" src="https://imgs.search.brave.com/3Vy9urP1Hp9hMvDvcLs8TKrHCNcXRw8y2zAYpDTDOLo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/NTA1NjYxMi9waG90/by9jb2RpbmctbGF0/ZS1pbnRvLXRoZS1u/aWdodC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9MFlTck03/NmhnNF85Q2l2a0V3/aEhPa3lKWldNaVYt/NGdKak9mS2VFNHFV/cz0" alt="Title"/>
                    <div className="card-body">
                        <h4 className="card-title">{newcourse.course_name}</h4>
                        <p className="card-text">{newcourse.course_duration}</p>
                        <p className="card-text">{newcourse.course_fees}</p>

                    </div>
                  </div>   
                        )
                    })
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Getallcourse






