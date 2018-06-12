import { connect } from 'react-redux';
import { filledSection, submitForm } from './store';
import 'isomorphic-fetch';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      selected: '',
      message: ''
    }
  }
  // submitForm(name, email, message) {
  //   fetch('/api/contact', {
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json, text/plain, /*/',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       message
  //     })
  //   }).then((res) => {
  //     res.status === 200 ? this.setState({ submitted: true }) : '';
  //   })
  // }
  handleName(event) {
    this.setState({ name: event.target.value })
  }
  handleEmail(event) {
    this.setState({ email: event.target.value })
  }
  handleSelected(event) {
    this.setState({ selected: event.target.value })
  }
  handleMessage(event) {
    this.setState({ message: event.target.value })
  }
  render() {
    const { name, email, selected, message } = this.state;
    return (
      <form
          className="form__container"
          method="POST"
          action="/api/contact"
          onSubmit={e => {
            e.preventDefault()
            this.props.submitForm(name, email, selected, message)
          }}>
        <label htmlFor="name"></label>
        <input
          onChange={event => this.handleName(event)}
          className={ this.state.name.length >= 2 ? "form__container--name filled" : "form__container--name" }
          required
          name="name"
          id="name"
          placeholder="Name"
          type="text" />
        <label htmlFor="email"></label>
        <input
          onChange={event => this.handleEmail(event)}
          className={ this.state.email.length >= 2 ? "form__container--email filled" : "form__container--email" }
          required
          name="email"
          id="email"
          placeholder="Email"
          type="text" />
        <label htmlFor="message"></label>
        <select onChange={event => this.handleSelected(event)} className={ this.state.selected ? "form__container--select filled" : "form__container--select" } placeholder="Subject" name="subject" id="subject_input" required>
          <option value="SUBJECT" disabled selected hidden>Subject</option>
          <option value="JOB">Job Opportunity</option>
          <option value="ADVICE">Advice</option>
          <option value="OTHER">Other</option>
        </select>
        <textarea
          onChange={event => this.handleMessage(event)}
          name="message"
          className={ this.state.message.length >= 2 ? "form__container--message filled" : "form__container--message" }
          required
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="What's up?" />
        <button className="form__container--button">
          <span className="form__container--button-submit">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
              <path id="paper-plane-icon" d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z
              M202.992,332.528v124.517l58.738-67.927L202.992,332.528z">
              </path>
            </svg>
          </span>
        </button>
      </form>
    )
  }
}

export default connect(function(state) {
  return {
    filled: state.filled,
    submitted: state.submitted
   }
}, { filledSection, submitForm })(Form);
