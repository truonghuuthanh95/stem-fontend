import React, { Component } from "react";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sTEMPosts: []
    };
  }
  
  render() {
    console.log(this.props)
    return (
      <>
        <div className="content">
          <h3 className="title">DASHBOARD</h3>
          
        </div>
      </>
    );
  }
}

export default Dashboard;
