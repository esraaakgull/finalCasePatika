import {createContext, useContext, useEffect, useState} from "react";
import {adminPages, userPages} from "../constants/pages";

const AppContext = createContext(null)

export const AppContextProvider = ({children}) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [displayedPages, setDisplayedPages] = useState({})
    const USER = 'kodluyoruz'
    const PASSWORD = 'bootcamp109'

    useEffect(() => {
        setDisplayedPages(isAdmin ? adminPages : userPages)
    }, [isAdmin, setIsAdmin])

    const getPages = () => {
        return displayedPages
    }

    return (
        <AppContext.Provider value={{
            isAdmin,
            setIsAdmin,
            displayedPages,
            USER,
            PASSWORD,
            getPages
        }}>
            {children}
        </AppContext.Provider>

    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}