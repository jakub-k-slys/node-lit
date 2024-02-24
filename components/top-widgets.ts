import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/web/icon/icon'

@customElement('app-top-widgets')
export default class TopWidgets extends LitElement {
  static styles = css`
.widget-container {
  display: flex;
  align-items: space-between;
  width: 100%;
  .widget {
    width: 175px;
    height: 175px;
    background-color: #fff;
    color: #fff;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 5px 5px 5px #939393;
    display: flex;
    align-items: center;
    padding: 20px;
    &.green {
      background-color: rgb(4, 67, 66);
    }
    &.yellow {
      background-color: rgb(237, 158, 32);
    }
    &.red {
      background-color: rgb(126, 5, 5);
    }
    &.blue {
      background-color: rgb(105, 32, 251);
    }

    .icon {
      width: 30px;
      font-size: 60px;
      text-align: center;
      @media only screen and (max-width: 1200px) {
        font-size: 45px;
      }
    }

    .value {
      text-align: center;
      width: 100px;
      .top {
        font-size: 30px;
        @media only screen and (max-width: 1200px) {
          font-size: 26px;
        }
      }
      .bottom {
        font-size: 20px;
        margin-top: 10px;
        @media only screen and (max-width: 1200px) {
          font-size: 16px;
        }
      }
    }
  }
}
md-icon {
  font-family: 'Material Icons' !important;
}
`

  render() {
    return html`
<div class="widget-container">
  <div class="widget green">
    <div class="icon">
      <md-icon>location_on</md-icon>
    </div>
    <div class="value">
      <div class="top">32</div>
      <div class="bottom">Locations</div>
    </div>
  </div>
  <div class="widget yellow">
    <div class="icon">
      <md-icon>storefront</md-icon>
    </div>
    <div class="value">
      <div class="top">295</div>
      <div class="bottom">Shops</div>
    </div>
  </div>
  <div class="widget red">
    <div class="icon">
      <md-icon>category</md-icon>
    </div>
    <div class="value">
      <div class="top">45784</div>
      <div class="bottom">Products Sold</div>
    </div>
  </div>
  <div class="widget blue">
    <div class="icon">
      <md-icon>receipt_long</md-icon>
    </div>
    <div class="value">
      <div class="top">346928</div>
      <div class="bottom">Total Revenue</div>
    </div>
  </div>
</div>
  `}
}