import React from "react";
import { Chart } from "chart.js";

class KeywordTrackerChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount = () => {
    this.chart = new Chart(this.chartRef.current, {
      type: "line",
      data: {
        labels: ["A", "B", "C", "D"],
        datasets: [
          {
            data: [2, 3, 14, 2]
          }
        ]
      }
    });
  };

  render = () => {
    return <canvas id="keyword-chart" ref={this.chartRef} />;
  };
}

export default KeywordTrackerChart;
