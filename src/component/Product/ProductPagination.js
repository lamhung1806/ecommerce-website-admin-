import React from "react";
import "./style.css";

function ProductPagination({ totalPages, postPerPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPages / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((data, index) => (
          <li
            className="mr-3 justify-content-center curentpage  "
            onClick={() => {
              paginate(data);
            }}
            key={index}
          >
            {data}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ProductPagination;
