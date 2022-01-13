import React, {useRef} from 'react'
import axios from 'axios'
import "./index.css"

export default function Search({setUsers, setIsFirstTime, setIsLoading, setErrorMessage}) {

    const inputRef = useRef()
    const placeHolder = "Search Github users"

    const search = async () => {
        const {value} = inputRef.current
        setIsFirstTime(false)
        setIsLoading(true)
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response =>{
                setIsLoading(false)
                setUsers(response.data.items)
            },
            error =>{
                setIsLoading(false)
                setErrorMessage(error)
            }
        )
    }
    return (
        <div className="search-container">
            <h1 className="search-title">Search Github Users</h1>
            <input type="text" className="search-value" ref={inputRef} placeholder={placeHolder} />
            <button className="search-button" onClick={search}>Search</button>
        </div>
    )
}