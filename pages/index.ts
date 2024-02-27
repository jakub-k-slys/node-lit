import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './todo';
import './about';
import './home';
import '@material/web/labs/navigationbar/navigation-bar';
import '@material/web/button/elevated-button';
import {Router} from '@lit-labs/router';
import {URLPattern} from 'urlpattern-polyfill';
// @ts-expect-error: Property 'UrlPattern' does not exist
globalThis.URLPattern = URLPattern

@customElement('app-index')
export default class Index extends LitElement {
  static styles = css`    
    navigation-bar-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    navigation-bar-items md-elevated-button {
      margin: 10px;
    }

    
    logo {
      font-weight: bold;
      font-size: xx-large;
      font-style: oblique;
      padding: 20px;
      color: white;
    }
  
    
  `;

  private router = new Router(this, [
    {path: '/', render: () => html`<app-home></app-home>`},
    {path: '/todo', render: () => html`<app-todo></app-todo>`},
    {path: '/about', render: () => html`<app-about></app-about>`},
  ]);

  render() {
    return html`
      <md-navigation-bar>
        <logo>#builtWithLit</logo>          
        <navigation-bar-items>
          <md-elevated-button @click=${() => this.router.goto('/')}>Home</md-elevated-button>
          <md-elevated-button @click=${() => this.router.goto('/todo')}>Todo</md-elevated-button>
          <md-elevated-button @click=${() => this.router.goto('/about')}>About</md-elevated-button>
        </navigation-bar-items>
      </md-navigation-bar>
      ${this.router.outlet()}
  `}
}