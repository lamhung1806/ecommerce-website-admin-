/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch } from "react-redux";
import { oderstatus } from "../../../constains/config";
import { oderCancel, oderConfirm } from "../../redux/action/oderActions";
import "./style.css";

function OderdetailItem({ oderDetailData }) {
  const dispatch = useDispatch();
  const totalMoney = () => {
    if (oderDetailData.products) {
      const total = oderDetailData.products.reduce((initial, item, index) => {
        return (initial = initial + item.price * item.quantity);
      }, 0);
      return total;
    }
  };
  const handleConfirm = () => {
    dispatch(oderConfirm(oderDetailData.id));
  };
  const handleCancel = () => {
    dispatch(oderCancel(oderDetailData.id));
  };

  return (
    <tr>
      <td className="budget">{oderDetailData.id}</td>
      <td>
        <span className="badge badge-dot mr-4">
          {/* <i className="bg-success" /> */}
          <span className="Product">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">numerical order</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">price</th>
                  <th scope="col">quantity</th>
                </tr>
              </thead>
              <tbody>
                {oderDetailData.products &&
                  oderDetailData.products.map((item, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>
                        <img
                          className="img_oder"
                          src={`data:image/jpeg;base64,${item.image}`}
                        />
                      </td>
                      <td>{item.price} VND</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </span>
        </span>
      </td>
      <td className="total_money">{totalMoney()}</td>
      <td className="phone_oder">{oderDetailData.phone}</td>
      <td className="adress_oder">{oderDetailData.address}</td>
      <td className="create_on">{oderDetailData.createdOn}</td>
      <td className="update_on">{oderDetailData.updatedOn}</td>
      <td>
        {
          <span className="badge badge-dot mr-4">
            <i
              className={`bg-${
                oderstatus(oderDetailData.status || null).status
              }`}
            />
            <span className="status">
              {oderstatus(oderDetailData.status || null).msg}
            </span>
          </span>
        }
      </td>

      <td className="product_optinons">
        <div className="row">
          <button
            onClick={handleConfirm}
            type="button"
            className="btn btn-success btn-sm"
          >
            Confirm
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className="btn btn-danger btn-sm"
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}

export default OderdetailItem;
