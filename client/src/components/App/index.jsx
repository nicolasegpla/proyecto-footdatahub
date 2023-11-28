import React, { useContext, useEffect, useState } from 'react';
import { BarraNavegacionHorizontal } from '../BarraNavegacionHorizontal'
import { LigasPopulares } from '../LigasPopulares'
import './_app.scss'
import { ModalInfoLigas } from '../ModalInfoLigas';
import { DataContext } from '../DataContext/DataContext';

function App() {

  const { modalInfoLigas } = React.useContext(DataContext);
 
  return (
    <>
      <BarraNavegacionHorizontal />
      <LigasPopulares />
      <ModalInfoLigas>
          { modalInfoLigas && <LigasPopulares /> }
      </ModalInfoLigas>
    </>
  )
}

export default App
