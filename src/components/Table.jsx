import { useEffect } from "react";
import { useState } from "react";
import { camelCaseHeader, filterData } from "../utils/helper";
import "./table.css";

const Table = ({ pageNumber, allEmployeeData }) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);

  useEffect(() => {
    if (allEmployeeData) {
      let data = filterData(allEmployeeData, pageNumber);
      setEmployeeData(data);
      if (columnHeaders.length === 0 && data.length !== 0) {
        let headers = Object.keys(data[0]).map((header) =>
          camelCaseHeader(header)
        );
        setColumnHeaders(headers);
      }
    }
  }, [pageNumber, allEmployeeData]);

  return (
    <>
      <div className="paper">
        <table className="data-table">
          <thead>
            <tr>
              {columnHeaders.map((header) => (
                <th key={header}>
                  {header === "id"
                    ? header.toUpperCase()
                    : camelCaseHeader(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
};

export default Table;
