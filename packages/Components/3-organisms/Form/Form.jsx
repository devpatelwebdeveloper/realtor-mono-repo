import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.scss"
import SingleUser from "../../2-molecules/SingleUser"

export default function Form() {
  const [details,setDetails]=useState({
    propertyId: uuidv4(), 
    propertyDetails:"",
    inputFields:[
        { id: uuidv4(), 
      firstName: "", 
      lastName: "" 
     }
    ]

  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", details);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = details.inputFields.map((i) => {
      
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setDetails({
      ...details,
      inputFields:[...newInputFields]
    });
  };

  const handleAddFields = (e) => {
    e.preventDefault();
 
    setDetails({
      ...details,
      inputFields:[...details.inputFields, { id: uuidv4(), firstName: "", lastName: "" }]
    })
  };

  const handleRemoveFields = (id) => {
    const values = [...details.inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    
    setDetails({
      ...details,
      inputFields:[...values]
    })
  };

  return (
    <>
      <form>
      <SingleUser name="property Name" value={details.propertyDetails} changeInput={(event)=>{setDetails({...details,propertyDetails:event.target.value})}}/>
        {details.inputFields.map((inputField) => (
          <React.Fragment key={inputField.id}>
            <SingleUser name="first Name" value={inputField.firstName} changeInput={(event) => handleChangeInput(inputField.id, event)}/>
            <SingleUser name="last Name" value={inputField.lastName} changeInput={(event) => handleChangeInput(inputField.id, event)}/>
             <button
              disabled={details.inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              Remove
            </button>
            <button onClick={handleAddFields}>Add another</button>
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