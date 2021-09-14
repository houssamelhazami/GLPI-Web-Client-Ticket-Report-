import React, { Component } from "react";
import axios from "axios";
import PieChart from "./PieChart";
import SideBar from "./SideBar";
import "./Dashboard.css";


import {RemoveScrollBar} from 'react-remove-scroll-bar';


class Dashboard extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    if (localStorage.token) {
      console.log(this.props.match.params.type);
      if (!this.props.match.params.type)
        this.props.history.push("/dashboard/status");
      axios
        .get(`/api/channels/view-data-${this.props.match.params.type}`)
        .then(response => {
          this.setState({ data: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    } else this.props.history.push("/");
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.type !== this.props.match.params.type) {
      this.setState({ data: [] });
      axios
        .get(`/api/channels/view-data-${this.props.match.params.type}`)
        .then(response => {
          this.setState({ data: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    const type = this.props.match.params.type;
    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-3 bg-secondary">
            <SideBar />
            <RemoveScrollBar /> 

          </div>
          <div className="col-md-8">
            <h1 className="display-4 stats-heading">GLPI Ticket Report</h1>
            {this.state.data.length && type === "status" && (
              <PieChart data={this.state.data} ind={0}  />
            )}
            {this.state.data.length && type === "urgence" && (
              <PieChart data={this.state.data} ind={1} />
            )}
             {this.state.data.length && type === "type" && (
              <PieChart data={this.state.data} ind={2} />
            )}
             {this.state.data.length && type === "impact" && (
              <PieChart data={this.state.data} ind={3} />
            )}
            {this.state.data.length && type === "priority" && (
              <PieChart data={this.state.data} ind={4} />
            )}
         
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
