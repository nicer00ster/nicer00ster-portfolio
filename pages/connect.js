import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Seperator from '../components/Seperator';
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
                </div>
              </div>
          <Footer />
        </main>
      </div>
    )
  }
}

export default nextConnect((state) => state)(Connect);
