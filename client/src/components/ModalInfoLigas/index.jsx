import React from "react"
import { createPortal } from "react-dom";
import './modalinfoligas.scss'


function ModalInfoLigas ({children}) {
    return (
        createPortal(
            <div className="modal--info-ligas" style={{display: children ? 'block' : 'none'}}>{children}</div>,
            document.getElementById('modal-info-ligas')
        )
    )
}

export { ModalInfoLigas }