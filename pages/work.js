import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import Seperator from '../components/Seperator';
import { nextConnect } from '../components/store';

class Work extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Work" open={this.props.open} />
        <main>
          <Wrapper page={'work'} />
            <Seperator />
            <div className="work__wrapper">
              <div className="work__wrapper--cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <Seperator />
          <Footer />
        </main>
    </div>
    )
  }
}


export default nextConnect((state) => state)(Work);
