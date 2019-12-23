import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  Media,
  CardFooter,
  CardText
} from "reactstrap";
import { getSTEMReportByTeacher } from "../../services/STEMReportService";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../services/contanst";
import Swal from "sweetalert2/dist/sweetalert2.js";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sTEMPosts: []
    };
  }
  async componentDidMount() {
      console.log("báo cáo")
    const data = await getSTEMReportByTeacher("213456").then(res => res.data);
    this.setState({ sTEMPosts: data.Results });
  }
  deleteSTEMPost = () => {
    Swal.fire({
      title: "Bạn có chắc là muốn xóa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận xóa",
      cancelButtonText: "Hủy"
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Xóa thành công!",
          "Bài viết của bạn đã được xóa.",
          "success"
        );
      }
    });
  };
  render() {
    const { sTEMPosts } = this.state;
    return (
      <>
        <div className="content">
          <h3 className="title">BÁO CÁO</h3>
          <Link to="/teacher/stemreportsubmit"><Button color="primary" className="mb-4">TẠO BÁO CÁO</Button></Link> 
          {sTEMPosts.map((s, index) => (
            <Card className="card-user" key={index}>
              <CardBody>
                <CardText />
                <Media>
                  <Media left>
                    <img
                      src={IMAGE_BASE_URL + s.AvatarImage}
                      width="250"
                      height="200"
                      className="mr-3"
                      alt="..."
                    />
                  </Media>
                  <Media body>
                    <Media heading className="title">
                      {s.Topic}
                    </Media>
                    <p>{s.Summary}</p>
                  </Media>
                </Media>
              </CardBody>
              <CardFooter>
                <p className="text-right">
                  <Link to={`/teacher/stemreportupdate/${s.Id}`}>
                    <Button className="btn-icon" color="success" size="sm">
                      <i className="fa fa-edit"></i>
                    </Button>
                  </Link>
                  {` `}
                  <Button
                    className="btn-icon"
                    color="danger"
                    size="sm"
                    onClick={this.deleteSTEMPost}
                  >
                    <i className="fa fa-times" />
                  </Button>
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </>
    );
  }
}

export default Dashboard;
