import React from "react";
import { APIKEY } from '../../main';

const DataContext = React.createContext();

function DataProvider ({ children }) {
    console.log(APIKEY);
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