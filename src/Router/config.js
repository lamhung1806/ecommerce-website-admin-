import ProductManagement from "../component/Product/ProductManagement";
import CategoryManagement from "../component/catergory/CategoryManagement";
import Oder from "../component/Oder/Oder";
import Oderdetail from "../component/Oder/oderDetail/Oderdetail";
import Login from "../component/Login/Login";
const router = [
  {
    path: "/productManagement",
    component: ProductManagement,
  },
  {
    path: "/categoryManagement",
    component: CategoryManagement,
  },
  {
    path: "/oderManagement",
    component: Oder,
  },
  {
    path: "/oderManagement/oderDetails",
    component: Oderdetail,
  },
  {
    path: "/login",
    component: Login,
  },
];

export default router;
