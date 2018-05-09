import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Overdrive from 'react-overdrive';
import NodeJS from 'svg-react-loader?name=NodeJS!../static/images/svg/landing/nodejs.svg';
import { nextConnect } from '../components/store';

class Work extends React.Component {
  render() {
    return (
      <div>
      <Layout title="nicer00ster | Work" />
      <Wrapper page={'landing'} />
      <Overdrive id="page-transition">
        <div>
          <p>Work</p>
          <ul className="hexagon">
            <li className="hexagon__item">
              <div className="hexagon__item--inner">
                <a className="hexagon__item--inner-link" href="#">
                  <NodeJS width={185} height={200} />
                  <h1>This is a title</h1>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li className="hexagon__item">
              <div className="hexagon__item--inner">
                <a className="hexagon__item--inner-link" href="#">
                  <NodeJS />
                  <h1>This is a title</h1>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li className="hexagon__item">
              <div className="hexagon__item--inner">
                <a className="hexagon__item--inner-link" href="#">
                  <NodeJS />
                  <h1>This is a title</h1>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li className="hexagon__item">
              <div className="hexagon__item--inner">
                <a className="hexagon__item--inner-link" href="#">
                  <NodeJS />
                  <h1>This is a title</h1>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li className="hexagon__item">
              <div className="hexagon__item--inner">
                <a className="hexagon__item--inner-link" href="#">
                  <NodeJS />
                  <h1>This is a title</h1>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li className="hexagon__item">
              <div className="hexagon__item--inner">
                <a className="hexagon__item--inner-link" href="#">
                  <NodeJS />
                  <h1>This is a title</h1>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li className="hexagon__item">
              <div className="hexagon__item--inner">
                <a className="hexagon__item--inner-link" href="#">
                  <NodeJS />
                  <h1>This is a title</h1>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li className="hexagon__item">
              <div className="hexagon__item--inner">
                <a className="hexagon__item--inner-link" href="#">
                  <NodeJS />
                  <h1>This is a title</h1>
                  <p>Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Overdrive>
    </div>
    )
  }
}


export default nextConnect((state) => state)(Work);
