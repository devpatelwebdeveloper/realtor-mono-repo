import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.scss"
import SingleUser from "../../2-molecules/SingleUser"

export default function Form() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), 
      firstName: "", 
      lastName: "" 
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = (e) => {
    e.preventDefault();
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "" }
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <>
      <form>
        {inputFields.map((inputField) => (
          <React.Fragment key={inputField.id}>
            <SingleUser name="first Name" value={inputField.firstName} changeInput={(event) => handleChangeInput(inputField.id, event)}/>
            <SingleUser name="last Name" value={inputField.lastName} changeInput={(event) => handleChangeInput(inputField.id, event)}/>
            {/* <button
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              Remove
            </button>
            <button onClick={handleAddFields}>Add another</button> */}
            <hr />
          </React.Fragment>
        ))}
        <br />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </>
  );
}