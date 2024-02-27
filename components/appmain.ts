import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './top-widgets';

@customElement('app-main')
export default class AppMain extends LitElement {
  static styles = css`
  .top-section {
    @media only screen and (max-width: 1600px) {
      width: 1280px;
    }
    @media only screen and (max-width: 1500px) {
      width: 1180px;
    }
    @media only screen and (max-width: 1400px) {
      width: 1080px;
    }
    @media only screen and (max-width: 1200px) {
      width: 980px;
    }
  }
  .middle-section {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1600px) {
      width: 1280px;
    }
    @media only screen and (max-width: 1500px) {
      width: 1180px;
    }
    @media only screen and (max-width: 1400px) {
      width: 1080px;
    }
    @media only screen and (max-width: 1200px) {
      width: 980px;
    }
    .widget {
      height: 350px;
      background-color: #fff;
      border-radius: 5px;
      margin: 10px;
      box-shadow: 5px 5px 5px #939393;
      &.left {
        width: 890px;
        @media only screen and (max-width: 1600px) {
          width: 790px;
        }
        @media only screen and (max-width: 1500px) {
          width: 690px;
        }
        @media only screen and (max-width: 1400px) {
          width: 590px;
        }
        @media only screen and (max-width: 1200px) {
          width: 490px;
        }
      }
      &.right {
        width: 450px;
      }
    }
  }
  .bottom-section {
    display: flex;
    justify-content: space-between;
    .widget {
      height: 250px;
      background-color: #fff;
      border-radius: 5px;
      margin: 10px;
      box-shadow: 5px 5px 5px #939393;
      &.left {
        width: 670px;
        @media only screen and (max-width: 1200px) {
          width: 570px;
        }
      }
      &.right {
        width: 670px;
        @media only screen and (max-width: 1600px) {
          width: 570px;
        }
        @media only screen and (max-width: 1500px) {
          width: 470px;
        }
        @media only screen and (max-width: 1400px) {
          width: 370px;
        }
        @media only screen and (max-width: 1200px) {
          width: 370px;
        }
      }
    }
  }`

  render() {
    return html`
    <div class="top-section">
      <app-top-widgets></app-top-widgets>
    </div>
    <div class="middle-section">
      <div class="widget left">
        <app-seles-by-month></app-seles-by-month>
      </div>
      <div class="widget right">
        <app-seles-by-category></app-seles-by-category>
      </div>
    </div>
    <div class="bottom-section">
      <div class="widget left">
        <app-last-few-transactions></app-last-few-transactions>
      </div>
      <div class="widget right">
        <app-top-three-products></app-top-three-products>
      </div>
    </div>
  `}
}