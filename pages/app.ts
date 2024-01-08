import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../components/simple-greeter';

@customElement('my-app')
export default class App extends LitElement {
  static styles = css`
    .container {
      padding: 0 2rem;
      display: block;
    }

    .main {
      min-height: 100vh;
      padding: 4rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title a {
      color: #0070f3;
      text-decoration: none;
    }

    .title a:hover,
    .title a:focus,
    .title a:active {
      text-decoration: underline;
    }

    .title {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;
    }

    .title,
    .description {
      text-align: center;
    }

    .description {
      margin: 4rem 0;
      line-height: 1.5;
      font-size: 1.5rem;
    }

    .description a {
      color: #0070f3;
      text-decoration: none;
    }

    .description a:hover,
    .description a:focus,
    .description a:active {
      text-decoration: underline;
    }`;

  render() {
    return html`
      <div class=container>
        <head>
          <title>Lit in Vite</title>
          <link rel="icon" href="/assets/flame-favicon.svg" />
        </head>

        <main class=main>
          <h1 class=title>
            Welcome to <a href="https://lit.dev">Lit</a> and 
            <a href="https://vitejs.dev/">Vite!</a>
          </h1>
          <p class=description>
            The component below is a web component #builtWithLit
          </p>
          <simple-greeter name="Friend"></simple-greeter>
        </main>
      </div>
  `}
}