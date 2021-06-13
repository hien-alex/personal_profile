import {
  ContactBackground,
  ContactContainer,
  ContactContent,
} from "./ContactElements";
import Form from "react-bootstrap/Form";

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactBackground />
      <ContactContent>
        <Form>
          <div className="mb-3">
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input isValid />
              <Form.File.Label
                data-browse="Button text"
                style={{ color: "#fec89a" }}
              >
                Custom file input
              </Form.File.Label>
              <Form.Control.Feedback type="valid">
                You did it!
              </Form.Control.Feedback>
            </Form.File>
          </div>
          <div className="mb-3">
            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Regular file input</Form.File.Label>
              <Form.File.Input />
            </Form.File>
          </div>
        </Form>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
