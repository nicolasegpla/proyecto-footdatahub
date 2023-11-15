import React, { useEffect, useState } from "react";


const DataContext = React.createContext();

function DataProvider ({ children }) {
    
    const [dataTopLigas, setDataTopLigas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3040/leagues')
      .then(res => res.json())
      .then(response => {
        const topLigas = [response.data[0]]
        setDataTopLigas( topLigas);
        })
      .catch((error) => console.log(`tenemos errores de craga ${error}`));
  }, []);

  
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