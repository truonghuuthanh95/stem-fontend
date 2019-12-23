import React, { Component } from "react";
import {
  Card,
  Button,
  Col,
  Row,
  Form,
  Input,
  FormGroup,
  CardBody
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import EditorContainer from "../../components/Editor/Editor";
import ErrorInput from "../../components/Error/ErrorInput";
import {
  createStemReport,
  uploadSTEMReportImage
} from "../../services/STEMReportService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { sTEMPReportContens } from "../../utils/STEMPlan";
import { TEACHER } from '../../services/contanst'
const ValidationSchema = Yup.object().shape({
  topic: Yup.string()
    .max(100, "Tối đa 200 kí tự")
    .required("Vui lòng nhập"),
  summary: Yup.string()
    .min(50, "Tối thiểu 50 kí tự")
    .max(200, "Tối đa 200 kí tự")
    .required("Vui lòng nhập"),
  avatarPost: Yup.mixed().required("Vui lòng chọn hình ảnh"),
  studentQuantity: Yup.number()
    .positive("Vui lòng nhập số lớn hơn 0")
    .required("Vui lòng nhập"),
  date: Yup.date().required("Vui lòng nhập"),
  budget: Yup.number()
    .positive("Vui lòng nhập số lớn hơn 0")
    .required("Vui lòng nhập")
});
class STEMReportSubmition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportDetail: ""
    };
  }

  handleChangeContents = reportDetail => {
    console.log(reportDetail);
    this.setState({ reportDetail });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Formik
                    initialValues={{
                      topic: "",
                      avatarPost: null,
                      summary: "",
                      studentQuantity: "",
                      date: "",
                      budget: ""
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      console.log(this.state.contents);
                      const user = JSON.parse(localStorage.getItem(TEACHER)) 
                      const STEMReport = {
                        Topic: values.topic,
                        TeacherName: `${user.Ho} ${user.Ten}`,
                        TeacherId: user.GiaoVienID,
                        Summary: values.summary,
                        ReportDetail: this.state.reportDetail,
                        SchoolName: "Sở Giáo dục thành phố",
                        SchoolId: "123455",
                        StudentQuantity: values.studentQuantity,
                        OperationTime: values.date,
                        Budget: values.budget
                      };
                      const res = await createStemReport(STEMReport).then(
                        res => res.data
                      );
                      if (res.StatusCode === 201) {
                        const data = new FormData();
                        data.append("myFile", values.avatarPost);
                        const uploadImage = await uploadSTEMReportImage(
                          res.Results.Id,
                          data
                        ).then(res => res.data);
                        if (uploadImage.StatusCode === 201) {
                          Swal.fire({
                            title: "Lưu bài thành công",
                            icon: "success",
                            confirmButtonColor: "#e14eca",
                            confirmButtonText: "OK",
                            allowOutsideClick: false
                          }).then(result => {
                            if (result.value) {
                              this.props.history.push("/teacher/stemreports");
                            }
                          });
                        }
                      }
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setFieldValue
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <h4 className="title">Tên hoạt động</h4>
                        <FormGroup>
                          <Input
                            type="text"
                            name="topic"
                            id="topic"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.topic}
                          />
                          <ErrorInput
                            touched={touched.topic}
                            message={errors.topic}
                          />
                        </FormGroup>

                        <h4 className="title">
                          Tóm tắt nội dung sẽ trình bày{" "}
                          <small className="text-muted">
                            <i>nhỏ hơn 200 kí tự</i>
                          </small>
                        </h4>
                        <FormGroup>
                          <Input
                            placeholder="Phần mô tả, tóm tắt nội dung sẽ trình bày. Lưu ý viết ngằn ngọn"
                            type="text"
                            name="summary"
                            id="summary"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.summary}
                          />
                          <ErrorInput
                            touched={touched.summary}
                            message={errors.summary}
                          />
                        </FormGroup>
                        <h4 className="title">Ảnh bìa</h4>

                        <div className="form-group">
                          <input
                            style={{ opacity: 1, position: "unset" }}
                            id="avatarPost"
                            name="avatarPost"
                            type="file"
                            onChange={event => {
                              setFieldValue(
                                "avatarPost",
                                event.currentTarget.files[0]
                              );
                            }}
                            className="form-control"
                          />
                          <ErrorInput
                            touched={touched.avatarPost}
                            message={errors.avatarPost}
                          />
                        </div>
                        <Row>
                          <Col sm="3">
                            <h4 className="title">
                              Số lượng học sinh tham gia
                            </h4>
                            <FormGroup>
                              <Input
                                type="number"
                                name="studentQuantity"
                                id="studentQuantity"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.studentQuantity}
                              />
                              <ErrorInput
                                touched={touched.studentQuantity}
                                message={errors.studentQuantity}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="3">
                            <h4 className="title">Ngày tổ chức</h4>
                            <FormGroup>
                              <Input
                                type="date"
                                name="date"
                                id="date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.date}
                              />
                              <ErrorInput
                                touched={touched.date}
                                message={errors.date}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="3">
                            <h4 className="title">Kinh phí tổ chức</h4>
                            <FormGroup>
                              <Input
                                type="number"
                                name="budget"
                                id="budget"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.budget}
                              />
                              <ErrorInput
                                touched={touched.budget}
                                message={errors.budget}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <h4 className="title">Nội dung</h4>
                        <EditorContainer
                          handleChangeContents={this.handleChangeContents}
                          contents={sTEMPReportContens}
                        />
                        <Button
                          className="btn-fill"
                          color="primary"
                          type="submit"
                        >
                          Lưu Bài
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default STEMReportSubmition;
