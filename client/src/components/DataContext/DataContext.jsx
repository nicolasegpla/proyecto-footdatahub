import React from "react";
import { useGetData } from "./useGetData";


const DataContext = React.createContext();

function DataProvider ({ children }) {
    
    //Esta linea de codigo nos trae todos los elementos que se requieran del customHook useGetData // 
    const { dataTopLigas } = useGetData();

  
    return (
        <DataContext.Provider 
            value={{
                dataTopLigas,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }