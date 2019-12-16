import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import * as moment from "moment";
export default class STEMDetail extends Component {
  render() {
    const { sTEMPost } = this.props;
    return (
      <>
        <Card>
          <CardBody>
            <h2>{sTEMPost.Topic}</h2>
            <p className="h4 text-left text-success mb-1">
              <b>
                <i className="tim-icons icon-single-02"></i>
                {"  "}
                {sTEMPost.TeacherName} {" - "} {sTEMPost.SchoolName}
              </b>
            </p>
            <p className="text-info mb-4">
              <span>
                {moment(sTEMPost.CreatedAt).format("HH giờ mm ngày DD/MM/YYYY")}
                , Lượt xem: ...
              </span>
            </p>
            <blockquote
              className="m-3"
              dangerouslySetInnerHTML={{ __html: sTEMPost.PostDetail }}
            ></blockquote>
          </CardBody>
        </Card>
      </>
    );
  }
}
