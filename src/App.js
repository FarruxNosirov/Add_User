import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserListHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
