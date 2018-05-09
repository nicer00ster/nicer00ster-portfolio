import { connect } from 'react-redux';
import { toggleMenu } from './store';
import Hamburger from 'svg-react-loader?name=Menu!../static/images/svg/nav/menu.svg';

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
