import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/paper-tooltip/paper-tooltip.js'
import {TkLocalizerMixin} from "../tk-localizer";

import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
class HtPatHeTreeSettings extends TkLocalizerMixin(PolymerElement) {
  static get template() {
    return html`
        <style include="icpc-styles">
            :host {
                min-width: 36px;
                min-height: 24px;
            }

            div.settings-btn-container /*:hover*/
            {
                visibility: visible !important;
            }

            .settings-btn-container.open paper-icon-button.settings-btn {
                display: block;
            }

            .settings-btn-container #settings-btn-show {
                display: block;
            }

            .settings-btn-container.open #settings-btn-show.settings-btn {
                display: none;
            }

            .iron-selected:host .settings-btn-container {
                visibility: visible;
            }

            .settings-btn-container {
                border-radius: 12px;
                visibility: hidden;
                display: inline-flex;
                flex-flow: row-reverse wrap;
                justify-content: space-between;
                align-items: center;
                padding: 0 4px;
                width: 16px;
                height: 16px;
                overflow: hidden;
                transition: width .42s cubic-bezier(0.075, 0.82, 0.165, 1);
                cursor: pointer;
                transform-origin: right center;
            }

            .settings-btn-container.open {
                flex-basis: 64px;
                width: 64px;
                visibility: visible;
                flex-flow: row-reverse nowrap;
                background: var(--app-text-color);
                transition: background .42s cubic-bezier(0.075, 0.82, 0.165, 1);
            }

            .settings-btn-container.open .settings-btn {
                color: var(--app-text-color-light);
                transition: color .42s cubic-bezier(0.075, 0.82, 0.165, 1);
            }


            .settings-btn {
                height: 16px;
                width: 16px;
                padding: 2px;
                --paper-ink-color: var(--app-text-color-light);
            }

            .settings-btn-dark {
                color: var(--app-text-color);
                --paper-ink-color: var(--app-text-color);
            }

        </style>

        <div class="settings-btn-container">
            <paper-icon-button id="settings-btn-show" class="settings-btn" icon="settings" on-tap="_toggleEditSettings"></paper-icon-button>
            <paper-icon-button id="settings-btn-by-time" class="settings-btn" icon="hourglass-full" on-tap="_sortByTime"></paper-icon-button>
            <paper-icon-button id="settings-btn-by-code" class="settings-btn" icon="flag" on-tap="_sortByCode"></paper-icon-button>
            <paper-icon-button id="settings-btn-archived" class="settings-btn" icon="archive" on-tap="_toggleInactive"></paper-icon-button>
        </div>
        <div class="tooltips">
            <paper-tooltip position="bottom" for="settings-btn-show">[[localize('settings','Settings',language)]]
            </paper-tooltip>
            <paper-tooltip position="bottom" for="settings-btn-by-time">[[localize('by_dat','By date',language)]]
            </paper-tooltip>
            <paper-tooltip position="bottom" for="settings-btn-by-code">[[localize('by_code','By Code',language)]]
            </paper-tooltip>
            <paper-tooltip position="bottom" for="he-edit-btn-archived">
                [[localize('show_irr','ebmPracticeNet',language)]]
            </paper-tooltip>
        </div>
`;
  }

  static get is() {
      return 'ht-pat-he-tree-settings';
  }

  static get properties() {
      return {
          selected: {
              type: Boolean
          },
          user: {
              type: Object
          },
          section: {
              type: String
          }
      };
  }

  static get observers() {
      return [];
  }

  ready() {
      super.ready();
  }

  _toggleEditSettings(e) {
      e.stopPropagation();
      e.preventDefault();

      let parentElement = e.target.parentElement;
      if (parentElement.classList.contains('open')) {
      } else {
          parentElement.classList.add('open');
          setTimeout(() => parentElement.classList.remove('open'), 10000);
      }
  }

  _sortByTime(e) {
      e.stopPropagation();
      e.preventDefault();

      const sectionSort = `org.taktik.icure.${this.user.id}.settings.pat.tree.${this.section}.sort`
      localStorage.setItem(sectionSort, 'created')
      this.dispatchEvent(new CustomEvent('settings-changed', {
          detail: {
              section: this.section,
              type: 'sort',
              value: 'created'
          }, bubbles: true, composed: true
      }))
  }

  _sortByCode(e) {
      e.stopPropagation();
      e.preventDefault();

      const sectionSort = `org.taktik.icure.${this.user.id}.settings.pat.tree.${this.section}.sort`
      localStorage.setItem(sectionSort, 'icpc')
      this.dispatchEvent(new CustomEvent('settings-changed', {
          detail: {
              section: this.section,
              type: 'sort',
              value: 'icpc'
          }, bubbles: true, composed: true
      }))
  }

  _toggleInactive(e) {
      e.stopPropagation();
      e.preventDefault();

      const sectionShowInactive = `org.taktik.icure.${this.user.id}.settings.pat.tree.${this.section}.showInactive`
      localStorage.setItem(sectionShowInactive, localStorage.getItem(sectionShowInactive) === 'true' ? 'false' : 'true')
      this.dispatchEvent(new CustomEvent('settings-changed', {
          detail: {
              section: this.section,
              type: 'showInactive',
              value: localStorage.getItem(sectionShowInactive) === 'true'
          }, bubbles: true, composed: true
      }))
  }
}

customElements.define(HtPatHeTreeSettings.is, HtPatHeTreeSettings);
