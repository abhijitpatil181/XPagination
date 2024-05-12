import Table from "./Table";
import Pagination from "./Pagination";
import { useState } from "react";

const EmployeeTable = () => {
  const [pageNumber, setPageNumber] = useState(0);

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
        <Table pageNumber={pageNumber} />
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
};

export default EmployeeTable;
