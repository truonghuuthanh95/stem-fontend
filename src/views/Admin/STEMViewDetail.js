import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Label,
  FormGroup,
  Button,
  Form,
  Input
} from "reactstrap";
import {
  getSTEMPlanById,
  getSTEMPlanStatus
} from "../../services/STEMPlanService";
import STEMDetail from "../../components/STEM/STEMDetail";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorInput from "../../components/Error/ErrorInput";

const ValidationSchema = Yup.object().shape({
  comment: Yup.string()
    .max(100, "Tối đa 500 kí tự")
    .required("Vui lòng nhập")
});
class STEMViewDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sTEMPostDetail: "",
      comment: "",
      sTEMPostPlanStatus: []
    };
  }
  async componentDidMount() {
    const { stemPostId } = this.props.match.params;
    const sTEMPost = await getSTEMPlanById(stemPostId).then(res => res.data);
    const sTEMPostPlanStatus = await getSTEMPlanStatus().then(res => res.data);
    this.setState({
      sTEMPostDetail: sTEMPost.Results,
      sTEMPostPlanStatus: sTEMPostPlanStatus.Results
    });
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  render() {
    if (!this.state.sTEMPostDetail) {
      return ( <div className="content"> <h1>loading</h1></div>);
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <STEMDetail sTEMPost={this.state.sTEMPostDetail} />
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Formik
                    initialValues={{
                      comment: "",
                      statusId: 1
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                      setSubmitting(true);
                      const { stemPostId } = this.props.match.params;
                      const data = {
                        Contents: values.comment,
                        ReviewBy: 1,
                        STEMId: stemPostId
                      };
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
                        <Col sm="3">
                          <FormGroup>
                            <Label for="statusId">Trạng thái</Label>
                            <Input
                              type="select"
                              name="statusId"
                              id="statusId"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.topic}
                            >
                              {this.state.sTEMPostPlanStatus.map(s => (<option value={s.Id}>{s.Name}</option>))}
                                                         
                            </Input>
                          </FormGroup>
                        </Col>
                        <FormGroup>
                          <Label for="exampleText">Bình luận</Label>
                          <Input
                            type="textarea"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows="10"
                            name="comment"
                            id="comment"
                            value={values.comment}
                          />
                          <ErrorInput
                            touched={touched.comment}
                            message={errors.comment}
                          />
                        </FormGroup>
                        <Button color="primary" type="submit">
                          Feedback
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

export default STEMViewDetail;
