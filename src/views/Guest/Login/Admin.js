import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  CardText,
  Button
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorInput from "../../../components/Error/ErrorInput";
import Loading from "../../../components/Loading/Loading";
import Swal from "sweetalert2/dist/sweetalert2.js";
//validation form
const ValidationSchema = Yup.object().shape({
  username: Yup.string().required("Vui lòng nhập"),
  password: Yup.string().required("Vui lòng nhập")
});
class Admin extends Component {
  constructor(props) {
    super(props);
  }
  submitLogin = event => {
    event.preventDefault();
  };
  render() {
    return (
      <>
        <div
          className="content"
          style={{
            paddingTop: 78,
            paddingBottom: 30,
            paddingRight: 0,
            paddingLeft: 0
          }}
        >
          <Col md={{ size: 4, offset: 4 }}>
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/anime3.png")}
                    />
                    <h3 className="title">CÁN BỘ QUẢN LÝ</h3>
                  </a>
                </div>
                <Col sm={{ size: 8, offset: 2 }}>
                  <Loading />
                  <Formik
                    initialValues={{
                      username: "",
                      password: ""
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);
                      console.log("submiting");
                      Swal.fire({
                        title: "Opp!",
                        text: "Sai tên truy cập hoặc mật khẩu",
                        icon: "error",
                        confirmButtonText: "Ok",
                        allowOutsideClick: false
                      });
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      setFieldValue
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <FormGroup
                          className={
                            Boolean(touched.username && errors.username)
                              ? "has-danger"
                              : null
                          }
                        >
                          <Label for="username">Username</Label>
                          <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            bsSize="lg"
                          />
                          <ErrorInput
                            touched={touched.username}
                            message={errors.username}
                          />
                        </FormGroup>
                        <FormGroup
                          className={
                            Boolean(touched.password && errors.password)
                              ? "has-danger"
                              : null
                          }
                        >
                          <Label for="password">Password</Label>
                          <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            bsSize="lg"
                          />
                          <ErrorInput
                            touched={touched.password}
                            message={errors.password}
                          />
                        </FormGroup>

                        <Button
                          type="submit"
                          color="primary"
                          block
                          className="animation-on-hover"
                        >
                          LOGIN
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}

export default Admin;
