import React, { Fragment } from 'react';

function ChartItem(props) {
  return (
    <div className="chart-item">
      <p className="chart-item-position">{props.children.chartPosition}</p>
      <img className="chart-item-image" src={props.children['im:image'][0].label} alt="" height="90px"/>
      <div className="chart-item-name-artist">
        <h3>{props.children['im:name'].label}</h3>
        <p>{props.children['im:artist'].label}</p>
      </div>
      <p className="chart-item-genre">{props.children.category.attributes.term}</p>
      <p className="chart-item-price">{props.children['im:price'].label}</p>
      <p className="chart-item-release-date">Release Date: {props.children['im:releaseDate'].attributes.label}</p>
      <audio className="chart-item-preview" controls src={props.children.link[1].attributes.href}></audio>
    </div>
  )
}

export default ChartItem;
