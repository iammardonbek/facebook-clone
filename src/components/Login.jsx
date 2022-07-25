import { Container, Form, Title } from "./Style";
import { useContext, useState } from "react";
import { LoginContext } from "./Contexts";

export const Login = () => {
  const [login, setLogin] = useContext(LoginContext);
  const [errorMessage, setErrorMessage] = useState("");
  var transfer = (event) => {
    const database = [
      {
        username: "mardonbek1999@gmail.com",
        password: "(3165416)",
      },
    ];
    event.preventDefault();
    var { pass } = document.forms[0];

    if (database[0].password === pass.value) {
      return setLogin(true);
    } else {
      setErrorMessage("Invalid Username or Password");
    }
  };
  return (
    <Container>
      <div className="animate__animated animate__fadeInLeft">
        <Title>facebook</Title>
        <Form>
          <input name="uname" placeholder="Your Email" type="email" required />
          <input
            name="pass"
            placeholder="Your Password"
            type="password"
            required
          />
          {errorMessage && <p>{errorMessage} </p>}
          <button onClick={transfer}>login</button>
        </Form>
      </div>
    </Container>
  );
};
