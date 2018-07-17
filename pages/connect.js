import Layout from '../components/Layout';
import LazyLoad from 'react-lazyload';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Seperator from '../components/Seperator';
import Form from '../components/Form';
import { nextConnect } from '../components/store';


class Connect extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Connect" open={this.props.open} />
        <main>
          <Wrapper
            page="connect"
            heading="Questions?"
            subHeading="You've came to the right place."
            content="Want to get in touch? Fill out the form below to drop me a line!"
           />
            <Seperator />
              <div className="connect__wrapper">
                <div className="connect__wrapper--form">
                  <div className="connect__wrapper--form-header">
                    <h2 className="connect__wrapper--form-header_text">Get In Touch!</h2>
                  </div>
                  <Form />
                </div>
                <div className="connect__wrapper--self">
                  <LazyLoad height={200}>
                    <img src="http://ddnvci6v3n3lw.cloudfront.net/alex/home-img.png" alt="nicer00ster"/>
                  </LazyLoad>
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
