import React, { useEffect, useState } from 'react';
import { BarraNavegacionHorizontal } from '../BarraNavegacionHorizontal'
import { LigasPopulares } from '../LigasPopulares'
import './_app.scss'
import { ModalInfoLigas } from '../ModalInfoLigas';

function App() {

  return (
    <>
      <BarraNavegacionHorizontal />
      <LigasPopulares />
      <ModalInfoLigas>
        
      </ModalInfoLigas>
    </>
  )
}

export default App
