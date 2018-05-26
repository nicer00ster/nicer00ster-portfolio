import { connect } from 'react-redux';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    }
  }
  componentWillMount() {
    this.startProgress();
  }
  notch(num) {
    if(this.state.progress < num) {
      this.setState({ progress: (this.state.progress + 1) })
    } else {
      return;
    }
  }
  startProgress() {
    this.progression = setInterval(this.notch.bind(this, this.props.num), 10);
  }

  render() {
    return(
      <span style={{color: 'palegreen'}}>{this.state.progress}%</span>
    )
  }
}

export default connect()(Progress);
