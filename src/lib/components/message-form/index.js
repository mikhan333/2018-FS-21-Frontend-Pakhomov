// import styles from './index.css';
/* eslint no-underscore-dangle: 0 */
/* eslint-env browser */
import shadowStyles from './shadow.css';
import getPosition from '../../../utils/geolocation/geo';

const slotName = 'message-input';

const template = `
  <style>${shadowStyles.toString()}</style>
  <form class="form_drop">
    <div class="result"></div>
    <label>Information:</label><br>
    <form-input name="message_text" placeholder="Your username" slot="${slotName}">
      <span slot="icon"></span>
    </form-input>
    <form-input name="message_text" placeholder="Your email" slot="${slotName}>
      <span slot="icon"></span>
    </form-input>
    <form-input name="message_text" placeholder="Your name" slot="${slotName}">
      <span slot="icon"></span>
    </form-input>
    <form-input name="message_text" placeholder="Your birthday" slot="${slotName}">
      <span slot="icon"></span>
    </form-input><br>

    <label>Geo location:</label><br>
    <form-input class="geo_position" placeholder="Your geoposition" slot="${slotName}">
      <span slot="icon"></span>
    </form-input><br>

    <label>File:</label><br>
    <input type="file" class="file_input"><br>
    <img src="" class="picture" width="400">

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
    const geoposition = this.shadowRoot.querySelector('.geo_position');
    const infile = this.shadowRoot.querySelector('.file_input');
    const drop = this.shadowRoot.querySelector('.form_drop');

    message.innerHTML = localStorage.getItem('message');
    this._elements = {
      form,
      message,
      geoposition,
      infile,
      drop,
    };
  }

  _addHandlers() {
    this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
    this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
    this._elements.geoposition.addEventListener('click', this._onGeoClick.bind(this));
    this._elements.infile.addEventListener('change', this._onFile.bind(this));

    this._elements.drop.addEventListener('dragenter', MessageForm._onDrag.bind(this));
    this._elements.drop.addEventListener('dragover', MessageForm._onDrag.bind(this));
    this._elements.drop.addEventListener('drop', this._onDrop.bind(this));
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

  _onGeoClick(event) {
    const geoPromise = getPosition();
    geoPromise
      .then((position) => {
        this._elements.geoposition.setAttribute('value', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
      })
      .catch((err) => {
        this._elements.geoposition.setAttribute('value', `${err.message}`);
      });
    event.preventDefault();
    return false;
  }

  _onFile(event) {
    const miniature = this.shadowRoot.querySelector('.picture');
    const url = URL.createObjectURL(this.shadowRoot.querySelector('input[class=file_input]').files[0]);
    miniature.src = url;
    event.preventDefault();
    return false;
  }

  static _onDrag(event) {
    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  _onDrop(event) {
    const miniature = this.shadowRoot.querySelector('.picture');
    const url = URL.createObjectURL(event.dataTransfer.files[0]);
    miniature.src = url;
    event.stopPropagation();
    event.preventDefault();
    return false;
  }
}

customElements.define('message-form', MessageForm);
