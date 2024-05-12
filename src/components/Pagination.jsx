import "./pagination.css";

const Pagination = ({ pageNumber, setPageNumber }) => {
  return (
    <>
      <div className="button-container">
        <button
          className="pagination-button"
          onClick={() => {
            if (pageNumber > 0) {
              setPageNumber((prevPageNumber) => prevPageNumber - 1);
            }
          }}
        >
          Previous
        </button>
        <button className="pagination">{pageNumber + 1}</button>
        <button
          className="pagination-button"
          onClick={() => {
            if (pageNumber < 4)
              setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
