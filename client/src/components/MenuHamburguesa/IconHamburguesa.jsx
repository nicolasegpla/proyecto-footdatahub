import './_menuhamburguesa.scss'
function IconHamburguesa() {
    return (
        <>
            <svg className='svg--icon-ham' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="#333333" strokeWidth="2" strokeinecap="round" strokeinejoin="round"/>
            <path d="M3 18H21" stroke="#333333" strokeWidth="2" strokeinecap="round" strokeinejoin="round"/>
            </svg>
        </>
    )
}

export { IconHamburguesa }