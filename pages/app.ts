import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../components/todo-item';
import './todo';
import '@material/web/labs/navigationbar/navigation-bar'
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/elevation/elevation'
import '@material/web/button/filled-button'
import '@material/web/button/text-button'
import {Router} from '@lit-labs/router';

import {URLPattern} from 'urlpattern-polyfill';
// @ts-expect-error: Property 'UrlPattern' does not exist
globalThis.URLPattern = URLPattern

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
    }`;

  private router = new Router(this, [
    {path: '/', render: () => html`<h1>Home</h1>`},
    {path: '/todo', render: () => html`<my-todo></my-todo>>`},
    {path: '/about', render: () => html`<h1>About</h1>`},
  ]);

  render() {
    return html`
      <md-navigation-bar>
        <logo>#builtWithLit</logo>          
        <navigation-bar-items>
          <md-text-button @click=${() => this.router.goto('/')}>Home</md-text-button>
          <md-text-button @click=${() => this.router.goto('/todo')}>ToDo</md-text-button>
          <md-text-button @click=${() => this.router.goto('/about')}>About</md-text-button>
        </navigation-bar-items>
      </md-navigation-bar>
      ${this.router.outlet()}
  `}
}