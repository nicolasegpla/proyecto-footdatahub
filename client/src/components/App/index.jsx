import React, { useContext, useEffect, useState } from 'react';
import { BarraNavegacionHorizontal } from '../BarraNavegacionHorizontal'
import { LigasPopulares } from '../LigasPopulares'
import './_app.scss'
import { ModalInfoLigas } from '../ModalInfoLigas';
import { DataContext } from '../DataContext/DataContext';
import { Cerrar } from '../Cerrar';
import { ModuloInfoLigas } from '../ModuloInfoLiga';

function App() {

  const { modalInfoLigas } = React.useContext(DataContext);
 
  return (
    <>
      <BarraNavegacionHorizontal />
      <LigasPopulares />
      <ModuloInfoLigas />
      
    </>
  )
}

export default App
