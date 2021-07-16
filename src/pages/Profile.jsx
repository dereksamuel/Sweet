import React, { useContext } from "react";
import SubmitButton from "../components/SubmitButton/index.jsx";
import { Context } from "../Context.jsx";
import { Label } from "../components/ProfileForm/styles";
import jwt from "jsonwebtoken";
import Dog from "../components/Dog/index.jsx";
import HelmetMeta from "../components/HelmetMeta/index.jsx";

export default function Profile() {
  const { removeAuth } = useContext(Context);
  const decoded = jwt.decode(sessionStorage.getItem("currentUserToken"));
  const message = decoded ? decoded.email : "Not exist";

  return (
    <>
      <HelmetMeta
        title="profile"
        desc="Your information"
      />
      <Dog />
      <Label maxWidthDk="fit-content">
        <strong>UserName: </strong>{ message }
      </Label>
      <SubmitButton onClick={removeAuth}>Sign Out</SubmitButton>
    </>
  );
}
