import {createContext, useContext, useState} from "react";

const DataContext = createContext(null)

export const DataContextProvider = ({children}) => {
    const [users, setUsers] = useState({})
    const [responses, setResponses] = useState({})

    return (
        <DataContext.Provider
            value={{
                users,
                setUsers,
                responses,
                setResponses
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
export const useDataContext = () => {
    return useContext(DataContext);
}