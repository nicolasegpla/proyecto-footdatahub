import { IconSearch } from '../IconSearch'
import './_botonsearch.scss';


function BotonSearch () {
    return (
        <>
            <div className='div--boton-search'>
                <IconSearch type={'search'} />
                <label className='div--boton-search__label'>Buscar</label>
            </div>
        </>
    )
}

export { BotonSearch }