import React from "react";


const DataContext = React.createContext();

function DataProvider ({ children }) {
    
    return (
        <DataContext.Provider 
            value={{
                
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }