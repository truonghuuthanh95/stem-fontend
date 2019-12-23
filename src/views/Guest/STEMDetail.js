import React, { Component } from "react";
import { Col, Row, BreadcrumbItem, Breadcrumb } from "reactstrap";
import STEMDetailComponent from "../../components/STEM/STEMDetail";
import { getSTEMPlanById } from "../../services/STEMPlanService";
import banner from "../../assets/img/STEM2_Final.png";
export default class STEMDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sTEMPostDetail: ""
    };
  }
  async componentDidMount() {
    const { stemPostId } = this.props.match.params;
    const sTEMPost = await getSTEMPlanById(stemPostId).then(res => res.data);
    this.setState({ sTEMPostDetail: sTEMPost.Results });
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
          <div className="mb-4">
            <img src={banner} alt="..." />
          </div>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              {/* <Breadcrumb>
                <BreadcrumbItem>
                  <a href="#">Trang Chủ</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Chi Tiết</BreadcrumbItem>
              </Breadcrumb> */}
              <STEMDetailComponent sTEMPost={this.state.sTEMPostDetail} />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
