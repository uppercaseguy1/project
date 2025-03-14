import React from "react";
import "../App.css";

const SearchBar = ({ data, setFilteredData, setSearchTriggered }) => {
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchTriggered(query.length > 0);
        const filtered = data.filter((item) =>
            Object.values(item).some(value =>
                value.toLowerCase().includes(query)
            )
        );
        setFilteredData(filtered);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;