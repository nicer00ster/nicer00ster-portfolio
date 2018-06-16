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
      // data: {},
      // error: null,
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
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
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
    const { status } = this.state;
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(() => {
      this.setState({ name: '', email: '', message: '', selected: '' })
      Router.push(`/connect#${status}`)
      this.onOpenModal();
    }).then(() => {
      return new Promise(resolve => {
        setTimeout(resolve, 2250);
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
}, { filledSection })(Form);
