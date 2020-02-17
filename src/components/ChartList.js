import React, { Fragment } from 'react';
import ChartItem from './ChartItem';

function ChartList(props){

  const chartItems = props.charts.map((song, index) => {
    return <ChartItem key={index}>{song}</ChartItem>
  })

  return (
    <Fragment>
      {chartItems}
    </Fragment>
  );
}

export default ChartList;
