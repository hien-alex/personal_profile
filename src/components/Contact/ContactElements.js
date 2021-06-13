import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { Button } from "@material-ui/core";
import "../../css/Contact.css";

export const ContactBackground = styled.div`
  height: 90vh;
  top: 0;
  width: 100%;
  background: #e5e5e5;
  position: absolute;
`;

export const ContactContainer = styled.div`
  background: black;
  position: relative;
  // z-index: 1;
`;

export const ContactContent = styled.div`
  justify-content: center;
  text-align: center;
  position: absolute;
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin-top: 4vh;
`;

export const ContactForm = () => {
  return (
    <Form className="mainCol">
      <Form.Group className="text-left">
        <label style={{ fontSize: "6rem" }}>Let's talk</label>
        <div className="formInputs">
          <label style={{ fontSize: "2rem" }}>Full Name</label>
          <Form.Control type="text" placeholder="Full Name"></Form.Control>
        </div>
        <div className="formInputs">
          <label style={{ fontSize: "2rem" }}>Email</label>
          <Form.Control type="email" placeholder="Email Address"></Form.Control>
        </div>
        <div className="formInputs">
          <label style={{ fontSize: "2rem" }}>Message</label>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="Enter Message..."
          ></Form.Control>
        </div>
      </Form.Group>
      <Button size="large" color="inherit" variant="text" disabled={false}>
        Send
      </Button>
    </Form>
  );
};
