import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, userage) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: username, age: userage, id: uuid() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
