import Link from 'next/link';
import svg from '../static/scripts/svgimports';
import { connect } from 'react-redux';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <a href="" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.GithubIcon}
          </div>
        </a>
        <a href="" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.Facebook}
          </div>
        </a>
        <a href="" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.Instagram}
          </div>
        </a>
        <a href="" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.LinkedIn}
          </div>
        </a>
        <a href="" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.Twitter}
          </div>
        </a>
      </div>
      <div className="footer__trademark">
        © 2018 Alex Busch
      </div>
    </div>
  )
}

export default connect()(Footer);
