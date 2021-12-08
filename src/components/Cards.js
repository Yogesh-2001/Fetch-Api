import React, { useState, useEffect } from 'react'
import Card from './Card'
import './cards.css';
import Spinner from './Spinner';
const Cards = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const Users = await data.json()
    setLoading(false)
    setUsers(Users)

  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers()
    }, 3000)
  }, [])

  const updateUser = (id, updatedData) => {
    setUsers(users.map((user) => user.id === id ? updatedData : user))
  }

  const deleteUser = (id) => {
    const filteredData = users.filter((user) => user.id !== id)
    setUsers(filteredData)
  }
  return (
    <>
      {loading ? (<Spinner />

      ) : <div className="row col-12">
        {
          users.map((user, index) => (
            <>
              <Card user={user} key={index} deleteUser={deleteUser} updateUser={updateUser} />
            </>
          ))
        }
      </div>}
    </>
  )
}

export default Cards
