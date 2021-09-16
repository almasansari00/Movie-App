import React from "react";

const SearchBox = (props) => {
    
    return(
        <div className="search-form">
            <input type="text" id="search" class="search" 
            placeholder="Search Movie.."
             value={props.searchValue}
             onChange={props.handleSearchInput}/>

            <button id="btnSearch" type="button" onClick={props.handleSearchBtn}>
                Search
            </button>
        </div>
    )
}
//onChange={(event)=> (props.handleSearchInput(event.target.value)
export default SearchBox;