import NextHead from 'next/head';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import '../static/sass/styles.scss';

const defaultDesc = 'nicer00ster\'s portfolio';

class Layout extends React.Component {
  render() {
    const { title, description, open, children } = this.props;
    return (
      <div>
        <NextHead>
          <meta charSet="UTF-8" />
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
          <meta name="description" content={description || defaultDesc} />
          <meta name="theme-color" content="#ffc18e" />
          <meta name="apple-mobile-web-app-title" content="nicer00ster" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
          <link rel="apple-touch-icon" href="/static/touch-icon.png" />
          <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
          <link rel="icon" href="/static/favicon.ico" />
          <style dangerouslySetInnerHTML={{__html: `
            @font-face {
              font-family: 'Courier Prime Sans';
              font-display: auto;
              src: url('../static/fonts/Courier Prime Sans.ttf');
            }

            @font-face {
              font-family: 'Squada One';
              font-display: auto;
              src: url('../static/fonts/SquadaOne-Regular.ttf');
            }

            @font-face {
              font-family: 'Raleway';
              font-display: auto;
              src: url('../static/fonts/Raleway-Regular.ttf');
            }

            body {
              font-display: auto;
              font-family: 'Squada One';
            }

            @media all and (max-width: 600px) {
              main {
                ${open ? 'filter: blur(7px);' : '' };
              }
            }`}} />
          </NextHead>
          <Navbar />
          {children}
      </div>
    )
  }
}

export default connect()(Layout);
