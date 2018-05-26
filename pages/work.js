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
              {/* <div className="work__wrapper--greeting">
                <div className="work__wrapper--greeting-heading">
                  HELLO WELCOME TO MY PROJECTS PAGE
                </div>
              </div> */}
              <div className="work__wrapper--cards">
                <Card
                  imageUrl = {'https://images.pexels.com/photos/1115090/pexels-photo-1115090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                  imageAlt = {'Flowers'}
                  title = {'First'}
                  desc = {'This is my first project'}
                  buttonText = {'VIEW SOURCE CODE'}
                />
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
