import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import usersData from "./users.json";

function App() {
  return (
    <main>
      <h1>User List</h1>
      <UserList users={usersData} />
    </main>
  );
}

export default App;
