import NextHead from 'next/head';
import { nextConnect } from './store'
import Navbar from './Navbar';
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
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          <style>{`
            @font-face {
              font-family: 'Courier Prime Sans';
              src: url('../static/fonts/Courier Prime Sans.ttf');
            }
            body, span {
              font-family: Courier Prime Sans;
            }
            `}</style>
          </NextHead>
          <Navbar />
          {props.children}
      </div>
    )
  }
}

export default nextConnect((state) => state)(Layout);
