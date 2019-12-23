import React, { Component } from "react";
import {
  Card,
  Button,
  Col,
  Row,
  Form,
  Input,
  FormGroup,
  CardBody,
  Spinner
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import EditorContainer from "../../components/Editor/Editor";
import ErrorInput from "../../components/Error/ErrorInput";
import {
  updateSTEMReport,
  getSTEMReportById
} from "../../services/STEMReportService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { TEACHER } from "../../services/contanst";
import * as moment from "moment";

const ValidationSchema = Yup.object().shape({
  topic: Yup.string()
    .max(100, "Tối đa 200 kí tự")
    .required("Vui lòng nhập"),
  summary: Yup.string()
    .min(50, "Tối thiểu 50 kí tự")
    .max(200, "Tối đa 200 kí tự")
    .required("Vui lòng nhập"),
  avatarPost: Yup.mixed().required("Vui lòng chọn hình ảnh")
});
class STEMReportUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportDetail: "",
      sTEMReport: ""
    };
  }

  async componentDidMount() {
    const { stemReportId } = this.props.match.params;
    console.log(stemReportId);
    if (stemReportId) {
      const data = await getSTEMReportById(stemReportId).then(res => res.data);
      this.setState({
        sTEMReport: data.Results,
        reportDetail: data.Results.ReportDetail
      });
    }
  }

  handleChangeContents = reportDetail => {
    console.log(reportDetail);
    this.setState({ reportDetail });
  };
  render() {
    const { sTEMReport } = this.state;
    if (!sTEMReport) {
      return (
        <div className="content">
          <Card>
            <CardBody>
              <Spinner color="primary" />
            </CardBody>
          </Card>
        </div>
      );
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Formik
                    initialValues={{
                      topic: this.state.sTEMReport.Topic,
                      avatarPost: "",
                      summary: this.state.sTEMReport.Summary,
                      studentQuantity: this.state.sTEMReport.StudentQuantity,
                      date: moment(this.state.sTEMReport.OperationTime).format(
                        "YYYY-MM-DD"
                      ),
                      budget: this.state.sTEMReport.Budget
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      const user = JSON.parse(localStorage.getItem(TEACHER));
                      const sTEMReport = {
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
                      const { stemReportId } = this.props.match.params;
                      const res = await updateSTEMReport(
                        stemReportId,
                        sTEMReport
                      ).then(res => res.data);
                      if (res.StatusCode === 201) {
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
                          contents={this.state.reportDetail}
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

export default STEMReportUpdate;
