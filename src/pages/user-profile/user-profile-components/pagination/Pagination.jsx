import "./Pagination.css";
function Pagination({
  totalPages,
  currentPage,
  handlePrevPaginate,
  handleNextPaginate,
}) {
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={handlePrevPaginate}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="current-page">
        {currentPage} of {totalPages}
      </span>
      <button
        className="pagination-btn"
        onClick={handleNextPaginate}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
