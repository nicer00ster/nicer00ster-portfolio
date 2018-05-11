import Link from 'next/link';
import Overdrive from 'react-overdrive';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import { nextConnect } from '../components/store';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Home" children={this.props.children} />
        <Wrapper page={'landing'} />
        <Overdrive id="page-transition">
          <div className="home__wrapper">
            <div className="home__wrapper--first">

            </div>
            <div className="home__wrapper--second">

            </div>
          </div>
        </Overdrive>
        <Footer />
      </div>
    )
  }
}

export default nextConnect((state) => state)(Index);
