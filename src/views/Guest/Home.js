import React, { Component } from "react";
import { Row, Col, Media, Card, CardBody, CardText, Button } from "reactstrap";
import { getSTEMPosts } from "../../services/STEMPostService";
import { Link } from "react-router-dom";
export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sTEMPosts: []
    };
  }

  async componentDidMount() {
    const data = await getSTEMPosts().then(res => res.data);
    this.setState({ sTEMPosts: data.Results });
  }

  render() {
    const { sTEMPosts } = this.state;
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
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h2 className="title">Bài viết</h2>
              {sTEMPosts.map((s, index) => (
                <Card className="card-user" key={index}>
                  <CardBody>
                    <CardText />
                    <Media>
                      <Link to={`/guest/stemdetail/${s.Id}`}>
                        <Media left>
                          <img
                            src={require("../../assets/img/james.jpg")}
                            width="250"
                            height="200"
                            className="mr-3"
                            alt="..."
                          />
                        </Media>
                      </Link>
                      <Media body>
                        <Link to={`/guest/stemdetail/${s.Id}`}>
                          <Media heading className="title">
                            {s.Topic}
                          </Media>
                        </Link>
                        <p>{s.Summary}</p>
                        <p className="text-left mt-3 text-success">
                          <i className="tim-icons icon-single-02" />{" "}
                          {s.TeacherName} {" - "} {s.SchoolName}
                        </p>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
              ))}
              <p className="text-center">
                <Button>Xem thêm</Button>
              </p>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
