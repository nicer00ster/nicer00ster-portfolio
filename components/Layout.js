import NextHead from 'next/head';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import '../static/sass/styles.scss';

const defaultDesc = 'nicer00ster\'s portfolio';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    return (
      <div>
        <NextHead>
          <meta charSet="UTF-8" />
          <title>{props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content={props.description || defaultDesc} />
          <meta name="theme-color" content="#3f3f3f" />
          <meta name="apple-mobile-web-app-title" content="nicer00ster" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
          <link rel="apple-touch-icon" href="/static/touch-icon.png" />
          <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
          <link rel="icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800,700,300" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Squada+One" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
          <style>{`
            @font-face {
              font-family: 'Courier Prime Sans';
              src: url('../static/fonts/Courier Prime Sans.ttf');
            }
            body, span {
              font-family: 'Courier Prime Sans';
            }
            button > span {
              font-family: 'Raleway';
            }
            @media all and (max-width: 600px) {
              main {
                ${this.props.open ? 'filter: blur(7px);' : '' };
              }
            }
            `}</style>
          </NextHead>
          <Navbar />
          {props.children}
      </div>
    )
  }
}

export default connect()(Layout);
