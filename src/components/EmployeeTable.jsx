import Table from "./Table";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";

const EmployeeTable = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [allEmployeeData, setAllEmployeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setAllEmployeeData(data);
      })
      .catch((error) => window.alert("failed to fetch data"));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Employee Data Table</h1>
        {allEmployeeData.length > 0 && (
          <div>
            <Table pageNumber={pageNumber} allEmployeeData={allEmployeeData} />
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeTable;
