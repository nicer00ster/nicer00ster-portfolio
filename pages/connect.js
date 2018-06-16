import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Seperator from '../components/Seperator';
import Form from '../components/Form';
import { nextConnect } from '../components/store';
import Router from 'next/router';


class Connect extends React.Component {
  // static async getInitialProps ({ res, query }) {
  //   const statusCode = !query.eventId ? 404 : 200;
  //   if(statusCode !== 200) {
  //     res.statusCode = statusCode;
  //   }
  //   return { statusCode };
  // }
  // validateEmail() {
  //   const { url } = this.props
  //   const currentHash = url.query.hash ? url.query.hash : 'error'
  //   const href = `/connect#${currentHash}`
  //   Router.push(href, href, { shallow: true })
  // }
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Connect" open={this.props.open} />
        <main>
          <Wrapper page={'connect'} />
            <Seperator />
              <div className="connect__wrapper">
                <div className="connect__wrapper--form">
                  <div className="connect__wrapper--form-header">
                    <h2 className="connect__wrapper--form-header_text">Get In Touch!</h2>
                  </div>
                  <Form />
                </div>
                <div className="connect__wrapper--self">
                  <picture //onClick={() => this.validateEmail()}
                    >
                    <source
                      media="(min-width: 850px)"
                      srcSet={`../static/images/photos/WinstonS9.png`}
                    />
                    <img src="" alt="nicer00ster"/>
                  </picture>
                </div>
              </div>
              <Seperator />
          <Footer />
        </main>
      </div>
    )
  }
}

export default nextConnect((state) => state)(Connect);
