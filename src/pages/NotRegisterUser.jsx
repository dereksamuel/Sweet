import React, { useContext, useState } from "react";
import ProfileForm from "../components/ProfileForm/index.jsx";
import { Context } from "../Context.jsx";
import { useRegisterMutation } from "../hooks/useRegisterMutation.js";
import Loading from "../components/Loading/index.jsx";
import { Error } from "../components/ProfileForm/styles.js";
import { useLoginMutation } from "../hooks/useLoginMutation.js";

export default function NotRegisterUser() {
  const { activateAuth } = useContext(Context);
  const [showLogin, setShowLogin] = useState(true);
  const { mutation, mutationError, mutationLoading } = useRegisterMutation();
  const {
    mutation: login,
    mutationLoading: loginLoading,
    mutationError: loginError,
  } = useLoginMutation();

  const onSubmit = ({
    email,
    password
  }) => {
    const action = !showLogin ? mutation : login;
    action({
      variables: {
        input: {
          email,
          password
        },
      },
    }).then(activateAuth);
  };

  if (mutationLoading || loginLoading) return <Loading></Loading>;

  return (
    <>
      {
        showLogin ? <ProfileForm
          title="Register"
          loading={mutationLoading}
          onClick={() => setShowLogin(false)}
          onSubmit={onSubmit}></ProfileForm>
          : <ProfileForm
            title="Log In"
            onClick={() => setShowLogin(true)}
            loading={mutationLoading}
            onSubmit={onSubmit}></ProfileForm>
      }
      {
        mutationError
          && <Error>The user already exist or exist any error.</Error>
      }
      {
        loginError
          && <Error>The email or password is incorrect.</Error>
      }
    </>
  );
}
