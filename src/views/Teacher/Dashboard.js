import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Button,
  CardHeader,
  Media,
  CardFooter
} from "reactstrap";
class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="content">
        <h3 className="title">DASHBOARD</h3>
          <Card>
            <CardBody>
              <Media>
                <Media left href="#">
                  <img
                    src={require("../../assets/img/james.jpg")}
                    width="100"
                    height="100"
                    className="mr-3"
                    alt="..."
                  />
                </Media>
                <Media body>
                  <Media heading className="title">Media heading</Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </Media>
              </Media>
            </CardBody>
            <CardFooter>
              <p className="text-right">
                <Button className="btn-icon" color="success" size="sm">
                  <i className="fa fa-edit"></i>
                </Button>
                {` `}
                <Button className="btn-icon" color="danger" size="sm">
                  <i className="fa fa-times" />
                </Button>
              </p>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  }
}

export default Dashboard;
