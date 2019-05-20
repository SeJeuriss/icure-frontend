import '@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/paper-input/paper-input-container.js'
import './dynamic-link.js';
import {TkLocalizerMixin} from "../tk-localizer";
import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
class DynamicTextArea extends TkLocalizerMixin(PolymerElement) {
  static get template() {
    return html`
        <style>
            :host {
                position: relative;
                flex-grow: 1;
                min-width: calc(var(--dynamic-field-width-percent, '100%') - 12px);
                margin: 0 6px;
                --paper-font-caption_-_line-height: var(--font-size-normal);
            }

            dynamic-link {
                position: absolute;
                right: 0;
                top: 15px;
                height: calc(100% - 17px);
                background: var(--app-input-background-color);
                border-radius: 0 4px 0 0;
                box-sizing: border-box;
            }

            .modified-icon {
                width: 18px;
            }

            .modified-previous-value {
                color: var(--app-text-color-disabled);
                text-decoration: line-through;
                font-style: italic;
            }

            .modified-before-out {
                color: var(--app-secondary-color-dark);
                text-align: right;
                float: right;
                font-style: italic;
                border-bottom: 1px dotted var(--app-secondary-color-dark);
            }

            .modified-after-out {
                color: var(--app-secondary-color-dark);
                text-align: right;
                float: right;
                font-style: italic;
                border-bottom: 1px dotted var(--app-secondary-color-dark);
            }

            paper-input, paper-input-container {
                --paper-input-container-focus-color: var(--app-secondary-color) !important;
                --paper-input-container: {
                    padding: 0;
                    min-height: 40px;
                    height: auto;
                };

                --paper-input-container-input: {
                    height: auto;
                    min-height: 22px;
                    font-size: var(--font-size-normal);
                    line-height: var(--font-size-normal);
                    box-sizing: border-box;
                    background: var(--app-input-background-color);
                    border-radius: 4px 0 0 0;
                };

                --paper-input-container-label-floating: {
                    font-size: var(--font-size-normal);
                    padding: 0 8px;
                    height: 11px;
                    line-height: 11px;
                };

                --paper-input-suffix: {
                    background: var(--app-input-background-color);
                    padding: 2px 2px 0;
                    box-sizing: border-box;
                    border-radius: 0 4px 0 0;
                    height: 22px;
                };
            }

            input, iron-autogrow-textarea {
                border: none;
                width: calc(100% - 44px);
                outline: 0;
                font-size: var(--font-size-normal);
                height: auto;
                box-sizing: border-box;
                --iron-autogrow-textarea: {
                    padding: 4px 8px;
                    box-sizing: border-box;
                }
            }

        </style>
        <paper-input-container always-float-label="true">
            <label slot="label" class="color-status">[[localize(label,label,language)]]
                <template is="dom-if" if="[[wasModified]]">
                    <span class="modified-before-out">[[localize('mod','modified',language)]] [[lastModified]] <iron-icon class="modified-icon" icon="schedule"></iron-icon></span>
                </template>
                <template is="dom-if" if="[[isModifiedAfter]]">
                    <span class="modified-after-out">[[localize('obs_val','obsolete value',language)]]<iron-icon class="modified-icon" icon="report-problem"></iron-icon></span>
                </template>
            </label>
            <iron-autogrow-textarea class="paper-input-input" slot="input" value="{{value}}" readonly="[[readOnly]]" disabled="[[readOnly]]"></iron-autogrow-textarea>
        </paper-input-container>
        <dynamic-link i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" linkables="[[linkables]]" represented-object="[[key]]" api="[[api]]" read-only="[[readOnly]]"></dynamic-link>
`;
  }

  static get is() {
      return 'dynamic-text-area';
  }

  static get properties() {
      return {
          api: {
              type: Object
          },
          wasModified: {
              type: Boolean
          },
          isModifiedAfter: {
              type: Boolean
          },
          readOnly: {
              type: Boolean,
              value: false,
              observer: '_readOnlyChanged'
          },
          lastModified: {
              type: String
          },
          label: {
              type: String
          },
          value: {
              type: String,
              notify: true,
              observer: '_valueChanged'
          },
          width: {
              type: Number,
              value: 48,
              observer: '_widthChanged'
          },
          disabled: {
              type: Boolean
          }
      };
  }

  constructor() {
      super();
  }

  ready() {
      super.ready();
  }

  _readOnlyChanged() {
  }

  _widthChanged(width) {
      this.updateStyles({'--dynamic-field-width': width, '--dynamic-field-width-percent': '' + width + '%'});
  }

  _valueChanged(value) {
      this.dispatchEvent(new CustomEvent('field-changed', {detail: {context: this.context, value: value}}));
  }
}

customElements.define(DynamicTextArea.is, DynamicTextArea);
