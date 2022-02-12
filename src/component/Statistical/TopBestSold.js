/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

function TopBestSold({ bestSoldList }) {
  return (
    <div className="col col-4 ">
      <h3 className="title_product_warning text-warning">Top Best Sole</h3>
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
              Quantity Sold
            </th>
          </tr>
        </thead>
        <tbody className="list list_product_warning">
          {bestSoldList &&
            bestSoldList.map((data) => (
              <tr key={data.id}>
                <td className="budget">{data.id}</td>
                <td className="budget">{data.name}</td>
                <td className="budget">{data.sold}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopBestSold;
