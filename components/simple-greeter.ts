import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './count-display';
import '@material/web/button/elevated-button'
import '@material/web/button/filled-tonal-button'

@customElement('simple-greeter')
export class SimpleGreeter extends LitElement {
  static styles = css`
    div {
      border: 1px solid black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (prefers-color-scheme: dark) {
      div {
        border-color: white;
      }
    }

    span {
      color: rebeccapurple;
    }

    p {
      font-family: sans-serif;
    }
  `;

  @property()
  name = 'Somebody';

  @property({type: Number})
  count = 0;

  render() {
    return html`
      <div>
        <h1>Hello, <span>${this.name}</span>!</h1></br>
        <count-display .count=${this.count}></count-display></br>
        <button @click=${() => this.count++}>++</button></br>
        <md-elevated-button @click=${() => this.count++}>++</md-elevated-button></br>
        <md-filled-tonal-button @click=${() => this.count++}>++</md-filled-tonal-button></br>
      </div>
    `;
  }
}
