import Link from 'next/link';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Seperator from '../components/Seperator';
import { nextConnect } from '../components/store';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Home" open={this.props.open} />
          <main>
            <Wrapper page={'home'} />
            <Seperator />
              <div className="home__wrapper">
                <div className="home__wrapper--latest">
                  <div className="home__wrapper--latest-header">
                    <h1>Recent work...</h1>
                  </div>
                  <div className="home__wrapper--latest-content">
                    <div className="home__wrapper--latest-content_first">
                      <img src="../../static/images/photos/S9Coconuts.png" alt="Money saving app built with React Native"/>
                    </div>
                    <div className="home__wrapper--latest-content_second">
                      <img src="../../static/images/photos/3Browser.png" alt="Web app built with React"/>
                    </div>
                    <div className="home__wrapper--latest-content_third">
                      <img src="../../static/images/photos/S9I2M.png" alt="Company I2M application built with React Native"/>
                    </div>
                  </div>
                </div>
                <Seperator />
                <div className="home__wrapper--second">
                  <div className="home__wrapper--second-item">

                  </div>
                  <div className="home__wrapper--second-item2">

                  </div>
                </div>
              </div>
              <Seperator />
            <Footer />
          </main>
        </div>
    )
  }
}

export default nextConnect((state) => state)(Index);
