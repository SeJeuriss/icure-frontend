/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import './reports/ht-admin-reports-list-of-attestations.js';

import moment from 'moment/src/moment';
import _ from 'lodash/lodash';
import {TkLocalizerMixin} from "../tk-localizer";

import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
class HtAdminReports extends TkLocalizerMixin(PolymerElement) {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
                display: block;
            }

            :host *:focus {
                outline: 0 !important;
            }

            .col-left {
                position: relative;
                box-sizing: border-box;
                grid-column: 1 / 1;
                grid-row: 1 / 1;
                background: var(--app-background-color-dark);
                @apply --shadow-elevation-3dp;
                padding: 24px 0;
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                height: 100%;
                width: 100%;
                overflow-y: auto;
                overflow-x: hidden;
                z-index: 25;
            }


        </style>

        <template is="dom-if" if="[[listOfAttestationLayout]]">
            <ht-admin-reports-list-of-attestations id="admin-reports-list-of-attestations" api="[[api]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" user="[[user]]"></ht-admin-reports-list-of-attestations>
        </template>
`;
  }

  static get is() {
      return 'ht-admin-reports'
  }

  static get properties() {
      return {
          api: {
              type: Object,
              noReset: true
          },
          user: {
              type: Object,
              noReset: true
          },
          selectedSubMenu: {
              type: String,
              observer: '_selectedReportsSubMenuChanged'
          },
          listOfAttestationLayout: {
              type: Boolean,
              value: false
          }
      }
  }

  static get observers() {
      return [];
  }

  constructor() {
      super()
  }

  ready() {
      super.ready()
  }

  _selectedReportsSubMenuChanged() {
      this.selectedSubMenu === "listOfAttestationSubMenu" ? this.set('listOfAttestationLayout', true) : null
  }
}

customElements.define(HtAdminReports.is, HtAdminReports)
