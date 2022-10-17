import { MutableRefObject, useRef, useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
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
    event.preventDefault();

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
  };

  return (
    <>
      <img src={logo} width="auto" height="" alt="instagram logo" />
      <Form onSubmit={(e) => handleRegister(e)}>
        <Form.Group className="d-flex">
          <FloatingLabel controlId="username" label="Username" className="mb-3">
            <Form.Control
              type="username"
              placeholder="Mary Poppins"
              value={formData.username}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
              ref={usernameRef}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="d-flex">
          <FloatingLabel controlId="password" label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Secure Password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              ref={passwordRef}
            />
          </FloatingLabel>
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
