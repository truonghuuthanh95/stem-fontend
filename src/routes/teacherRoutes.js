import TeacherDashboard from "../views/Teacher/Dashboard";
import STEMPlanSubmition from "../views/Teacher/STEMPlanSubmition";
import STEMPlanUpdate from "../views/Teacher/STEMPlanUpdate";
import STEMReportSubmition from "../views/Teacher/STEMReportSubmition";
import STEMReportUpdate from "../views/Teacher/STEMReportUpdate";
import STEMPlans from "../views/Teacher/STEMPlans";
import STEMReports from '../views/Teacher/STEMReports'
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-world",
    component: TeacherDashboard,
    layout: "/teacher",
    invisible: false
  },
  {
    path: "/stemplanupdate/:stemPostId",
    name: "CẬP NHẬT STEM",
    icon: "tim-icons icon-world",
    component: STEMPlanUpdate,
    layout: "/teacher",
    invisible: true
  },
  {
    path: "/stemplansubmit",
    name: "NỘP BÀI LÀM",
    icon: "tim-icons icon-world",
    component: STEMPlanSubmition,
    layout: "/teacher",
    invisible: true
  },
  {
    path: "/stemreportupdate/:stemReportId",
    name: "CẬP NHẬT STEM",
    icon: "tim-icons icon-world",
    component: STEMReportUpdate,
    layout: "/teacher",
    invisible: true
  },
  {
    path: "/stemreportsubmit",
    name: "NỘP BÀI LÀM",
    icon: "tim-icons icon-world",
    component: STEMReportSubmition,
    layout: "/teacher",
    invisible: true
  },
  {
    path: "/stemplans",
    name: "KỀ HOẠCH",
    icon: "tim-icons icon-world",
    component: STEMPlans,
    layout: "/teacher",
    invisible: false
  },
  {
    path: "/stemreports",
    name: "BÁO CÁO",
    icon: "tim-icons icon-world",
    component: STEMReports,
    layout: "/teacher",
    invisible: false
  }

];
export default routes;
