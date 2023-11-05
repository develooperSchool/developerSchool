import React, { useEffect, useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { useParams } from "react-router-dom";
// import userProfileService from "../service/userProfileService";
import { AppDispatch, RootState } from "../../../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import * as UserReducer from "../../../Redux/User/user.reducer";
import * as UserAction from "../../../Redux/User/user.action";

const UserProfile = () => {
  const userId: string | undefined = useParams().id;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();
  const userReduxState: UserReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserReducer.UserFeatureKey];
    }
  );
  useEffect(() => {
    // console.log(userId);
    // if (userId !== undefined)
    //   userProfileService
    //     .getUserById(userId)
    //     .then((response) => {
    //       const { first_name, email_id, contact, gender } = response.data[0];
    //       setName(first_name);
    //       setEmail(email_id);
    //       setContact(contact);
    //       setGender(gender);
    //     })
    //     .catch((error) => console.log(error));

    getUserById(userId);
  }, []);

  const getUserById = (userId: string | any) => {
    dispatch(UserAction.getUserByIdAction({ id: userId }))
      .then((response: any) => {
        const { first_name, email_id, contact, gender } =
          response.payload.data[0];
        setName(first_name);
        setEmail(email_id);
        setContact(contact);
        setGender(gender);
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "2rem",
      }}
    >
      <div className="row form-border" style={{ width: "90%" }}>
        <div
          className="col-lg-4 d-flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3>Profile</h3>
          <PiUserCircleLight size={200} />
        </div>
        <div className="col-lg-8">
          <h3>Personal Details</h3>
          <div
            className="d-flex"
            style={{
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: "3rem",
            }}
          >
            <p
              style={{ display: "inline-block", width: "50%", height: "3rem" }}
            >
              <strong>Name:</strong> {name}
            </p>
            <p
              style={{ display: "inline-block", width: "50%", height: "3rem" }}
            >
              <strong>Email:</strong> {email}
            </p>
          </div>
          <div className="d-flex">
            <p
              style={{ display: "inline-block", width: "50%", height: "3rem" }}
            >
              <strong>Mobile:</strong> {contact}
            </p>
            <p
              style={{ display: "inline-block", width: "50%", height: "3rem" }}
            >
              <strong>Gender:</strong>
              {gender}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
