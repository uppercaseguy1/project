import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

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