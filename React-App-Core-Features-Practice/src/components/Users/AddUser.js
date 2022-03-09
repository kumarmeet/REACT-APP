import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      !enteredUserName.trim() ||
      !enteredUserAge.trim() ||
      +enteredUserAge < 1 ||
      +enteredUserAge > 110
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name age age (non empty values)",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);

    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}

      <Card cardClassName={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            name="age"
            onChange={userAgeChangeHandler}
            value={enteredUserAge}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
