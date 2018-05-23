import { connect } from 'react-redux';
import { toggleMenu } from './store';
import Hamburger from 'svg-react-loader?name=Menu!../static/images/svg/nav/menu.svg';
import Close from 'svg-react-loader?name=Close!../static/images/svg/nav/close.svg';


const Menu = ({ toggleMenu, isOpen }) => {
  return (
    <div className="navbar__menu hamburger">
      <a onClick={ toggleMenu }>
        {!isOpen ? <Hamburger className="navbar__item--svg" /> : <Close className="navbar__item--svg" />}
      </a>
    </div>
  )
}

export default connect(function(state) {
  return { isOpen: state.open }
}, {toggleMenu})(Menu);
