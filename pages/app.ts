import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './todo';
import './about';
import './home';
import '@material/web/labs/navigationbar/navigation-bar'
import '@material/web/button/text-button'
import {Router} from '@lit-labs/router';

// @ts-expect-error: Property 'UrlPattern' does not exist
if (!globalThis.URLPattern) { 
  await import('urlpattern-polyfill');
}

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
    {path: '/', render: () => html`<my-home></my-home>`},
    {path: '/todo', render: () => html`<my-todo></my-todo>`},
    {path: '/about', render: () => html`<my-about></my-about>`},
  ]);

  render() {
    return html`
      <md-navigation-bar>
        <logo>#builtWithLit</logo>          
        <navigation-bar-items>
          <md-text-button @click=${() => this.router.goto('/')}>Home</md-text-button>
          <md-text-button @click=${() => this.router.goto('/todo')}>Todo</md-text-button>
          <md-text-button @click=${() => this.router.goto('/about')}>About</md-text-button>
        </navigation-bar-items>
      </md-navigation-bar>
      ${this.router.outlet()}
  `}
}