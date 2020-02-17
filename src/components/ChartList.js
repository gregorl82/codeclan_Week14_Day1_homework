import React, { Fragment } from 'react';
import ChartItem from './ChartItem';

function ChartList(props){

  const chartItems = props.charts.map((song, index) => {
    return <ChartItem song={song} key={index}/>
  })

  return (
    <Fragment>
      {chartItems}
    </Fragment>
  );
}

export default ChartList;
