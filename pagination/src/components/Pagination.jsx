const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const newPageNumber = [];
    for (let i = 1; i < totalPages; i++) {
      newPageNumber.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return newPageNumber;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
