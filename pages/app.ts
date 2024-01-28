import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../components/todo-item';
import '@material/web/labs/navigationbar/navigation-bar'
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/elevation/elevation'
import '@material/web/button/filled-button'
import '@material/web/button/text-button'

@customElement('my-app')
export default class App extends LitElement {
  static styles = css`
    navigation-bar-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    logo {
      font-weight: bold;
      font-size: xx-large;
      font-style: oblique;
      padding: 20px;
      color: white;
    }

    main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 20px;
      margin: 20px;
      background-color: white;
      flex-direction: column;
    }

    todo-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      flex-direction: column;
      --md-elevation-level: 3;
      min-width:50%;
    }

    todo-items ul li {
      display: flex;
      align-items: center;
    }

    todo-items ul li > * {
      margin: 20px;
    }

    todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    new-item {
      padding: 20px;
      display: flex;
      align-items: center;
      position: relative;
      --md-elevation-level: 3;
      min-width:50%;
    }
    
    new-item > * {
      margin: 20px;
    }`;

  @property({type: Array})
  items = [
    {id: 1, text: 'This is my first TODO item'}, 
    {id: 2, text: 'This is my second TODO item'}, 
    {id: 3, text: 'This is my third TODO item'},
  ];

  @property({type: String})
  newItem = '';

  addItem() {
    this.items = [...this.items, {id: this.items.length + 1, text: this.newItem}];
    this.newItem = '';
  }

  render() {
    return html`
      <md-navigation-bar>
        <logo>#builtWithLit</logo>          
        <navigation-bar-items>
          <md-text-button>Home</md-text-button>
          <md-text-button>About</md-text-button>
        </navigation-bar-items>
      </md-navigation-bar>
      <main>
        <new-item>
          <md-elevation></md-elevation>
          <md-outlined-text-field .value=${this.newItem}></md-outlined-text-field>
          <md-filled-button @click=${this.addItem}>Add</md-filled-button>
        </new-item>
        <todo-items>
          <md-elevation></md-elevation>
          <ul>
          ${this.items.map((item) =>
            html`
              <li>
                <md-outlined-text-field .readOnly=${true} .value=${item.text}></md-outlined-text-field>
                <md-filled-button>Remove</md-filled-button>
              </li>
            `)}
          </ul>
        </todo-items>
      </main>
  `}
}