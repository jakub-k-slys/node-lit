import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import '../components/todo-item';
import '@material/web/labs/navigationbar/navigation-bar';
import '@material/web/list/list';
import '@material/web/list/list-item';
import '@material/web/elevation/elevation';
import '@material/web/button/filled-button';
import '@material/web/button/text-button';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

@customElement('app-todo')
export default class Todo extends LitElement {
  static styles = css`
    .main-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px;
      flex-direction: row;
    }

    .todo-items {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-direction: column;
      --md-elevation-level: 3;
      padding: 10px;
      width: 400px;
      border-radius: 5px;
    }

    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 400px;
      margin: 10px;
    }

    .new-item {
      background-color: white;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: space-between;
      --md-elevation-level: 3;
      padding: 20px;
      width: 400px;
      border-radius: 5px;
    }

    .separator {
      width: 40px;
    }
  `;

  @property({type: Array})
  items = [
    {id: 1, text: 'This is my first TODO item'}, 
    {id: 2, text: 'This is my second TODO item'}, 
    {id: 3, text: 'This is my third TODO item'},
  ];

  @query('.new-item md-outlined-text-field')
  newItem! : MdOutlinedTextField;

  addItem() {
    this.items = [...this.items, {id: this.items.length + 1, text: this.newItem.value}];
    this.newItem.value = '';
  }

  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  render() {
    return html`
      <div class="main-container">
        <div class="new-item">
          <md-elevation></md-elevation>
          <md-outlined-text-field></md-outlined-text-field>
          <md-filled-button @click=${() => this.addItem()}>Add</md-filled-button>
        </div>
        <div class="separator"></div>
        <div class="todo-items">
          <md-elevation></md-elevation>
          ${this.items.map((item) =>
            html`
              <div class="todo-item">
                <md-outlined-text-field .readOnly=${true} .value=${item.text}></md-outlined-text-field>
                <md-filled-button @click=${() => this.removeItem(item.id)}>Remove</md-filled-button>
              </div>
            `)}
          </div>
      </div>
  `}
}