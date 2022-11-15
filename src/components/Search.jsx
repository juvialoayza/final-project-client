import { useState } from "react"

function Search() {
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (event) => {
        setSearchInput(event.target.value)
        props.filterCaja(event.target.value)
    }
    return (
        <div>
            <h5>Search</h5>
            <input type="text" name="search" value={searchInput} onChange={handleChange} />
        </div>
    )
}

export default Search