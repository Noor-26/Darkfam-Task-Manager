'use client'

const { createContext, useState, useContext, } = require("react")

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

export const GlobalProvider = ({children}) =>{
    const [selectedTheme, setselectedTheme] = useState('dark')

    return(
        <GlobalContext.Provider value={{selectedTheme}}>
        <GlobalUpdateContext.Provider value={{}}>
        {children}
        </GlobalUpdateContext.Provider>

        </GlobalContext.Provider>
    )

}

export const useGlobalState = () => useContext(GlobalContext) 
export const useGlobalUpdate = () => useContext(GlobalUpdateContext)
    