import {
  ContactBackground,
  ContactContainer,
  ContactContent,
  ContactForm,
} from "./ContactElements";
import Form from "react-bootstrap/Form";

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactBackground />
      <ContactContent>
        <ContactForm />
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
