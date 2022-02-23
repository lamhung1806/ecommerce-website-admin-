import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import convertBase64 from "../../../constains/convertBase64";
import { changeStatusForm } from "../../redux/action/statusFormAction";
import {
  addProducts,
  updateProducts,
} from "../../redux/action/ProductApiAction";
import "./productForm.css";

function ProductForm() {
  const dataCategory = useSelector((state) => state.category.dataCategory);
  const getAProduct = useSelector((state) => state.apiProductAll.dataAProduct);
  const dispatch = useDispatch();
  const [dataProduct, setDataPoduct] = useState({
    name: "",
    description: "",
    image: null,
    price: "",
    promotionPrice: "",
    categoryId: "",
    color: "",
    quantity: "",
    size: "",
  });
  useEffect(() => {
    setDataPoduct(getAProduct);
  }, [getAProduct]);

  const Upload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setDataPoduct({
      ...dataProduct,
      image: base64.substring(23, base64.length),
    });
  };
  const handlerADD = (e) => {
    e.preventDefault();
    dispatch(addProducts(dataProduct));
    dispatch(changeStatusForm());
    setDataPoduct({
      ...dataProduct,
      name: "",
      description: "",
      image: "",
      price: "",
      promotionPrice: "",
      categoryId: "",
      color: "",
      quantity: "",
      size: "",
    });
  };
  const handlerUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProducts(dataProduct));
    dispatch(changeStatusForm());
    setDataPoduct({
      ...dataProduct,
      name: "",
      description: "",
      image: "",
      price: "",
      promotionPrice: "",
      categoryId: "",
      color: "",
      quantity: "",
      size: "",
    });
  };
  return (
    <div id="form" className="container">
      <form className="add_form">
        <div className="row input_wrap">
          <label className="product_name ">ProductName</label>
          <input
            onChange={(e) =>
              setDataPoduct({ ...dataProduct, name: e.target.value })
            }
            value={dataProduct.name}
            type="text"
            className="input_form"
          />
        </div>
        <div className="row input_wrap">
          <label className="product_name">Category</label>
          <select
            onChange={(e) =>
              setDataPoduct({ ...dataProduct, categoryId: e.target.value })
            }
            value={dataProduct.categoryId}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option default value>
              Choose...
            </option>
            {dataCategory.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="row input_wrap">
          <label className="product_name">Image</label>
          <input
            onChange={(e) => Upload(e)}
            type="file"
            className="input_form"
          />
          <div
            className="image_product_form"
            value={dataProduct.image}
            style={{
              backgroundImage: `url("data:image/jpeg;base64,${dataProduct.image}")`,
            }}
          ></div>
        </div>
        <div className="row input_wrap">
          <label className="product_name">Color</label>
          <input
            value={dataProduct.color}
            onChange={(e) =>
              setDataPoduct({ ...dataProduct, color: e.target.value })
            }
            type="text"
            className="input_form"
          />
        </div>
        <div className="row input_wrap">
          <label className="product_name">Quantity</label>
          <input
            onChange={(e) =>
              setDataPoduct({ ...dataProduct, quantity: e.target.value })
            }
            value={dataProduct.quantity}
            type="text"
            className="input_form"
          />
        </div>
        <div className="row input_wrap">
          <label className="product_name">Price</label>
          <input
            value={dataProduct.price}
            onChange={(e) =>
              setDataPoduct({ ...dataProduct, price: e.target.value })
            }
            type="text"
            className="input_form"
          />
        </div>
        <div className="row input_wrap">
          <label className="product_name">Sale off</label>
          <input
            value={dataProduct.promotionPrice}
            onChange={(e) =>
              setDataPoduct({ ...dataProduct, promotionPrice: e.target.value })
            }
            type="text"
            className="input_form"
          />
        </div>
        <div className="row input_wrap">
          <label className="product_name">Specifications </label>
          <input
            value={dataProduct.size}
            onChange={(e) =>
              setDataPoduct({ ...dataProduct, size: e.target.value })
            }
            type="text"
            className="input_form"
          />
        </div>
        <div className="row input_wrap">
          <label className="product_name">Product description </label>
          <input
            value={dataProduct.description}
            onChange={(e) =>
              setDataPoduct({ ...dataProduct, description: e.target.value })
            }
            type="text"
            className="input_form"
          />
        </div>
        <button
          type="submit"
          onClick={handlerADD}
          className="btn btn-primary btn-sm submit_button"
        >
          Add
        </button>
        <button
          type="submit"
          onClick={handlerUpdate}
          className="btn btn-primary btn-sm submit_button"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
