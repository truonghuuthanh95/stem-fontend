import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { TEACHER, ADMIN } from "./services/contanst";
import AdminLayout from "layouts/Admin/Admin.jsx";
import GuestLayout from "./layouts/Guest/Guest";
import TeacherLayout from "./layouts/Teacher/Teacher";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "assets/css/myStyle.css";
import "sweetalert2/src/sweetalert2.scss";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route
        path="/admin"
        render={props => {
          if (localStorage.getItem(ADMIN)) {
            return <AdminLayout {...props} />;
          }
          return <Redirect to="/guest/index" />;
        }}
      />
      <Route
        path="/teacher"
        render={props => {
          const user = JSON.parse(localStorage.getItem(TEACHER));
          const newProps = {...props, user};
          if (localStorage.getItem(TEACHER)) {
            return <TeacherLayout {...newProps} />;
          }
          return <Redirect to="/guest/index" />;
        }}
      />
      {/* <Route path="/teacher" render={props => <TeacherLayout {...props} />} /> */}
      <Route path="/guest" render={props => <GuestLayout {...props} />} />
      <Redirect exact from="/" to="/guest" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
