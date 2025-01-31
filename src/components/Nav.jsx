import React from 'react'
import { navItems } from '../utils/arrayData'
import { useDispatch } from 'react-redux'
import { setSearchData } from '../store/appSlice'
const Nav = () => {

    const dispatch = useDispatch()
    function setQuery(e) {
        dispatch(setSearchData(e))

    }
    return (
        <div className='text-xl mt-8  flex justify-between'>
            {navItems.map((item) => (
                <div className='flex gap-2' key={item.id}>
                    <h1>{item.icon}</h1>
                    <h1 className='cursor-pointer' onClick={() => { setQuery(item.name) }}>{item.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Nav
