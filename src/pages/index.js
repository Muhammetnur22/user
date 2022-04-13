import React, {useEffect, useState} from "react"
import Layout from "../components/Layout";



// async function getUsers() {
//   let url = 'https://jsonplaceholder.typicode.com/users';
//   try {
//     let res = await fetch(url);
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function renderUsers() {
//   let users = await getUsers();
//   let html = '';
//   users.forEach(user => {
//     let htmlSegment = `<div class="user">
//     <h2>${user.name} ${user.username}</h2>
//     <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//     </div>`;
    
//     html += htmlSegment;
//   });
  
//   let container = document.querySelector('.container');
//   container.innerHTML = html;
// }
// renderUsers();

const Home = () =>{
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setUsers(res.users))
    .then(res =>console.log(res))
  },[])

  
  return (
      <Layout>
        
      </Layout>
    )
}

export default Home;

