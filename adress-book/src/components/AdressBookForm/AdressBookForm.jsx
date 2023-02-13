import Input from "../Input/Input";
import { useState } from "react";
import "./AdressBookForm.css";

const AdressBookForm = (props) => {
  const [nameValue, setNameValue] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const handleNameChange = (value) => setNameValue(value);
  const handleLastNameChange = (value) => setLastNameInput(value);
  const handlePhoneChange = (value) => setPhoneInput(value);

  const handleSubmit = () => {
    if (!nameValue) {
      console.log("veikia");
      return;
    }

    const newAdress = {
      firstName: nameValue,
      lastName: lastNameInput,
      phone: phoneInput,
    };

    props.onSubmit(newAdress);
  };

  return (
    <div className="adress-book-form">
      <Input
        label="First name:"
        id="firstName"
        htmlFor="firstName"
        onChange={handleNameChange}
      />
      <Input
        label="Last name:"
        id="lastName"
        htmlFor="lastName"
        onChange={handleLastNameChange}
      />
      <Input
        label="Phone Number:"
        id="phone"
        htmlFor="phone"
        onChange={handlePhoneChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AdressBookForm;
