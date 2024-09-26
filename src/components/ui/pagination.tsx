import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

interface PaginationProps {
  qttPerPage: number;
  totalItems: number;
  paginate: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  qttPerPage,
  totalItems,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / qttPerPage); i++) {
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
      <button onClick={() => handlePage("<<")}>
        <FaAngleLeft
          className={`text-slate-400 ${
            currentPage === 1 ? "" : "hover:text-primary"
          } `}
          size={25}
        />
      </button>
      <p>{currentPage}</p>
      <p>de</p>
      <p>{pageNumbers.length}</p>
      <p>páginas</p>
      <button onClick={() => handlePage(">>")} value=">>">
        <FaAngleRight
          className={`text-slate-400 ${
            currentPage === pageNumbers.length ? "" : "hover:text-primary"
          } `}
          size={25}
        />
      </button>
    </nav>
  );
};

export default Pagination;
