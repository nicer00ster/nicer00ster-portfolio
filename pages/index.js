import Link from 'next/link';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Seperator from '../components/Seperator';
import Terminal from '../components/Terminal';
import Quote from '../components/Quote';
import { nextConnect } from '../components/store';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Home" open={this.props.open} />
          <main>
            <Wrapper
              page={'home'}
              heading={'Alex Busch'}
              subHeading={'Front-end Web Developer'}
              content={'Highly proficient in fully responsive design and a strong passion for scalable, clean and maintainable code.'}
              subContent={<p className="wrapper__work--content_sub">Breaking the barrier of comfort and fulfilling a vision.</p>}
            />
            <Seperator />
              <div className="home__wrapper">
                <div className="home__wrapper--latest">
                  <div className="home__wrapper--latest-header">
                    <h1>Recent work</h1>
                  </div>
                  <div className="home__wrapper--latest-content">
                    <div className="home__wrapper--latest-content_first">
                      <img src="../../static/images/photos/S9Coconuts.png" alt="Money saving app built with React Native"/>
                    </div>
                    <div className="home__wrapper--latest-content_second">
                      <img src="../../static/images/photos/HyperTerminal.png" alt="Web app built with React"/>
                      <Terminal />
                    </div>
                    <div className="home__wrapper--latest-content_third">
                      <img src="../../static/images/photos/S9I2M.png" alt="Company I2M application built with React Native"/>
                    </div>
                  </div>
                </div>
                <Seperator />
                <Seperator />
                <div className="home__wrapper--section">
                  <div className="home__wrapper--section-memorable">
                    <div className="home__wrapper--section-memorable-header">
                      <h1>Memorable Moments</h1>
                    </div>
                    <div className="home__wrapper--section-memorable-content">
                      <a target="_blank" href="https://30under30.zagat.com/2015/philadelphia#4" className="home__wrapper--section-memorable-content_zagat">
                        <img src="../../static/images/photos/zagat.png" alt="Picture of culinary award"/>
                      </a>
                      <a target="_blank" href="https://www.youtube.com/watch?v=NBhGc065XIs" className="home__wrapper--section-memorable-content_ferrari">
                        <img src="../../static/images/photos/ferarri.jpg" alt="I won a ferarri, actually"/>
                      </a>
                      <a className="home__wrapper--section-memorable-content_other">
                        <img src="http://www.sheltieplanet.com/img/sheltie-puppy-smile.jpg" alt="Something else here"/>
                      </a>
                    </div>
                  </div>
                  <div className="home__wrapper--section-item2">
                    <Quote
                      url='https://www.franklincovey.com/the-7-habits.html'
                      quote='The proactive approach to a mistake is to acknowledge it instantly, correct and learn from it.'
                      author='Stephen Covey'
                      relation='The 7 Habits of Highly Effective People'
                    />
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
