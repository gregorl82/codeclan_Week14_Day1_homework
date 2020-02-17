import React, { Component} from 'react';
import ChartList from '../components/ChartList'

class ChartContainer extends Component {

  render() {
    return (
      <div className="chart-container">
        <h1>UK Top 20</h1>
        <ChartList />
      </div>
    );
  }

}

export default ChartContainer;
