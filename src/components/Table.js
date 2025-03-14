import React from "react";
import "../App.css";

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

export default Table;