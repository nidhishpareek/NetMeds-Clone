import React from 'react'
import { createContext } from 'react'
export const Data = createContext()

const DataContext = ({ children }) => {
    return (
        <Data.Provider>
            {children}
        </Data.Provider>
    )
}

export default DataContext