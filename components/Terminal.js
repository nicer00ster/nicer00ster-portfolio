import Cursor from '../components/Cursor';
import Typing from 'react-typing-animation';
import { toggleTerminal } from './store';
import { connect } from 'react-redux';

const Terminal = ({ isDone, toggleTerminal }) => {

  return (
    <div className="hypertext">
      <Typing
        startDelay={1000}
        className={'hypertext__nicer00ster'}
        onFinishedTyping={ toggleTerminal }
        >
          <span></span>
      </Typing>

      {isDone && (
        <Typing loop cursor={<Cursor />} className={'hypertext_cursor'} speed={55} className={'hypertext__content'}>
          <Typing.Delay ms={500} />
          <ul>
            <li>
              <span className={'hypertext__span'}>
                <span className={'hypertext__cursor'}> $ >></span>{' '}
                JavaScript: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 85%
              </span>
            </li>
            <Typing.Delay ms={2000} />
            <li>
              <span className={'hypertext__span'}>
                <span className={'hypertext__cursor'}> $ >></span>{' '}
                React: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 80%
              </span>
            </li>
            <Typing.Delay ms={1000} />
            <li>
              <span className={'hypertext__span'}>
                <span className={'hypertext__cursor'}> $ >></span>{' '}
                Sketch: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 65%
              </span>
            </li>
            <Typing.Delay ms={1000} />
            <li>
              <span className="hypertext__span">
                <span className={'hypertext__cursor'}> $ >></span>{' '}

                <Typing.Backspace count={10} delay={750} />
              </span>
            </li>
            <Typing.Delay ms={1000} />
            <li>
              <span className={'hypertext__cursor'}> $ >></span> Neither
              could deleting a line of text.
              <Typing.Reset count={1} delay={750} />
              <span> Or the entire tree.</span>
              <Typing.Reset delay={2000} />
            </li>
            </ul>
          </Typing>
      )}
    </div>

  )
}

export default connect(function(state) {
  return { isDone: state.terminal }
}, {toggleTerminal})(Terminal);
