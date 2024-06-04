import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/githubusers')
    .then((response) => {
      console.log(response.data);
      setUsers(response.data)
      
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    })
  },[])

  
  return (
    <>
      <div>Github users</div>
      <div>{users.length}</div>

      {
  users.map((user) => {
    return (
      <div key={user.id}>
        {/* <div>{user.node_id}</div> */}
        <div>{user.login}</div>
      </div>
    )
  })
}
    </>
  )
}

export default App
