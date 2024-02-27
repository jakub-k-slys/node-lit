import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../components/sidenav';
import '../components/appmain';

@customElement('app-home')
export default class Home extends LitElement {
  static styles = css`
  .main-container {
    display: flex;
   .side-nav {
    width: 350px;
    min-width: 230px;
    min-height: calc(100vh - 70px);
    background-color: #113c60;
    color: #fff;
    box-shadow: 5px 5px 5px #939393;
    @media only screen and (max-width: 1300px) {
      width: 100px;
      min-width: 100px;
   } 
  }

  .main {
    padding: 30px;
  }`

  render() {
    return html`
    <div class="main-container">
      <div class="side-nav">
        <side-nav></side-nav>
      </div>
      <div class="main">
        <app-main></app-main>
      </div>
    </div>
  `}
}