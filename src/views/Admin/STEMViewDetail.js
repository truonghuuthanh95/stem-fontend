import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Label,
  Input,
  FormGroup,
  CardHeader,
  CardTitle,
  Button,
  Form,
  CardText
} from "reactstrap";
import STEMDetail from '../../components/STEM/STEMDetail'
class STEMViewDetail extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>           
                <CardBody>
                  <STEMDetail/>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="exampleText">Bình luận</Label>
                      <textarea
                        className="form-control"
                        rows="10"
                        name="text"
                        id="exampleText"
                      ></textarea>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter className="text-right">
                  <Button color="primary">Save</Button>
                </CardFooter>
              </Card>
            </Col>
            {/* <Col sm="2">
              <Card body outline color="primary">
                <CardHeader>
                  <CardTitle>Bài viết</CardTitle>
                </CardHeader>
                <CardBody>
                  <CardText className="text-primary">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </div>
      </>
    );
  }
}

export default STEMViewDetail;
