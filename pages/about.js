import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Overdrive from 'react-overdrive';
import { nextConnect } from '../components/store';

class About extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | About" />
        {/* <Wrapper page={'landing'} /> */}
        <Overdrive id="page-transition">
          <div>
            <p>about</p>
          </div>
        </Overdrive>
        <Footer />
      </div>
    )
  }
}

export default nextConnect((state) => state)(About);
