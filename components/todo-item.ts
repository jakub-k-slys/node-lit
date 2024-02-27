import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field';

@customElement('todo-item')
export default class ToDoItem extends LitElement {
    @property()
    text: string = '';

  render() {
    return html`
        <md-outlined-text-field .readOnly=${true} .value=${this.text}></md-outlined-text-field>
  `}
}