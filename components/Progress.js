import { connect } from 'react-redux';
class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    }
  }

  componentDidMount() {
    this.animateValue(0, 65, 1000);
  }

  animateValue(start, end, duration) {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1: -1;
    const step = Math.abs(Math.floor(duration / range));
    const that = this;
    let timer = setInterval(function() {
      current += increment;
      that.setState({ percent: current })
      if(current == end) {
        clearInterval(timer);
      }
    }, step);
  }

  setPercent = (percent) => {
    for(var x = this.state.percent; x < percent.length; ++x) {
      this.setState({ percent: x })
    }
  };


  render() {
    return (
      <p>{this.state.percent}%</p>
    )
  }
}

export default connect()(Progress);
