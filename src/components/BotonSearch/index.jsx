import { IconSearch } from '../IconSearch'
import './botonsearch.scss';


function BotonSearch () {
    return (
        <>
            <div className='div--boton-search'>
                <IconSearch />
                <label className='div--boton-search__label'>Search</label>
            </div>
        </>
    )
}

export { BotonSearch }