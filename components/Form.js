import { connect } from 'react-redux';
import { filledSection, submitForm } from './store';
import Modal from 'react-responsive-modal';
import Checkmark from './Checkmark';
import Plane from 'svg-react-loader?name=Plane!../static/images/svg/send.svg';
import 'isomorphic-fetch';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      selected: '',
      message: '',
      open: false
    }
  }
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
  handleForm() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(() => {
      this.setState({ name: '', email: '', message: '', selected: '' })
      this.onOpenModal();
    }).then(() => {
      return new Promise(resolve => {
        setTimeout(resolve, 2250);
      }).then(() => {
        this.onCloseModal();
      })
    })
  }
  onOpenModal() {
    this.setState({ open: true })
  }
  onCloseModal() {
    this.setState({ open: false })
  }
  render() {
    const { name, email, selected, message, open } = this.state;
    return (
      <form
          className="form__container"
          method="POST"
          action="/api/contact"
          onSubmit={e => {
            e.preventDefault()
            this.props.submitForm(name, email, selected, message)
            this.handleForm();
          }}>
        <label htmlFor="name"></label>
        <input
          onChange={event => this.handleName(event)}
          className={ this.state.name.length >= 2 ? "form__container--name filled" : "form__container--name" }
          required
          name="name"
          id="name"
          placeholder="Name"
          value={this.state.name}
          type="text" />
        <label htmlFor="email"></label>
        <input
          onChange={event => this.handleEmail(event)}
          className={ this.state.email.length >= 2 ? "form__container--email filled" : "form__container--email" }
          required
          name="email"
          id="email"
          value={this.state.email}
          placeholder="Email"
          type="text" />
        <label htmlFor="message"></label>
        <select value={this.state.selected} onChange={event => this.handleSelected(event)} className={ this.state.selected ? "form__container--select filled" : "form__container--select" } placeholder="Subject" name="subject" id="subject_input" required>
          <option value="SUBJECT" hidden>Subject</option>
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
          value={this.state.message}
          id="message"
          cols="30"
          rows="10"
          placeholder="What's up?" />
        <button className="form__container--button">
          <span className="form__container--button-submit">
            <Plane />
          </span>
        </button>
        <Modal open={open} classNames={{ modal: 'checkmark__modal'}} onClose={() => this.onCloseModal()} showCloseIcon={false} center>
          <Checkmark />
        </Modal>
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
