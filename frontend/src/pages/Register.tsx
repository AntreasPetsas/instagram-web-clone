import { MutableRefObject, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Register = () => {
  const usernameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleRegister = async (
    event: React.MouseEvent<HTMLElement> | React.FormEvent
  ) => {
    const response = await fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    const body = await response.text();
  };

  return (
    <>
      <img src={logo} width="" height="" alt="instagram logo" />
      <Form onSubmit={(e) => handleRegister(e)}>
        <Form.Group className="d-flex">
          <Form.Label id="username">Username</Form.Label>
          <Form.Control
            type="username"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
            ref={usernameRef}
          />
        </Form.Group>

        <Form.Group className="d-flex">
          <Form.Label id="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            ref={passwordRef}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleRegister(e)}
        >
          Register
        </Button>

        <hr />
        <span>
          Already have an account?<Link to="/">Login</Link>
        </span>
      </Form>
    </>
  );
};

export default Register;
