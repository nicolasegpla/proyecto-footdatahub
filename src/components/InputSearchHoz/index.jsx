import { IconSearch } from '../IconSearch'
import './inputsearchhoz.scss'

function InputSearchHoz () {
    return (
        <>
            <div className='div-layout'>
                <input className='div-layout__input' type="text" name="" id="" placeholder='Manchester city' />
                <IconSearch type={'input'} />
            </div>
        </>
    )
}

export { InputSearchHoz }