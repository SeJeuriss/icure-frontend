import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class'
import {IronValidatorBehavior} from "@polymer/iron-validator-behavior/iron-validator-behavior";

class HtSsinValidator extends mixinBehaviors([IronValidatorBehavior], PolymerElement) {
    static get is() {
        return 'ht-ssin-validator';
    }

    static get properties() {
        return {
            pattern: {
                type: String,
                value: null
            }
        };
    }

    constructor() {
        super();
    }

    validate(value) {
        return !value || this.isValidSsin(value)
    }

    isValidSsin(ssin) {
        ssin = ssin.replace(new RegExp("[^(0-9)]", "g"), "")
        let isValidNiss = false

        const normalNumber = /^[0-9][0-9](([0][0-9])|([1][0-2]))(([0-2][0-9])|([3][0-1]))(([0-9]{2}[1-9])|([0-9][1-9][0-9])|([1-9][0-9]{2}))(([0-8][0-9])|([9][0-7]))$/.test(ssin)
        const bisNumber = /^[0-9][0-9](([2][0-9])|([3][0-2]))(([0-2][0-9])|([3][0-1]))[0-9]{3}(([0-8][0-9])|([9][0-7]))$/.test(ssin)
        const terNumber = /^[0-9][0-9](([4][0-9])|([5][0-2]))(([0-2][0-9])|([3][0-1]))[0-9]{3}(([0-8][0-9])|([9][0-7]))$/.test(ssin)

        if (normalNumber || bisNumber || terNumber) {
            isValidNiss =
                97 - (Number(ssin.substr(0, 9)) % 97) === Number(ssin.substr(9, 2))
                    ? true
                    : 97 - (Number("2" + ssin.substr(0, 9)) % 97) === Number(ssin.substr(9, 2))
        }

        return isValidNiss
    }
}

customElements.define(HtSsinValidator.is, HtSsinValidator);
