import React, { Component } from "react";
import {
  Card,
  Button,
  Col,
  Row,
  Form,
  Input,
  FormGroup
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import EditorContainer from "../../components/Editor/Editor";
import ErrorInput from "../../components/Error/ErrorInput";
import { createStemPost } from "../../services/STEMPostService";
import Swal from "sweetalert2/dist/sweetalert2.js";
const ValidationSchema = Yup.object().shape({
  topic: Yup.string()
    .max(100, "Tối đa 200 kí tự")
    .required("Vui lòng nhập"),
  summary: Yup.string()
    .min(50, "Tối thiểu 50 kí tự")
    .max(200, "Tối đa 200 kí tự")
    .required("Vui lòng nhập"),
  avatarPost: Yup.mixed()
    .required("Vui lòng chọn hình ảnh")
});
class STEMSubmition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: ""
    };
  }
  handleChangeContents = contents => {
    console.log(contents);
    this.setState({ contents });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <Formik>
                  <Formik
                    initialValues={{
                      topic: "",
                      avatarPost: "",
                      summary: "",
                      postDetail: ""
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={ async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      console.log(this.state.contents);
                      const sTEMPost = {
                        Topic: values.topic,
                        TeacherName: "truong huu thanh",
                        TeacherId: "213456",
                        Summary: values.summary,
                        PostDetail: this.state.contents,
                        SchoolName: "Sở Giáo dục thành phố"
                      };
                      const res = await createStemPost(sTEMPost).then(res => res.data);
                      if (res.StatusCode === 201) {
                        Swal.fire({
                          title: 'Lưu bài thành công',                         
                          icon: 'success',                        
                          confirmButtonColor: '#e14eca',                        
                          confirmButtonText: 'OK',
                          allowOutsideClick: false
                        }).then((result) => {
                          if (result.value) {
                            this.props.history.push('/admin/dashboard')
                          }
                        })
                      }
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <h4 className="title">Tựa đề bài viết</h4>
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
                          Mô tả nội dung sẽ trình bày{" "}
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
                            placeholder="summary"
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
                        <FormGroup>
                          <Input
                            style={{ opacity: 1, position: "unset" }}
                            type="file"
                            name="avatarPost"
                            id="avatarPost"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.avatarPost}
                          />
                          <ErrorInput
                            touched={touched.avatarPost}
                            message={errors.avatarPost}
                          />
                        </FormGroup>

                        <h4 className="title">Nội dung</h4>

                        <EditorContainer
                          handleChangeContents={this.handleChangeContents}
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
                </Formik>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default STEMSubmition;
