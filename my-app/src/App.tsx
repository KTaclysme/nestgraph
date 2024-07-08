import React from "react"
import Users from "./Users/Users";
import AddUser from "./Users/AddUsers";
import TaskForm from "./Tasks/TaskForm";
import TaskList from "./Tasks/TaskList";
import DeleteUser from "./Users/DeleteUsers";

export default function App() {

  return (
    <div>
      <h1>GRAPHQL</h1>
      <Users/>
      <AddUser/>
      <DeleteUser/>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}
