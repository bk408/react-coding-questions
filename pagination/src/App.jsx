import { useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
  ];

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  // calculate the subset of data to display on the page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="app">
      <h2>Pagination</h2>

      {currentData.map((item, index) => (
        <p key={index}> {item} </p>
      ))}

      <Pagination
        currentPage={currentPage}
        onPageChange={handleCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
