export default function handleChange({ setPageNumber, pageNumber }) {
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="pagination">
      <button className="prevBtn" onClick={handlePreviousPage}>
        Previous Page
      </button>
      <button className="nextBtn" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
}
