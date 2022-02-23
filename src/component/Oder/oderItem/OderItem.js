import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOderById } from "../../redux/action/oderActions";
import { oderstatus } from "../../../constains/config";

function OderItem({ data }) {
  const dispatch = useDispatch();
  const handleOderDetail = () => {
    dispatch(getOderById(data.id));
    localStorage.setItem("idOder", data.id);
  };
  return (
    <tr>
      <td className="budget">{data.id}</td>
      <td>
        <span className="badge badge-dot mr-4">
          <i className={`bg-${oderstatus(data.status).status}`} />
          <span className="status">{oderstatus(data.status).msg}</span>
        </span>
      </td>
      <td>
        <span className="badge badge-dot mr-4">
          <span className="status">{data.nameUser}</span>
        </span>
      </td>
      <td className="phone_oder">{data.phone}</td>
      <td className="adress_oder">{data.address}</td>
      <td className="product_optinons">
        <div className="row">
          <Link to="/oderManagement/oderDetails">
            <button
              onClick={handleOderDetail}
              type="button"
              className="btn btn-success btn-sm"
            >
              Detail
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default OderItem;
