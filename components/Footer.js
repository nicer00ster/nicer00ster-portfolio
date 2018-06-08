import Link from 'next/link';
import svg from '../static/scripts/svgimports';
import { connect } from 'react-redux';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <a href="https://github.com/nicer00ster" aria-label="My GitHub Page" rel="noopener" target="_blank" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.GithubIcon}
          </div>
        </a>
        <a href="https://www.facebook.com/alex.busch.353" aria-label="My Facebook Page" rel="noopener" target="_blank" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.Facebook}
          </div>
        </a>
        <a href="https://www.instagram.com/abuschhh/" aria-label="My Instagram Page" rel="noopener" target="_blank" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.Instagram}
          </div>
        </a>
        <a href="https://www.linkedin.com/in/alex-busch-4743bb142/" aria-label="My LinkedIn Page" rel="noopener" target="_blank" className="hexagon__wrapper">
          <div className="hexagon">
            {svg.LinkedIn}
          </div>
        </a>
        <a href="https://twitter.com/nicer00ster" aria-label="My Twitter Page" rel="noopener" target="_blank" className="hexagon__wrapper">
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
