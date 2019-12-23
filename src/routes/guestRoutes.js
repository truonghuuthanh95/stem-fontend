import GuestIndex from "../views/Guest/Login/Index";
import AdminLogin from "../views/Guest/Login/Admin";
import GuestHome from "../views/Guest/Home";
import GuestSTEMDetail from "../views/Guest/STEMDetail";
import TeacherLogin from '../views/Guest/Login/Teacher'
var routes = [
  {
    path: "/index",
    name: "Guest",
    icon: "tim-icons icon-world",
    component: GuestIndex,
    layout: "/guest"
  },
  {
    path: "/loginadmin",
    name: "AdminLogin",
    icon: "tim-icons icon-world",
    component: AdminLogin,
    layout: "/guest"
  },
  {
    path: "/loginteacher",
    name: "AdminLogin",
    icon: "tim-icons icon-world",
    component: TeacherLogin,
    layout: "/guest"
  },
  {
    path: "/",
    name: "STEM",
    icon: "tim-icons icon-world",
    component: GuestHome,
    layout: "/guest"
  },
  {
    path: "/stemdetail/:stemPostId",
    name: "STEM DETAIL",
    icon: "tim-icons icon-world",
    component: GuestSTEMDetail,
    layout: "/guest"
  }
];
export default routes;
