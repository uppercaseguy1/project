import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

const Slider = () => {
  const images = [
    "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/049/855/296/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    "https://t4.ftcdn.net/jpg/04/39/89/01/360_F_439890152_sYbPxa1ANTSKcZuUsKzRAf9O7bJ1Tx5B.jpg",
    "https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg",
    "https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg",
    "https://www.pixground.com/wp-content/uploads/2023/05/Windows-11-Abstract-Grey-Bloom-4K-Wallpaper-1081x608.jpg",
    "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg",
    "https://c4.wallpaperflare.com/wallpaper/12/1008/45/earth-4k-best-desktop-download-wallpaper-preview.jpg",
    "https://images.unsplash.com/photo-1461696114087-397271a7aedc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
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
            <th>Emp No</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.empNo}</td>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>{item.department}</td>
              <td>{item.dob}</td>
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

const SearchResults = ({ data, searchTriggered }) => {
  return (
    <div className="search-results">
      {searchTriggered && (
        <>
          <h2>Search Results</h2>
          {data.length > 0 ? (
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Emp No</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>DOB</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.empNo}</td>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>{item.department}</td>
                    <td>{item.dob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
    { empNo: "101", name: "John Doe", position: "Software Engineer", department: "IT", dob: "1990-05-15" },
    { empNo: "102", name: "Jane Smith", position: "Project Manager", department: "Operations", dob: "1985-09-23" },
    { empNo: "103", name: "Robert Brown", position: "HR Manager", department: "HR", dob: "1980-11-12" },
    { empNo: "104", name: "Emily Johnson", position: "Marketing Specialist", department: "Marketing", dob: "1993-07-30" },
    { empNo: "105", name: "Michael Lee", position: "Data Analyst", department: "Finance", dob: "1992-02-14" },
    { empNo: "106", name: "Sarah White", position: "Software Developer", department: "IT", dob: "1995-06-20" },
    { empNo: "107", name: "David Black", position: "Network Engineer", department: "IT", dob: "1988-04-10" },
    { empNo: "108", name: "Emma Green", position: "Business Analyst", department: "Finance", dob: "1991-08-05" },
    { empNo: "109", name: "James Wilson", position: "Sales Manager", department: "Sales", dob: "1983-12-01" },
    { empNo: "110", name: "Olivia Adams", position: "Graphic Designer", department: "Marketing", dob: "1996-03-15" }
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