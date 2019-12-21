import React, { Component } from "react";
import { Row, Col, Card, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getSTEMPlans } from "../../services/STEMPlanService";

export default class STEMPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sTEMPost: []
    };
  }
  async componentDidMount() {
    const data = await getSTEMPlans().then(res => res.data);
    this.setState({ sTEMPost: data.Results });
  }

  render() {
    const { sTEMPost } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <Table responsive>
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Tên bài vết</th>
                      <th>Tác giả</th>
                      <th>Trường</th>
                      <th className="text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sTEMPost.map((s, index) => (
                      <tr>
                        <td className="text-center">{index + 1}</td>
                        <td>{s.Topic}</td>
                        <td>{s.TeacherName}</td>
                        <td>{s.SchoolName}</td>
                        <td className="text-right">
                          <Link to={`/admin/viewdetail/${s.Id}`}>
                            <Button
                              className="btn-icon btn-simple"
                              color="info"
                              size="sm"
                            >
                              <i className="fa fa-eye"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
