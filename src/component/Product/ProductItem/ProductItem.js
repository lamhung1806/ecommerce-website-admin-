/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAProducts } from "../../redux/action/ProductApiAction";
import { changeStatusForm } from "../../redux/action/statusFormAction";

function ProductItem(props) {
  const statusForm = useSelector((state) => state.statusFormReducer.status);
  const dispatch = useDispatch();
  const handleDelete = () => {
    props.handleDelete(props.data.id);
  };
  const getAproduct = () => {
    dispatch(getAProducts(props.data.id));
    if (statusForm !== true) {
      dispatch(changeStatusForm());
    }
  };
  return (
    <tr>
      <th scope="row">
        <div className="media align-items-center">
          <div className="avatar rounded-circle mr-3">
            <img
              alt="Image placeholder"
              src={`data:image/jpeg;base64,${props.data.image}`}
            />
          </div>
          <div className="media-body">
            <span className="name mb-0 text-sm">{props.data.name}</span>
          </div>
        </div>
      </th>
      <td className="budget">
        {props.data.promotionPrice.toLocaleString("vi-VN")} VND
      </td>
      <td>
        <span className="badge badge-dot mr-4">
          <i className="bg-success" />
          <span className="status">
            {" "}
            {props.data.price.toLocaleString("vi-VN")} VND
          </span>
        </span>
      </td>
      <td className="Product_color">{props.data.color}</td>
      <td className="product_descriptions">{props.data.description}</td>
      <td className="product_quantity">{props.data.quantity}</td>
      <td className="product_optinons">
        <div className="row">
          <button
            onClick={getAproduct}
            type="button"
            className="btn btn-warning btn-sm"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductItem;
