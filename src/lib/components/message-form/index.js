// import styles from './index.css';
/* eslint no-underscore-dangle: 0 */
/* eslint-env browser */
import shadowStyles from './shadow.css';

// const slotName = 'message-input';

const template = `
  <style>${shadowStyles.toString()}</style>
  <form>
  <div class="result"></div>
  <form-input name="message_text" placeholder="Your username" slot="message-input">
    <span slot="icon"></span>
  </form-input>
  <form-input name="message_text" placeholder="Your email" slot="message-input">
    <span slot="icon"></span>
  </form-input>
  <form-input name="message_text" placeholder="Your name" slot="message-input">
    <span slot="icon"></span>
  </form-input>
  <form-input name="message_text" placeholder="Your birthday" slot="message-input">
  <span slot="icon"></span>
    </form-input>
  </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
    this._initElements();
    this._addHandlers();
  }

  static get observedAttributes() {
    return [
      'action',
      'method',
    ];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._elements.form[attrName] = newVal;
  }

  _initElements() {
    const form = this.shadowRoot.querySelector('form');
    const message = this.shadowRoot.querySelector('.result');
    message.innerHTML = localStorage.getItem('message');
    this._elements = {
      form,
      message,
    };
  }

  _addHandlers() {
    this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
    this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
    // this._elements.inputSlot.addEventListener('slotchange', this._onSlotChange.bind(this));
  }

  _onSubmit(event) {
    this._elements.message.innerText = Array.from(this._elements.form.elements).map(
      el => el.value,
    ).join(', ');
    localStorage.setItem('message', this._elements.message.innerText);
    event.preventDefault();
    return false;
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this._elements.form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);