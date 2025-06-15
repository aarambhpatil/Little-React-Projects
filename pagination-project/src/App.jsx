import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const data = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * itemsPerPage;
  const paginatedItems = data.slice(offset, offset + itemsPerPage);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-[300px]">
        {paginatedItems.map((item) => (
          <h1>Item #{item}</h1>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={5}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={
          "flex justify-center gap-3 items-center font-poppins text-xs cursor-pointer"
        }
        activeClassName={
          "bg-transparent border-b-4 border-gray-800 text-white rounded-lg font-medium py-2 cursor-pointer"
        }
        pageLinkClassName={
          "bg-transparent text-gray-800 border border-gray-800 rounded-lg font-medium px-3 py-2 cursor-pointer"
        }
        previousLinkClassName={
          "bg-gray-800 text-white lg:px-4 px-3 text-xs lg:text-base py-2 rounded-lg font-medium cursor-pointer"
        }
        nextLinkClassName={
          "bg-gray-800 text-white lg:px-4 px-3 text-xs lg:text-base py-2 rounded-lg font-medium cursor-pointer"
        }
        disabledClassName={"pointer-events-none opacity-50"}
      />
    </>
  );
};
export default App;
