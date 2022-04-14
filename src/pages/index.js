import React from "react"
// State
import UsersState from "../context/UsersState";
// Components
import Users from "../components/Users";
import Popup from "../components/Popup"
// Style

const Home = () => {
  return (
    <UsersState>
      <Users />
      {/* <Popup/>  */}
    </UsersState>
  )
}

export default Home;