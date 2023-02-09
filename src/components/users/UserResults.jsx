import React from 'react'
import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext.js'

function UserResults() {

    const {users, loading} = useContext(GithubContext)

    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)  // IN THE CONTEXT!!

    // useEffect(()=>{
    //     fetchUsers()
    // }, [])                   WAS FOR TESTING PURPOSES

    // const fetchUsers = async () => {
    //     const response = await fetch('https://api.github.com/users')
    //     const data = await response.json()

    //     setUsers(data)
    //     setLoading(false)
    // }                                        // MOVED TO CONTEXT!!!

    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user)=>(
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
          )
    } else {
        return <Spinner/>
    }
  
}

export default UserResults