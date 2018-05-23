import Link from 'next/link';
import svg from '../static/scripts/svgimports';
import { connect } from 'react-redux';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">

        <div className="hexagon__wrapper">
          <div className="hexagon">
            {svg.GithubIcon}
          </div>
        </div>
        <div className="hexagon__wrapper">
          <div className="hexagon">
            {svg.Facebook}
          </div>
        </div>
        <div className="hexagon__wrapper">
          <div className="hexagon">
            {svg.Instagram}
          </div>
        </div>
        <div className="hexagon__wrapper">
          <div className="hexagon">
            {svg.LinkedIn}
          </div>
        </div>
        <div className="hexagon__wrapper">
          <div className="hexagon">
            {svg.Twitter}
          </div>
        </div>
      </div>
      <div className="footer__trademark">
        © 2018 Alex Busch
      </div>
    </div>
  )
}

export default connect()(Footer);
