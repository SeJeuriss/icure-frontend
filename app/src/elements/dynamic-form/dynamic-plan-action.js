import './dynamic-link.js';
import '../../styles/tk-token-field-style.js';
import '../ht-pat/dialogs/ht-pat-action-plan-dialog.js';

import {PolymerElement, html} from '@polymer/polymer';
import {TkLocalizerMixin} from "../tk-localizer";
class DynamicPlanAction extends TkLocalizerMixin(PolymerElement) {
    static get template() {
        return html`
		<style include="tk-token-field-style">
		   :host {
                display: block;
                position: relative;
                flex-grow: var(--dynamic-field-width, 100);
                min-width: calc(var(--dynamic-field-width-percent, '100%') - 12px);
                margin: 0 6px;
				--paper-font-caption_-_line-height: var(--font-size-normal);
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

            .tokens {
                margin-right: 6px;
                min-height: 22px;
            }

            .tokens paper-button {
                background: var(--exm-token-input-badge-color, --default-primary-color);
                margin: 2px 0;
                color: var(--exm-token-input-badge-text-color, --text-primary-color);
                height: 18px;
                font-size: 13px;
                min-width: initial;
            }

            .tokens paper-button iron-icon {
                height: 16px;
                width: 16px;
            }

            input {
                font: inherit;
                outline: 0;
                box-shadow: none;
                border: none;
                width: auto;
                max-width: 100%;
                min-width: 1.8em;
                font-size: var(--font-size-normal);
				padding: 0;
            }

            .container {
                @apply(--layout-horizontal);
            }

            iron-selector > * {
                padding: 16px 16px;
            }

            label, .container {
                cursor: text;
            }
		</style>
        
        <tk-token-field label="[[localize(label,label,language)]]" value="{{localizedValue}}" on-value-splices-change="_localizedValueChanged" data-value-path="id" data-label-path="stringValue" data-source="[[dataSource]]" always-float-label="" read-only="[[readOnly]]" disabled="[[readOnly]]">
			<span slot="label-suffix">
				<template is="dom-if" if="[[wasModified]]">
					<span class="modified-before-out">[[localize('mod','modified',language)]] [[lastModified]] <iron-icon class="modified-icon" icon="schedule"></iron-icon></span>
				</template>
				<template is="dom-if" if="[[isModifiedAfter]]">
					<span class="modified-after-out">[[localize('obs_val','obsolete value',language)]]<iron-icon class="modified-icon" icon="report-problem"></iron-icon></span>
				</template>
			</span>
		</tk-token-field>
`;
    }

    static get is() {
        return 'dynamic-plan-action';
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
                value: false
            },
            lastModified: {
                type: String
            },
            label: {
                type: String
            },
            value: {
                type: Array,
                notify: true,
                value: function () {
                    return [];
                }
            },
            width: {
                type: Number,
                value: 48,
                observer: '_widthChanged'
            },
            localizedValue: {
                type: String
            },
            stored: {
                type: Array,
                notify: true,
                value: function () {
                    return [];
                }
            }
        }
    }

    static get observers() {
        return ['_valueChanged(value.*)'];
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    _widthChanged(width){
        this.updateStyles({ '--dynamic-field-width': width, '--dynamic-field-width-percent': '' + width + '%' });
    }

    _localizedValueChanged(change) {//revoir peut etre l'event
        const current = this.value
        const modified = this.localizedValue

        const newValue = modified.filter(m => !this.stored.find(s => s.id===m.id))
        this.stored.push(...newValue)
        newValue.length && this.dispatchEvent(new CustomEvent('plans-action', { detail: {plans : newValue, onValueChanged: this._valueChanged.bind(this)}, bubbles: true, composed: true }))

        //supp
        const oldValue=this.stored.filter(s => !modified.find(m => s.id===m.id))
        if(oldValue.length)
            this.set("value",this.value.filter(v=> !oldValue.find(old => old.id===v.id)))
    }

    _valueChanged(value) {
        let localizedValue = this._localizedValue(this.value);
        this.set("stored",this.value)
        if (!_.isEqual(localizedValue, this.localizedValue)) {
            this.set('localizedValue', localizedValue);
        }
        //n'a pas l'air de rajouter les tags du form a retravailler:/
        this.dispatchEvent(new CustomEvent('field-changed', { detail: { context: this.context, value: this.value } }));
    }

    localizedStringValueWithId(id, e, lng) {
        if (!e) {
            return null;
        }
        let content = this.api.contact().preferredContent({content:e},this.language)
        return content && { id: id, stringValue: '' + content.stringValue };
    }

    _localizedValue(value) {
        return value && _.compact(_.sortBy(value, 'index').map(v => v && v.content && this.localizedStringValueWithId(v.id, v.content, this.language))) || [];
    }
}

customElements.define(DynamicPlanAction.is, DynamicPlanAction);
