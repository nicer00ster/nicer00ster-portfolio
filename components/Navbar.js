import Link from './Link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Menu from './Menu';

import { toggleMenu } from './store';
import { connect } from 'react-redux';

import Chicken from 'svg-react-loader?name=Chicken!../static/images/svg/nav/chicken.svg';
import Smartphone from 'svg-react-loader?name=Smartphone!../static/images/svg/nav/smartphone.svg';
import House from 'svg-react-loader?name=House!../static/images/svg/nav/house.svg';
import Telephone from 'svg-react-loader?name=Telephone!../static/images/svg/nav/telephone.svg';


Router.onRouteChangeStart = (url) => {
  console.log(`Loading ${url}`)
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();



const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      </Head>
      <div>
        <div className={ isOpen ? "navbar open" : "navbar" }>
            <ul className="navbar__links">
              <li className="navbar__item">
                <Link prefetch href="/">
                  <Chicken className="logo" width={200} height={100}/>
                </Link>
                <Menu />
              </li>
              <div className="navbar__navigation">
                <li className="navbar__item" onClick={ toggleMenu }>
                  <Link activeClassName="active" prefetch href="/">
                    <a className="navbar__link">
                      <House className="navbar__item--svg" width={100} height={50} />
                      <span className="navbar__item--text">Home</span>
                    </a>
                  </Link>
                </li>
                <li className="navbar__item" onClick={ toggleMenu }>
                  <Link activeClassName="active" prefetch href="/work">
                    <a className="navbar__link">
                      <Smartphone className="navbar__item--svg" width={100} height={50} />
                      <span className="navbar__item--text">Work</span>
                    </a>
                  </Link>
                </li>
                <li className="navbar__item" onClick={ toggleMenu }>
                  <Link activeClassName="active" prefetch href="/connect">
                    <a className="navbar__link">
                      <Telephone className="navbar__item--svg" width={100} height={50} />
                      <span className="navbar__item--text">Connect</span>
                    </a>
                  </Link>
                </li>
              </div>
            </ul>
        </div>
        <Menu isOpen={isOpen} />
      </div>
    </div>
  )
}


export default connect(function(state) {
  return { isOpen: state.open }
}, {toggleMenu})(Navbar);
