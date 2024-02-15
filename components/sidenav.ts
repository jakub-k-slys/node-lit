import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/web/icon/icon'

@customElement('side-nav')
export default class SideNav extends LitElement {
  static styles = css`
  .nav-items {
    padding-top: 40px;
    .nav-item {
      padding: 25px 50px;
      cursor: pointer;
      @media only screen and (max-width: 1300px) {
        padding: 25px 40px;
      }
      &:hover {
        background-color: rgb(1, 38, 69);
      }
      span {
        display: inline;
      }
    }`

  render() {
    return html`
    <div class="nav-items">
      <div class="nav-item">
        <md-icon>settings</md-icon>
        <span>Dashboard</span>
      </div>
      <div class="nav-item">
        <span>Locations</span>
      </div>
      <div class="nav-item">
        <span>Shops</span>
      </div>
      <div class="nav-item">
        <span>Products</span>
      </div>
      <div class="nav-item">
        <span>Sales</span>
      </div>
      <div class="nav-item">
        <span>Statistics</span>
      </div>
      <div class="nav-item">
        <span>Contact</span>
      </div>
      <div class="nav-item">
        <span>Help</span>
      </div>
    </div>
  `}
}