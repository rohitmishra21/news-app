import { useEffect } from "react"
import { API_KEY, API_URL } from "../utils/config"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentData } from "../store/appSlice"


const useFetchData = (searchData) => {
    const dispatch = useDispatch()
    const apiData = useSelector((state) => state.currentData)
    const query = useSelector((state) => state.currentSearchData)

    useEffect(() => {
        fetchData()
    }, [query])

    async function fetchData() {
        const res = await fetch(API_URL + query + "&apiKey=" + API_KEY)
        const jasonRes = await res.json()
        dispatch(setCurrentData(jasonRes.articles))
    }
    return apiData
}

export default useFetchData