import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText} from "reactstrap";
import { Link } from "react-router-dom";
import logoAdmin from '../../../assets/img/anime6.png';
import logoTeacher from '../../../assets/img/anime3.png';
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: [
        {
          name: "GIÁO VIÊN",
          image: logoTeacher,
          link: "/guest/loginteacher"
        },
        {
          name: "CÁN BỘ QUẢN LÝ",
          image: logoAdmin,
          link: "/guest/loginadmin"
        }
      ]
    };
  }

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
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <Row>
                {this.state.role.map((s, index) => (
                  <Col sm="6" xs="12" key={index}>
                    <Card className="card-user">
                      <CardBody>
                        <CardText />
                        <div className="author">
                          <div className="block block-one" />
                          <div className="block block-two" />
                          <div className="block block-three" />
                          <div className="block block-four" />
                          <Link to={s.link}>
                            <img
                              alt="..."
                              className="avatar"
                              src={s.image}
                            />
                            <h3 className="title">{s.name}</h3>
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
