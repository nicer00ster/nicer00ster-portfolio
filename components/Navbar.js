import Link from 'next/link';
import Menu from './Menu';

import { toggleMenu } from './store';
import { connect } from 'react-redux';

import Chicken from 'svg-react-loader?name=Chicken!../static/images/svg/nav/chicken.svg';
import Smartphone from 'svg-react-loader?name=Smartphone!../static/images/svg/nav/smartphone.svg';
import House from 'svg-react-loader?name=House!../static/images/svg/nav/house.svg';
import Telephone from 'svg-react-loader?name=Telephone!../static/images/svg/nav/telephone.svg';
import Trophy from 'svg-react-loader?name=Trophy!../static/images/svg/nav/trophy.svg';

const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div className={ isOpen ? "navbar open active" : "navbar" }>
        <div className="navbar__links">
          <li className="navbar__item">
            <Link href="/">
              <Chicken className="logo" width={200} height={100}/>
            </Link>
          </li>
          <li className="navbar__item" onClick={ toggleMenu }>
            <Link href="/">
              <a className="navbar__link">
                <House className="navbar__item--svg" width={100} height={50} />
                <span className="navbar__item--text">Home</span>
              </a>
            </Link>
          </li>
          <li className="navbar__item" onClick={ toggleMenu }>
            <Link href="/work">
              <a className="navbar__link">
                <Smartphone className="navbar__item--svg" width={100} height={50} />
                <span className="navbar__item--text">Work</span>
              </a>
            </Link>
          </li>
          <li className="navbar__item" onClick={ toggleMenu }>
            <Link href="/connect">
              <a className="navbar__link">
                <Telephone className="navbar__item--svg" width={100} height={50} />
                <span className="navbar__item--text">Connect</span>
              </a>
            </Link>
          </li>
          <li className="navbar__item" onClick={ toggleMenu }>
            <Link href="/about">
              <a className="navbar__link">
                <Trophy className="navbar__item--svg" width={100} height={50} />
                <span className="navbar__item--text">About</span>
              </a>
            </Link>
          </li>
        </div>
      </div>
      <Menu />
    </div>
  )
}


export default connect(function(state) {
  return { isOpen: state.open }
}, {toggleMenu})(Navbar);
