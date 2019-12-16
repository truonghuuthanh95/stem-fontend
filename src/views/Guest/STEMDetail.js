import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import STEMDetailComponent from "../../components/STEM/STEMDetail";
import { getSTEMPostById } from '../../services/STEMPostService'
export default class STEMDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sTEMPostDetail: '',
    }
  }
  async componentDidMount() {
    const {stemPostId} = this.props.match.params
    const sTEMPost = await getSTEMPostById(stemPostId).then(res => res.data);
    console.log(sTEMPost);
    
    this.setState({sTEMPostDetail: sTEMPost.Results});
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
              <STEMDetailComponent sTEMPost={this.state.sTEMPostDetail} />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
