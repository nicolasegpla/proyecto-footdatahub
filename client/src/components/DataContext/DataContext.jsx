import React, { useState } from "react";
import { useGetData } from "./useGetData";


const DataContext = React.createContext();

function DataProvider ({ children }) {
    
    
    //Esta linea de codigo nos trae todos los elementos que se requieran del customHook useGetData // 
    const { dataTopLigas, getLeagueById, getAllLeagues, loading, modalInfoLigas, setModalInfoLigas } = useGetData();

  
    function cerrarModalInfoLigas() {
        setModalInfoLigas(false);
        console.log('tulus')
    }

    return (
        <DataContext.Provider 
            value={{
                dataTopLigas,
                getLeagueById,
                getAllLeagues,
                loading,
                modalInfoLigas,
                setModalInfoLigas,
                cerrarModalInfoLigas,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }