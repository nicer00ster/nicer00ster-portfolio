import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import { nextConnect } from '../components/store';

class Work extends React.Component {
  render() {
    return (
      <div>
      <Layout title="nicer00ster | Work" />
      <Wrapper page={'work'} />
        <div className="work__wrapper">
          <div className="work__wrapper--card">

          </div>
          <div className="work__wrapper--projects">

          </div>
        </div>
      <Footer />
    </div>
    )
  }
}


export default nextConnect((state) => state)(Work);
