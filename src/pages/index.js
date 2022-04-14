import React from "react"
// State
import UsersState from "../context/UsersState";
// Components
import Users from "../components/Users";
import Auth from "../components/Auth"
// Style
import  '../styles/main.css'

const Home = () => {
  return (
    <UsersState>
      <div className="container">
        <Users />
        <Auth />
      </div>
    </UsersState>
  )
}

export default Home;