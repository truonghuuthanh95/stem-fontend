import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";
import GuestIndex from './views/Guest/Login/Index'
import AdminLogin from './views/Guest/Login/Admin'
import TeacherDashboard from './views/Teacher/Dashboard'
import STEMPlanSubmition from './views/Teacher/STEMPlanSubmition'
import STEMViewDetail from './views/Admin/STEMViewDetail'
import GuestHome from './views/Guest/Home'
import GuestSTEMDetail from './views/Guest/STEMDetail'
import STEMPlanUpdate from './views/Teacher/STEMPlanUpdate'
import STEMPlan from './views/Admin/STEMPlan'
import STEMReportSubmition from './views/Teacher/STEMReportSubmition';
import STEMReportUpdate from './views/Teacher/STEMReportUpdate'
var routes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/stemplans",
    name: "KẾ HOẠCH",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: STEMPlan,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Guest",
    icon: "tim-icons icon-world",
    component: GuestIndex,
    layout: "/guest"
  },
  {
    path: "/login/admin",
    name: "AdminLogin",
    icon: "tim-icons icon-world",
    component: AdminLogin,
    layout: "/guest"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-world",
    component: TeacherDashboard,
    layout: "/admin"
  },
  {
    path: "/stemplanupdate/:stemPostId",
    name: "CẬP NHẬT STEM",
    icon: "tim-icons icon-world",
    component: STEMPlanUpdate,
    layout: "/admin"
  },
  {
    path: "/stemplansubmit",
    name: "NỘP BÀI LÀM",
    icon: "tim-icons icon-world",
    component: STEMPlanSubmition,
    layout: "/admin"
  },
  {
    path: "/stemreportupdate/:stemReportId",
    name: "CẬP NHẬT STEM",
    icon: "tim-icons icon-world",
    component: STEMReportUpdate,
    layout: "/admin"
  },
  {
    path: "/stemreportsubmit",
    name: "NỘP BÀI LÀM",
    icon: "tim-icons icon-world",
    component: STEMReportSubmition,
    layout: "/admin"
  },
  {
    path: "/viewdetail/:stemPostId",
    name: "XEM CHI TIET",
    icon: "tim-icons icon-world",
    component: STEMViewDetail,
    layout: "/admin"
  },
  {
    path: "/home",
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
  },
];
export default routes;
