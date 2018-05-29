import Cursor from '../components/Cursor';
import Progress from '../components/Progress';
import Typing from 'react-typing-animation';
import { toggleTerminal } from './store';
import { connect } from 'react-redux';

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSegment: false,
      secondSegment: false,
      thirdSegment: false,
      fourthSegment: false,
      fifthSegment: false,
      sixthSegment: false
    }
  }
  nextText(segment) {
    this.setState({ [segment]: true });
  }
  render() {
    return (
      <div className="hypertext">
        <Typing onFinishedTyping={() => this.nextText('firstSegment')} startDelay={1000} cursor={<Cursor />} className="hypertext__line" speed={25} >
          <Typing.Delay ms={2000} />
          <ul>
            <li>
              <span className="hypertext__span">
                <span className="hypertext__line">$ >></span>{' '}
                <span className="hypertext__line">npm install -g nicer00ster</span>
              </span>
            </li>
          </ul>
            <Typing.Delay ms={500} />
          </Typing>
          {this.state.firstSegment && (
            <Typing onFinishedTyping={() => this.nextText('secondSegment')} cursor={<Cursor />} className="hypertext__line" speed={25} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  JavaScript: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] <Progress num={85}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
          {this.state.secondSegment && (
            <Typing onFinishedTyping={() => this.nextText('thirdSegment')} cursor={<Cursor />} className="hypertext__line" speed={25} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  React: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;&#9633;] <Progress num={80}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
          {this.state.thirdSegment && (
            <Typing onFinishedTyping={() => this.nextText('fourthSegment')} cursor={<Cursor />} className="hypertext__line" speed={25} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  NodeJS: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;&#9633;&#9633;] <Progress num={70}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
          {this.state.fourthSegment && (
            <Typing onFinishedTyping={() => this.nextText('fifthSegment')} cursor={<Cursor />} className="hypertext__line" speed={25} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  Sketch: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;&#9633;&#9633;] <Progress num={65}/>
                </span>
              </li>
            </ul>
            <Typing.Delay loop cursor={<Cursor />} ms={500} />
          </Typing>
          )}
          {this.state.fifthSegment && (
            <Typing onFinishedTyping={() => this.nextText('sixthSegment')} cursor={<Cursor />} className="hypertext__line" speed={25} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  Python/Django: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;&#9633;&#9633;] <Progress num={70}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
          {this.state.sixthSegment && (
            <Typing cursor={<Cursor />} className="hypertext__line" speed={25} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  Cooking: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;] <Progress num={99.9}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
            {/* <li>
              <span className="hypertext__span">
                <span className="hypertext__line"> $ >></span>{' '}
                React: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 80%
              </span>
            </li>
            <Typing.Delay ms={1000} />
            <li>
              <span className="hypertext__span">
                <span className="hypertext__line"> $ >></span>{' '}
                Sketch: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 65%
              </span>
            </li>
            <Typing.Delay ms={1000} />
            <li>
              <span className="hypertext__span">
                <span className="hypertext__line"> $ >></span>{' '}

                <Typing.Backspace count={10} delay={750} />
              </span>
            </li>
            <Typing.Delay ms={1000} />
            <li>
              <span className="hypertext__span">
                <span className="hypertext__line"> $ >></span> Neither
                could deleting a line of text.
                <Typing.Reset count={1} delay={750} />
                <span> Or the entire tree.</span>
                <Typing.Reset delay={2000} />
              </span>
            </li>
            </ul>
          </Typing> */}
      </div>
    )
  }
}

export default connect()(Terminal);
