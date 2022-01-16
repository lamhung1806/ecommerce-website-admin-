import ProductManagement from "../component/Product/ProductManagement";
import CategoryManagement from "../component/catergory/CategoryManagement";
import Oder from "../component/Oder/Oder";
import Oderdetail from "../component/Oder/oderDetail/Oderdetail";
import Login from "../component/Login/Login";
import UserManagement from "../component/User/UserManagement";
import UpdateRole from "../component/User/UpdateRole";
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
  {
    path: "/userManagement",
    component: UserManagement,
  },
  {
    path: "/userManagement/Roles",
    component: UpdateRole,
  },
];

export default router;
