import React, { useState } from "react";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

interface PaginationProps {
  examesPerPage: number;
  totalExames: number;
  paginate: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  examesPerPage,
  totalExames,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalExames / examesPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (typebutton: string) => {
    switch (typebutton) {
      case "<<":
        if (currentPage > 1) {
          paginate(currentPage - 1);
          setCurrentPage(currentPage - 1);
        }
        break;
      case ">>":
        if (currentPage < pageNumbers.length) {
          paginate(currentPage + 1);
          setCurrentPage(currentPage + 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <nav className="mx-4 mb-8 flex items-center justify-center gap-4 text-base font-semibold text-slate-700">
      <button
        className="rounded-md bg-blue-800 p-2 hover:bg-blue-600"
        onClick={() => handlePage("<<")}
      >
        <ImArrowLeft2 className="text-white" size={25} />
      </button>
      <p>{currentPage}</p>
      <p>-</p>
      <p>{pageNumbers.length}</p>
      <button
        className="rounded-md bg-blue-800 p-2 hover:bg-blue-600"
        onClick={() => handlePage(">>")}
        value=">>"
      >
        <ImArrowRight2 className="text-white" size={25} />
      </button>
    </nav>
  );
};

export default Pagination;
