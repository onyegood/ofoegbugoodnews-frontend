import React, {Component} from "react";
import {Doughnut} from "react-chartjs-2";
import classes from "./css/ChartStyle.css"


class DoughnutChartComponent extends Component {
    state = {
        chartData: this.props.chartData
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        titleText: 'Remember to overwrite this content',
        titleFontSize: 25
    }

    render(){

        const { chartData } = this.state;

        return <div className={classes.ChartCard}>
         
        <Doughnut
            data={chartData} 
             options={{ 
                 title:{
                    display: this.props.displayTitle,
                    text: this.props.titleText,
                    fontSize: this.props.titleFontSize
                },
                legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                    labels: {
                        fontColor: '#000'
                    }
                }
            }} />

          </div>;
    }
}

export default DoughnutChartComponent;