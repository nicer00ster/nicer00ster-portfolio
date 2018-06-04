import { connect } from 'react-redux';

const Form = () => (
  <form className="form__container">
    <input className="form__container--firstname" required placeholder="First Name" type="text"/>
    <input className="form__container--lastname" required placeholder="Last Name" type="text"/>
    <textarea className="form__container--message" required name="" id="" cols="30" rows="10" placeholder="What's up?"></textarea>
    <div className="form__container--button">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect class="form__container--button-svg" height="60" width="320" />
      </svg>
      <input className="form__container--button-submit" type="submit" />
    </div>
  </form>
)


export default connect()(Form);
