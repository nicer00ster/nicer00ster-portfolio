import svg from '../static/scripts/svgimports';
import TextLoop from 'react-text-loop';

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
      <div className="wrapper__image">
        <img src={`../static/images/photos/${props.page}-img.png`} alt="nicer00ster"/>
      </div>
      <div className={`wrapper__${props.page}`}>
        <div className={`wrapper__${props.page}--header`}>
          <h1 className={`wrapper__${props.page}--header-text`}>Hey!</h1>
        </div>
        <div className={`wrapper__${props.page}--content`}>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
          ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris</p>
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

export default Wrapper;
