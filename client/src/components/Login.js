import React from "react";
import { Form, Button } from "reactstrap";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <div>
      <Form>
        <Button outline color="success" className="googleBtn">
          <FontAwesomeIcon
            icon={["fab", "google"]}
            style={{ marginRight: "10px" }}
          />
          Signin with Google
        </Button>
        <Button outline color="primary" className="facebookBtn">
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            style={{ marginRight: "10px" }}
          />
          Signin with Facebook
        </Button>
      </Form>
    </div>
  );
};

export default Login;
