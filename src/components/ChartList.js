import React from 'react';
import ChartItem from './ChartItem';

function ChartList(props){

  const chartItems = props.charts.map((song, index) => {
    return <ChartItem key={index}>{song}</ChartItem>
  })

  return (
    <div className="chart-list">
      {chartItems}
    </div>
  );
}

export default ChartList;
