import axios from "axios";
import { useEffect, useState } from "react";


const Request = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getUsers()
    }, [])
    
  return (
     <>
        <ul>
            {
                users.map(user => <li>{user.name}</li>)
            }
        </ul>
     </>
  )
}

export default Request