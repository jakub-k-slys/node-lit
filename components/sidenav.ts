import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/web/icon/icon';
import '@material/web/list/list';
import '@material/web/list/list-item';

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
    }
 
    md-icon {
  font-family: 'Material Icons' !important;
}`

  render() {
    return html`
    <div class="nav-items">
      <div class="nav-item">
        <md-icon>space_dashboard</md-icon>
        <span>Dashboard</span>
      </div>
      <div class="nav-item">
        <md-icon>pin_drop</md-icon>
        <span>Locations</span>
      </div>
      <div class="nav-item">
        <md-icon>shopping_bag</md-icon>
        <span>Shops</span>
      </div>
      <div class="nav-item">
        <md-icon>inventory_2</md-icon>
        <span>Products</span>
      </div>
      <div class="nav-item">
        <md-icon>point_of_sale</md-icon>
        <span>Sales</span>
      </div>
      <div class="nav-item">
        <md-icon>bar_chart</md-icon>
        <span>Statistics</span>
      </div>
      <div class="nav-item">
        <md-icon>call</md-icon>
        <span>Contact</span>
      </div>
      <div class="nav-item">
        <md-icon>help</md-icon>
        <span>Help</span>
      </div>
    </div>
  `}
}