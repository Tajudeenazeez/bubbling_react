import React, { useState , useEffect} from 'react'

const SearchTerm = () => {
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
      if(!searchTerm) return;
    
      console.log("Calling the searchTerm") 
    }, [searchTerm])
    
    const handleSearchTermChange = ({target: {value}}) => {
        setSearchTerm(value);

    }
    
  return (
    <div>
        <input type="text" id="searchTerm" value={searchTerm} onChange={handleSearchTermChange}/>
    </div>
  )
}

export default SearchTerm