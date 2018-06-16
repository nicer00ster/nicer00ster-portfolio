import { connect } from 'react-redux';
import { filledSection } from './store';
import Modal from 'react-responsive-modal';
import Checkmark from './Checkmark';
import Plane from 'svg-react-loader?name=Plane!../static/images/svg/send.svg';
import Router from 'next/router';
import 'isomorphic-fetch';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      selected: '',
      message: '',
      status: '',
      open: false
    }
  }
  submitForm(name, email, selected, message) {
      fetch('/connect', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, /*/',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          selected,
          message
        })
      })
      .then(response => {
        console.log(response);
        response.status === 200 || !response ? this.setState({ status: 'success' }) : this.setState({ status: 'error' })
      })
      .then(() => {
        this.handleForm();
      })
      .catch(err => {
        console.error(err);
        this.setState({ status: 'error' })
      })
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
    const { name, email, selected, message, open, status } = this.state;
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(() => {
      this.setState({ name: '', email: '', message: '', selected: '' })
      Router.push(`/connect#${status}`)
      this.onOpenModal();
    }).then(() => {
      return new Promise(resolve => {
        setTimeout(resolve, 2350);
      }).then(() => {
        this.onCloseModal();
        Router.push('/connect')
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
          action="/connect"
          onSubmit={e => {
            e.preventDefault()
            this.submitForm(name, email, selected, message)
          }}>
        <label htmlFor="name"></label>
        <input
          onChange={event => this.handleName(event)}
          className={ name.length >= 2 ? "form__container--name filled" : "form__container--name" }
          required
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          type="text" />
        <label htmlFor="email"></label>
        <input
          onChange={event => this.handleEmail(event)}
          className={ email.length >= 2 ? "form__container--email filled" : "form__container--email" }
          required
          name="email"
          id="email"
          value={email}
          placeholder="Email"
          type="text" />
        <label htmlFor="message"></label>
        <select value={selected} onChange={event => this.handleSelected(event)} className={ selected ? "form__container--select filled" : "form__container--select" } placeholder="Subject" name="subject" id="subject_input" required>
          <option value="SUBJECT" hidden>Subject</option>
          <option value="JOB">Job Opportunity</option>
          <option value="ADVICE">Advice</option>
          <option value="OTHER">Other</option>
        </select>
        <textarea
          onChange={event => this.handleMessage(event)}
          name="message"
          className={ message.length >= 2 ? "form__container--message filled" : "form__container--message" }
          required
          name="message"
          value={message}
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
}, { filledSection })(Form);
