import React from 'react';
import { ContenedorLigasPopulares } from '../ContenedorLigasPopulares';
import { DataContext } from '../DataContext/DataContext';
import { ListadoLigasPopulares } from '../ListadoLigasPopulares';
import './ligaspopulares.scss';
import { BotonVerMasLigas } from '../BotonVerMasLigas';


function LigasPopulares () {

    const { dataTopLigas } = React.useContext(DataContext);

    return (
        <>
            <section className='section--ligas-populares'>
                <ContenedorLigasPopulares>
                    {dataTopLigas.map((liga) => (
                        <ListadoLigasPopulares key={liga.id} img={liga.image_path} />
                    ))}
                    <BotonVerMasLigas />
                </ContenedorLigasPopulares>
            </section>
        </>
    )
}

export { LigasPopulares }