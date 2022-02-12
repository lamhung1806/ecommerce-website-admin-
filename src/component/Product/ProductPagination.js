import React from "react";
import "./style.module.css";

function ProductPagination({
  totalPages,
  postPerPage,
  curentPage,
  downtPagination,
  upPagination,
}) {
  const pageNumbers = [];
  console.log(curentPage);
  for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
    pageNumbers.push(i);
  }
  // const Pagination = () => {
  //   upPagination();
  // };
  return (
    <nav>
      <ul className="row d-flex justify-content-end pr-5 m-0  ">
        {/* {pageNumbers.map((data, index) => (
          <li
            className="mr-3 justify-content-center curentpage  "
            onClick={() => {
              paginate(data);
            }}
            key={index}
          >
            {data}
          </li>
        ))} */}
        <i
          onClick={() => {
            downtPagination();
          }}
          className="fas fa-chevron-left mr-2 mt-1"
        ></i>
        <span className="text-success ">{curentPage}</span>/{pageNumbers.length}
        <i
          onClick={() => {
            upPagination();
          }}
          className="fas fa-chevron-right ml-2 mt-1"
        ></i>
      </ul>
    </nav>
  );
}

export default ProductPagination;
