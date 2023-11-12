import './iconocalendario.scss';

function IconoCalendario ({ type }) {
    return (
        <>
            <svg className={`svg--icon--calendar-${type}`} width="26" height="26" viewBox="0 0 26 26"  xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5833 4.33337H5.41667C4.22005 4.33337 3.25 5.30342 3.25 6.50004V21.6667C3.25 22.8633 4.22005 23.8334 5.41667 23.8334H20.5833C21.78 23.8334 22.75 22.8633 22.75 21.6667V6.50004C22.75 5.30342 21.78 4.33337 20.5833 4.33337Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.3333 2.16663V6.49996"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.66667 2.16663V6.49996" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.25 10.8334H22.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </>
    )
}

export { IconoCalendario }