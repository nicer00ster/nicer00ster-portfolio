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
          <Wrapper page={'connect'} />
            <Seperator />
              <div className="connect__wrapper">
                <div className="connect__wrapper--form">
                  <Form />
                </div>
                <div className="connect__wrapper--formphoto">
                  
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
