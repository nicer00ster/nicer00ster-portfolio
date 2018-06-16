import React from 'react'
import TextLoop from 'react-text-loop';
import NextHead from 'next/head';


const fourOhFour = ['Something went wrong!', 'Are you sure the URL is correct?', 'Try again soon.', 'Sorry for the inconvenience!'];

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <>
      <NextHead>
        <style>{`
          @font-face {
            font-family: 'Courier Prime Sans';
            src: url('../static/fonts/Courier Prime Sans.ttf');
          `}
        </style>
      </NextHead>
      <div className="fourohfour__wrapper">
        {this.props.statusCode
          ?
          <div>
            <div className='rabbit'></div>
            <div className='clouds'></div>
            <div className='error__text'>
              404
              <TextLoop children={fourOhFour} springConfig={{ stiffness: 180, damping: 8 }} />
            </div>
          </div>
          : 'An error occurred on client'}
      </div>
    </>
    )
  }
}
