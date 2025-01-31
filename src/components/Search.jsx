import { useDispatch, useSelector } from "react-redux"
import { setSearchData } from "../store/appSlice"



const Search = () => {
    const dispatch = useDispatch()
    const query = useSelector((state) => state.currentSearchData)
    
    return (
        <div className='mt-10 flex items-center'>
            <input type="text"
                onChange={(e) => dispatch(setSearchData(e.target.value))}
                value={query}
                placeholder='Search News'
                className='w-full outline-none px-2 py-3 border-gray-400 border' />
            <button className='bg-slate-200 px-8 font-semibold text-gray-900  py-3.5'>Search</button>
        </div>
    )
}

export default Search
