import svg from '../static/scripts/svgimports';
import TextLoop from 'react-text-loop';
import { connect } from 'react-redux';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false
    }
  }
  render() {
    const props = this.props;
    const wordArray = [
      'Passion',
      'Inspiration',
      'Purpose',
      'Desire',
      'Motive',
      'Drive'
    ];
    return (
        <div className="wrapper">
        <div className={`wrapper__image--${props.page}`}>
          <picture>
            <source
              media="(min-width: 850px)"
              srcSet={`../static/images/photos/${props.page}-img.png`}
            />
            <img src="" alt="nicer00ster"/>
          </picture>
          {/* <img src={require(`../static/images/photos/${props.page}-img.png`)} alt="nicer00ster"/> */}
        </div>
        <div className={`wrapper__${props.page}`}>
          <div className={`wrapper__${props.page}--header`}>
            <div className={`wrapper__${props.page}--header-text`}>
              <h1>{this.props.heading}</h1>
              <h5>{this.props.subHeading}</h5>
            </div>
          </div>
          <div className={`wrapper__${props.page}--content`}>
            <h2>{this.props.content}</h2>
          </div>
        </div>
        <div className={`wrapper__${props.page}--skill`}>
          <div className={`wrapper__${props.page}--skill-heading`}>
            <h2>This is my</h2>
            <TextLoop children={wordArray} springConfig={{ stiffness: 180, damping: 8 }} />
          </div>
          <ul>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Javascript}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Node}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Html}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.React}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Redux}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Python}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.MongoDB}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Django}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Es6}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Firebase}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Bootstrap}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Sketch}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Aws}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Webpack}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Babel}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Github}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.NextJS}
            </li>
            <li className={`wrapper__${props.page}--skill-item`}>
              {svg.Sass}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(Wrapper);
