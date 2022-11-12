import { createContext, useState, useEffect } from "react"
import { verifyService } from "../services/auth.services"

const AuthContext = createContext()

function AuthWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        authenticatorUser()
    }, [])

    const authenticatorUser = async () => {
        try {

            const response = await verifyService()
            console.log(response)

            setIsLoggedIn(true)
            setUser(response.data)
            setIsFetching(false)

        } catch (error) {
            console.log(error)
            setIsLoggedIn(false)
            setUser(null)
            setIsFetching(false)
        }

    }

    const passedContext = {
        isLoggedIn,
        user,
        authenticatorUser,
        setIsLoggedIn,
        setUser
    }

    if (isFetching === true) {
        return (
            <div className="App">
                <h3>... Validando al usuario</h3>
            </div>
        )
    }
    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthWrapper
}