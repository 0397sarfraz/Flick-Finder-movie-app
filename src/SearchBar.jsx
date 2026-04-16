import React from 'react'

const SearchBar = ({ searchItem, setSearchItem, onSearch }) => {
    return (
        <div className="flex items-center bg-white rounded overflow-hidden">
            <input
                type="text"
                placeholder="Search..."
                value={searchItem}
                onChange={(e)=>{setSearchItem(e.target.value)}}
                className="px-3 py-2 text-black outline-none"
            />
            <button className="bg-red-600 px-4 py-2 text-white" onClick={() => onSearch(searchItem)}>Search</button>
        </div>
    )
}

export default SearchBar