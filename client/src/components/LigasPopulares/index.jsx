import React from 'react';
import { ContenedorLigasPopulares } from '../ContenedorLigasPopulares';
import { DataContext } from '../DataContext/DataContext';
import { ListadoLigasPopulares } from '../ListadoLigasPopulares';
import './_ligaspopulares.scss';
import { BotonVerMasLigas } from '../BotonVerMasLigas';
import { Cargando } from '../Cargando';


function LigasPopulares () {

    const { dataTopLigas, loading } = React.useContext(DataContext);
    
   

    return (
        <>
            <section className='section--ligas-populares'>
                <ContenedorLigasPopulares>
                    {loading && <Cargando />}
                    {dataTopLigas.map((liga) => (
                        <ListadoLigasPopulares 
                            key={liga.id} 
                            img={liga.image_path} 
                            id={liga.id}
                            name={liga.name}
                            />
                    ))}
                    <BotonVerMasLigas />
                </ContenedorLigasPopulares>
            </section>
        </>
    )
}

export { LigasPopulares }