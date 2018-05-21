import Link from 'next/link';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import { nextConnect } from '../components/store';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Home" />
        <Wrapper page={'landing'} />
          <div className="home__wrapper">
            <div className="home__wrapper--first">

            </div>
            <div className="home__wrapper--second">

            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default nextConnect((state) => state)(Index);
