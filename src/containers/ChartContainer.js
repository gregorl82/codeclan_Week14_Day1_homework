import React, { Component} from 'react';
import ChartList from '../components/ChartList'

class ChartContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then((data) => {
      data.feed.entry.map((item, index) => {
        return item.chartPosition = index + 1
      })
      this.setState( {data: data.feed.entry} )
    })
    .catch(err => console.error)
  }

  render() {
    return (
      <div className="chart-container">
        <h1>UK Apple Music Top 20</h1>
        <ChartList charts={this.state.data}/>
      </div>
    );
  }

}

export default ChartContainer;
