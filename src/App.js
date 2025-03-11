import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      My React App
    </nav>
  );
};

const Slider = () => {
  const images = [
    "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/049/855/296/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={handlePrev}>◀</button>
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
      <button className="slider-button right" onClick={handleNext}>▶</button>
    </div>
  );
};

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.keyword}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SearchBar = ({ data, setFilteredData, setSearchTriggered }) => {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTriggered(query.length > 0);
    const filtered = data.filter((item) =>
      item.keyword.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by keyword..."
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

const SearchResults = ({ data, searchTriggered }) => {
  return (
    <div className="search-results">
      {searchTriggered && (
        <>
          <h2>Search Results</h2>
          {data.length > 0 ? (
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item.keyword} - {item.description}</li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </>
      )}
    </div>
  );
};

function App() {
  const sampleData = [
    { id: 1, keyword: "React", description: "A JavaScript library for building user interfaces" },
    { id: 2, keyword: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine" },
    { id: 3, keyword: "Express", description: "Fast, unopinionated, minimalist web framework for Node.js" },
    { id: 4, keyword: "MongoDB", description: "NoSQL database program using JSON-like documents" },
    { id: 5, keyword: "JavaScript", description: "High-level programming language used in web development" },
    { id: 6, keyword: "CSS", description: "Stylesheet language for describing the presentation of a document" },
    { id: 7, keyword: "HTML", description: "Standard markup language for creating web pages" },
    { id: 8, keyword: "Redux", description: "A predictable state container for JavaScript apps" },
  ];

  const [filteredData, setFilteredData] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);

  return (
    <div className="app-container">
      <Navbar />
      <Slider />
      <Table data={sampleData} />
      <SearchBar data={sampleData} setFilteredData={setFilteredData} setSearchTriggered={setSearchTriggered} />
      <SearchResults data={filteredData} searchTriggered={searchTriggered} />
    </div>
  );
}

export default App;