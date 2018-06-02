import { connect } from 'react-redux';

const Form = () => (
  <form className="form__container">
    <input className="form__container--firstname" placeholder="First Name" type="text"/>
    <input className="form__container--lastname" placeholder="Last Name" type="text"/>
    <textarea className="form__container--message" name="" id="" cols="30" rows="10" placeholder="What's up?"></textarea>
    <input className="form__container--submit" type="submit"/>
  </form>
)


export default connect()(Form);
