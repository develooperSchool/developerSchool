import React, { useEffect, useState } from "react";
import { IMentorRequest, Imentor } from "../Model/Imentor";
import { AppDispatch, RootState } from "../../../Redux/Store";
import { useDispatch } from "react-redux";
import * as MentorReducer from "../../../Redux/Mentor/mentor/mentor.reducer";
import { useSelector } from "react-redux";
import * as MentorAction from "../../../Redux/Mentor/mentor/mentor.action";
import { Link, useNavigate, useParams } from "react-router-dom";

const GetAllMentor: React.FC = () => {
  // get method start
  const dispatch: AppDispatch = useDispatch();
  const mentorReduxState: MentorReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[MentorReducer.mentorFeatureKey];
    }
  );

  useEffect(() => {
    getAllMentors();
  }, []);

  const getAllMentors = () => {
    dispatch(MentorAction.getAllMentorAction());
  };
  // get method end

  // post method start
  const navigate = useNavigate();

  const [mentor, setmentor] = useState<IMentorRequest>({
    mentorId: "",
    mentorName: "",
    roleId: "",
    courseId: "",
    userId: "",
  });

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setmentor({
      ...mentor,
      [event.target.name]: event.target.value,
    });
  };
  const updateNavigate = useNavigate();
  const { id } = useParams();

  const [updateMentor, setUpdateMentor] = useState<IMentorRequest>({
    mentorId: "",
    mentorName: "",
    userId: "",
    roleId: "",
    courseId: "",
  });

  const submitMentorData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(mentor);
    dispatch(MentorAction.addMentorAction({ body: mentor })).then(
      (res: any) => {
        if (res && !res.error) {
          navigate("/getallmentor");
          getAllMentors();
        }
      }
    );
  };

  // post method end

  // update Mentor start

  const changeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUpdateMentor({
      ...mentor,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (id) {
      getMentorId(id);
    }
  }, [id]);

  useEffect(() => {
    if (mentor && Object.keys(mentor).length > 0) {
      setUpdateMentor({
        ...mentor,
        mentorName: mentor.mentorName,
        roleId: mentor.roleId,
        userId: mentor.userId,
        courseId: mentor.courseId,
      });
    }
  }, [mentor]);

  const getMentorId = (mentorId: string) => {
    dispatch(MentorAction.getMentorByIdAction({ mentorId: mentorId }));
  };

  const updateMentorForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(
      MentorAction.updateMentorAction({
        id: updateMentor.mentorId,
        body: updateMentor,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        navigate("/getallmentor");
        getAllMentors();
        // window.location.reload();
      }
    });
  };

  const getMentorData = (mentorId: string) => {
    let mentorForUpdate: Imentor[] = mentorReduxState.mentors.filter(
      (mentor) => {
        if (mentor.mentor_id === mentorId) return mentor;
      }
    );
    console.log("mentorForUpdate", mentorForUpdate);
    setmentor({
      ...mentor,
      mentorId: mentorForUpdate[0].mentor_id,
      mentorName: mentorForUpdate[0].mentor_name,
      roleId: mentorForUpdate[0].role_id,
      userId: mentorForUpdate[0].user_id,
      courseId: mentorForUpdate[0].course_id,
    });
  };

  // update Mentor end

  // delete mento start

  const deleteMentor = (mentorId: string) => {
    if (mentorId) {
      dispatch(MentorAction.deleteMentorAction({ mentorId: mentorId })).then(
        (res: any) => {
          if (res && !res.error) {
            getAllMentors();
          }
        }
      );
    }
  };

  // delete mentor end

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="text-warning fst-italic">Get All Mentor</h4>
            <p>
              Mentorship can offer numerous benefits for students, contributing
              to their personal, academic, and professional development. Here
              are some key :
            </p>
            <div className="mb-3">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addMentor"
                className="btn btn-success"
              >
                <i className="bi bi-plus-circle"></i>
                <span className="mx-1"> Add Mentor</span>
              </button>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <table className="table text-center table-striped table-hover">
                  <thead className="table-dark">
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
                    {mentorReduxState.mentors.map((mentor, index) => {
                      return (
                        <tr key={mentor.mentor_id}>
                          <td>{mentor.mentor_id}</td>
                          <td>{mentor.mentor_name}</td>
                          <td>{mentor.role_id}</td>
                          <td>{mentor.course_id}</td>
                          <td>{mentor.user_id}</td>
                          <td>
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#updateMentor"
                              className="btn btn-outline-primary"
                              onClick={() => getMentorData(mentor.mentor_id)}
                            >
                              {/* <Link to={`/update/${mentor.mentor_id}`}></Link> */}
                              <i className="bi-pencil-square"></i>
                            </button>

                            <button
                              onClick={(mentorId) =>
                                deleteMentor(mentor.mentor_id)
                              }
                              className="btn btn-outline-danger mx-2"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Mentor */}

      {/* add mentor modal   tabindex="-1" */}

      <div
        className="modal fade"
        id="addMentor"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <form onSubmit={(e) => submitMentorData(e)}>
                      <div className="card">
                        <div className="card-header h4 fst-italic bg-info">
                          Add Mentor
                        </div>
                        <div className="card-body">
                          <div className="form-group">
                            <label className="form-label">Mentor Id</label>
                            <input
                              name="mentorId"
                              value={mentor.mentorId}
                              onChange={(e) => changeInput(e)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          m
                          <div className="form-group">
                            <label className="form-label">Mentor Name</label>
                            <input
                              type="text"
                              name="mentorName"
                              value={mentor.mentorName}
                              onChange={(e) => changeInput(e)}
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Role Id</label>
                            <input
                              type="text"
                              name="roleId"
                              value={mentor.roleId}
                              onChange={(e) => changeInput(e)}
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Course Id</label>
                            <input
                              name="courseId"
                              value={mentor.courseId}
                              onChange={(e) => changeInput(e)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">User Id</label>
                            <input
                              name="userId"
                              value={mentor.userId}
                              onChange={(e) => changeInput(e)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group mt-4">
                            <button
                              data-bs-dismiss="modal"
                              className="btn btn-outline-info"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* update mentor modal  */}

      <div
        className="modal fade"
        id="updateMentor"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <form onSubmit={(e) => updateMentorForm(e)}>
                      <div className="card">
                        <div className="card-header h4 fst-italic bg-info">
                          Update Mentor
                        </div>
                        <div className="card-body">
                          <div className="form-group">
                            <label className="form-label">Mentor Id</label>
                            <input
                              name="mentorId"
                              value={updateMentor.mentorId}
                              onChange={(e) => changeInputValue(e)}
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            <label className="form-label">Mentor Name</label>
                            <input
                              name="mentorName"
                              value={updateMentor.mentorName}
                              onChange={(e) => changeInputValue(e)}
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            <label className="form-label">Role Id</label>
                            <input
                              name="roleId"
                              value={updateMentor.roleId}
                              onChange={(e) => changeInputValue(e)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Course Id</label>
                            <input
                              name="courseId"
                              value={updateMentor.courseId}
                              onChange={(e) => changeInputValue(e)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">User Id</label>
                            <input
                              name="userId"
                              value={updateMentor.userId}
                              onChange={(e) => changeInputValue(e)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group mt-4">
                            <button
                              className="btn btn-outline-info"
                              data-bs-dismiss="modal"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllMentor;
