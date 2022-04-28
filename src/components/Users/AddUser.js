import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age. (Non empty value)",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid input!",
        message:
          "Please enter a valid age. (Negative and zero age not allowed)",
      });
      return;
    }
    props.onAddUser(userName, userAge);

    setUserName("");
    setUserAge("");
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
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
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            onChange={userNameHandler}
            value={userName}
            id="username"
            type="text"
          />

          <label htmlFor="age">Age (in years)</label>
          <input
            onChange={userAgeHandler}
            value={userAge}
            id="age"
            type="number"
          />

          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
