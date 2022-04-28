import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import "./App.css";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, { id: Math.random(), name: uName, age: uAge }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
