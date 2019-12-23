import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Media, Card, CardBody, CardText, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { getSTEMPlans } from "../../services/STEMPlanService";
import { Link } from "react-router-dom";
import banner from "../../assets/img/STEM2_Final.png";
import { IMAGE_BASE_URL } from '../../services/contanst'
export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sTEMPosts: []
    };
  }

  async componentDidMount() {
    const data = await getSTEMPlans().then(res => res.data);
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
          <div className="mb-4">
            <img src={banner} />
          </div>
         
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h2 className="title">Nội Dung</h2>
              <h4>
              <NavLink
                  exact
                  to="/guest"
                  // activeClassName="text-primary"
                  className="title"
                >
                  Tất cả
                </NavLink>{" "}|{" "}
                <NavLink
                  exact
                  to="/guest"               
                  className="title"
                >
                  Kế hoạch
                </NavLink>{" "}
                |{" "}
                <NavLink
                  exact
                  to="/"                
                  className="title"
                >
                  Báo cáo
                </NavLink>
              </h4>
              {sTEMPosts.map((s, index) => (
                <Card className="card-user" key={index}>
                  <CardBody>
                    <CardText />
                    <Media>
                      <Link to={`/guest/stemdetail/${s.Id}`}>
                        <Media left>
                          <img
                            src={`${IMAGE_BASE_URL + s.AvatarImage}`}
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
