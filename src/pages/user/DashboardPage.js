import React, {Component} from "react";
import ExternalTopNav from "../../includes/navigation/ExternalTopNav";
import FooterSection from "../../includes/general/FooterSection";
import SideBar from "../../includes/navigation/SideBar";
import { NavLink } from "react-router-dom";
import BarChartComponent from "../../includes/chart/BarChartComponent";
import DoughnutChartComponent from "../../includes/chart/DoughnutChartComponent";
import PieChartComponent from "../../includes/chart/PieChartComponent";
import LineChartComponent from "../../includes/chart/LineChartComponent";

const chartItems = [
  {
    id: 1,
    label: "Offline",
    value: 400
  },

  {
    id: 2,
    label: "Active",
    value: 1000
  },

  {
    id: 3,
    label: "Non Active",
    value: 350
  },

  {
    id: 4,
    label: "Online",
    value: 500
  },

  {
    id: 5,
    label: "Sign in",
    value: 320
  },
  {
    id: 6,
    label: "Sign out",
    value: 250
  },
  {
    id: 7,
    label: "Disabled",
    value: 100
  }
];
class DashboardPage extends Component {
  state = {
    chartData: {}
  };

  getChartData = () => {
    this.setState({
      chartData: {
        labels: chartItems.map(lbl => lbl.label),
        datasets: [
          {
            label: "Data Analysis",
            data: chartItems.map(val => val.value),

            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 300, 64, 0.6)",
              "rgba(256, 159, 64, 0.6)",
              "rgba(255, 39, 64, 0.6)"
            ],
            borderWidth: 0,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#777",
            hoverBorderWidth: 1
          }
        ]
      }
    });
  };

  componentWillMount = () => {
    this.getChartData(); 
  };

  render() {
    return (
      <div>
        <ExternalTopNav />
        <div className="main-inner" />
        <div className="container-fluid inner-bg">
          <div className="row">
            <SideBar />
            <div className="col-md-9">
                <div className="inner-white-card">
                  <h3>User Dashboard</h3>

                <div className="col-lg-12">
                  <BarChartComponent
                    legendPosition="bottom"
                    titleText="Users Activity Stats"
                    chartData={this.state.chartData}
                  />
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <DoughnutChartComponent
                      legendPosition="bottom"
                      titleText="My Portfolio View"
                      titleFontSize="18"
                      chartData={this.state.chartData}
                    />
                  </div>

                  <div className="col-lg-6">
                    <PieChartComponent
                      legendPosition="bottom"
                      titleText="My Blogs View"
                      titleFontSize="18"
                      chartData={this.state.chartData}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <LineChartComponent
                    legendPosition="bottom"
                    titleText="My Stack"
                    titleFontSize="18"
                    chartData={this.state.chartData}
                  />
                </div>

                </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }
};

export default DashboardPage;