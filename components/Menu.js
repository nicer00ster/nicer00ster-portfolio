import { connect } from 'react-redux';
import Hamburger from 'svg-react-loader?name=Menu!../static/images/svg/nav/menu.svg';
import { toggleMenu } from './store';

const Menu = ({ toggleMenu }) => {
  return (
    <div className="navbar__menu hamburger">
      <a onClick={ toggleMenu }>
        <Hamburger className="navbar__item--svg" />
      </a>
    </div>
  )
}

export default connect(null, { toggleMenu })(Menu);
