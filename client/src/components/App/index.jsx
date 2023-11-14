import { useEffect, useState } from 'react';
import { BarraNavegacionHorizontal } from '../BarraNavegacionHorizontal'
import { LigasPopulares } from '../LigasPopulares'
import './_app.scss'

function App() {
  
  
  const [da, setDa] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3040/leagues')
      .then(res => res.json())
      .then(dat => {
        const topLigas = [dat.data[0]]
        setDa( topLigas);
        })
      .catch((error) => console.log(`tenemos errores de craga ${error}`));
  }, []);

  
  return (
    <>
      <BarraNavegacionHorizontal />
      <LigasPopulares />
      {da.map((liga) => (
        <img key={liga.id} src={liga.image_path
        } alt="" width='150px' height='150px' />
      ))}
    </>
  )
}

export default App
