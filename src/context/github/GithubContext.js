import { createContext, useReducer  } from "react";
import githubReducer from "./GithubReducer";
// const GITHUB_URL = 'https://api.github.com'

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)

    const initialState = {  
        users: [],
        user: {},
        repos: [],
        loading: false,

    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get initial users (testing purposes)
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text,
        }) 

        const response = await fetch(`https://api.github.com/search/users?${params}`)
        const {items} = await response.json()


        // setUsers(data)
        // setLoading(false)

        dispatch({
            type: 'GET_USERS', 
            payload: items
        })
    }

        // Clear Users

        const clearUsers = () => dispatch({type:'CLEAR_USERS'})



        // Set loading
        const setLoading = () => dispatch({type:'SET_LOADING'})

        // Get single user
        const getUser = async (login) => {
            setLoading()

            const response = await fetch(`https://api.github.com/users/${login}`)

            if (response.status === 404){
                window.location = '/notfound'
            } else {
                const data = await response.json()
            
                dispatch({
                    type: 'GET_USER', 
                    payload: data
                })
            }


        }

        // Get User Repos
        const getUserRepos = async (login) => {
            setLoading()

            const params = new URLSearchParams({
                sort: 'created',
                per_page: 10,
            }) 
    
            const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`)
            const data = await response.json()
    
            dispatch({
                type: 'GET_REPOS', 
                payload: data,
            })
        }
    

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;