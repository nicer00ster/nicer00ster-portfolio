import React from 'react';
import { Motion, spring } from 'react-motion';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }
  render() {
    return (
      <div className="error__wrapper">
        {this.props.statusCode
          ? <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
              {value => <div>{value.x}</div>}
            </Motion>
          : `An error occurred client-side.`
        }
      </div>
    )
  }
}
