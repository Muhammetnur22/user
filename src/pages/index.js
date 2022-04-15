import React from "react"
// State
import UsersState from "../context/UsersState";
// Components
import Users from "../components/Users";
import Auth from "../components/Auth"
// Style
import '../styles/main.css';

// Api url
const URL = process.env.GATSBY_API_URL;

const Home = ({ serverData }) => {
  const usersData = serverData.users;

  return (
    <UsersState>
      <div className="container">
        {usersData && <Users userData={usersData} />}
        <Auth />
      </div>
    </UsersState>
  )
}

// Initially fetches users data (SSR)
export async function getServerData() {
  const res = await fetch(URL)
  const data = await res.json()

  return {
    props: {
      users: data,
    },
  }
}

export default Home;
