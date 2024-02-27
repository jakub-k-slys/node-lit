import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-about')
export default class About extends LitElement {
  static styles = css``

  render() {
    return html`
    <h1>About</h1>
  `}
}