import React from "react"
import { createPortal } from "react-dom";
import { DataContext } from "../DataContext/DataContext";
import './_modalinfoligas.scss'




function ModalInfoLigas ({children}) {

    const { modalInfoLigas } = React.useContext(DataContext);

    return (
        createPortal(
            <div className={`${!modalInfoLigas ? "modal--info-ligas--open" : "transformYMenuMovil" }`} style={{display: modalInfoLigas ?'flex' : 'none'}}>{children}</div>,
            document.getElementById('modal-info-ligas')
        )
    )
}

export { ModalInfoLigas }