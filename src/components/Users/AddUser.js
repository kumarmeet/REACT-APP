import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      userName.trim().length === 0 ||
      userAge.trim().length === 0 ||
      +userAge < 1
    ) {
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

  return (
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
  );
};

export default AddUser;
