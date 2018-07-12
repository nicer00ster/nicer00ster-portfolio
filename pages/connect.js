import Layout from '../components/Layout';
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
                  <picture>
                    <source
                      media="(min-width: 850px)"
                      srcSet="../static/images/photos/home-img.png"
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
