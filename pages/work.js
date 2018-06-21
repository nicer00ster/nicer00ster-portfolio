import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import Seperator from '../components/Seperator';
import svg from '../static/scripts/svgimports';
import Link from 'next/link';
import { nextConnect } from '../components/store';

class Work extends React.Component {
  render() {
    return (
      <div>
        <Layout title="nicer00ster | Work" open={this.props.open} />
        <main>
          <Wrapper
            page={'work'}
            heading={'Work'}
            subHeading={'Projects and Contributions'}
            content={'Recognized for developing robust back-end structures and producing accessible, responsive designs.'}
            subContent={'Giving \"user-friendly\" a new name.'}
            url={<Link prefetch href="/connect"><a className="wrapper__work--content_url">Let's talk.</a></Link>}
           />
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
                  href={'https://alexanderbusch.com'}
                  title = {'My Old Blog'}
                  desc = {'Blog I built when I first began programming.'}
                  tags = {[svg.Javascript, svg.Python, svg.Django, svg.Bootstrap]}
                  buttonText = {'LINK 👀'}
                />
                <Card
                  imageUrl = {'../static/images/photos/CardI2M.png'}
                  imageAlt = {'Application to assist I2M clients.'}
                  href={'https://github.com/nicer00ster/i2m-mobile-app'}
                  title = {'I2M Mobile App'}
                  desc = {'Mobile application built for the company I currently work for.'}
                  tags = {[svg.Javascript, svg.React, svg.Firebase, svg.Aws]}
                  buttonText = {'REPO 👀'}
                />
                <Card
                  imageUrl = {'../static/images/photos/CardCoconuts.png'}
                  imageAlt = {'Application to help manage finances.'}
                  href={'https://github.com/nicer00ster/icon-project-nicer00ster'}
                  title = {'Coconut Cash'}
                  desc = {'Internship project done for a company in Switzerland.'}
                  tags = {[svg.Javascript, svg.React, svg.Firebase]}
                  buttonText = {'REPO 👀'}
                />
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
