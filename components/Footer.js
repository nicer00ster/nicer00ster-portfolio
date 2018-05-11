import Link from 'next/link';
import svg from '../static/scripts/svgimports';
import { connect } from 'react-redux';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">

        <div class="hexagon__wrapper">
          <div class="hexagon">
            {svg.GithubIcon}
          </div>
        </div>
        <div class="hexagon__wrapper">
          <div class="hexagon">
            {svg.Facebook}
          </div>
        </div>
        <div class="hexagon__wrapper">
          <div class="hexagon">
            {svg.Instagram}
          </div>
        </div>
        <div class="hexagon__wrapper">
          <div class="hexagon">
            {svg.LinkedIn}
          </div>
        </div>
        <div class="hexagon__wrapper">
          <div class="hexagon">
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
