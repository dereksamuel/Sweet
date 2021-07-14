import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Button, Input, ButtonChange } from "./styles";

export default function ProfileForm({
  loading,
  onSubmit,
  title,
  onClick
}) {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <header>
        <ButtonChange type="button" onClick={onClick}>{title}</ButtonChange>
      </header>
      <Input
        type="email"
        autoComplete="off"
        name="campo"
        disabled={loading}
        placeholder="User or email address"
        {...email}
        required />
      <Input
        autoComplete="false"
        type="password"
        disabled={loading}
        placeholder="Password"
        required
        {...password} />
      <Button type="submit">
        { title === "Log In" ? "Register" : "Login" }
      </Button>
    </Form>
  );
}
