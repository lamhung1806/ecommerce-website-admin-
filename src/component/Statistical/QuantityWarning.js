/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function QuantityWarning({ quantityWarningList }) {
  return (
    <div className="col col-4 ">
      <h3 className="title_product_warning text-warning">
        Product Quantity Warning
      </h3>
      <table className="table  table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col" className="sort" data-sort="name">
              Id
            </th>
            <th scope="col" className="sort" data-sort="budget">
              Name
            </th>
            <th scope="col" className="sort" data-sort="completion">
              Quantity
            </th>
          </tr>
        </thead>
        <tbody className="list list_product_warning">
          {quantityWarningList &&
            quantityWarningList.map((data) => (
              <tr key={data.id}>
                <td className="budget">{data.id}</td>
                <td className="budget">{data.name}</td>
                <td className="budget">{data.quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuantityWarning;
