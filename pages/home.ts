import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-home')
export default class Home extends LitElement {
  static styles = css``

  render() {
    return html`
    <h1>Home</h1>
  `}
}