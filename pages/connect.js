import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import { nextConnect } from '../components/store';

class Connect extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Connect" />
        {/* <Wrapper page={'landing'} /> */}
          <div>
            <p>Connect</p>
          </div>
        <Footer />
      </div>
    )
  }
}

export default nextConnect((state) => state)(Connect);
