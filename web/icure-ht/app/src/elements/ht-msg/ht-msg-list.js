import '@polymer/iron-icon/iron-icon.js'
import '@polymer/paper-button/paper-button.js'
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/paper-item/paper-item.js'
import '@polymer/paper-listbox/paper-listbox.js'
//import '@polymer/paper-progress/paper-progress.js'
import '@polymer/paper-tooltip/paper-tooltip.js'
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '../dynamic-form/ckmeans-grouping.js';

import '../ht-spinner/ht-spinner.js';

import moment from 'moment/src/moment';
import _ from 'lodash/lodash';
import {TkLocalizerMixin} from "../tk-localizer";

import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
class HtMsgList extends TkLocalizerMixin(PolymerElement) {
  static get template() {
    return html`
        <custom-style>
            <style include="shared-styles">
                :host {
                    display: flex;
                    flex-direction: column;
                    z-index: 0;
                }

                :host *:focus {
                    outline: 0 !important;
                }

                .new-msg-btn {
                    --paper-button: {
                        background: var(--app-secondary-color);
                        color: var(--app-text-color);
                        width: 80%;
                        margin: 0 auto;
                        height: 48px;
                        text-transform: capitalize;
                    };
                    --paper-button-ink-color: var(--app-secondary-color-dark);
                }

                .boxes-list {
                    margin: 20px auto;
                    padding: 0;
                    min-width: 80%;
                }

                .col-right {
                    position: relative;
                    box-sizing: border-box;
                    grid-column: 2 / span 1;
                    grid-row: 1 / span 1;
                    background: var(--app-background-color);
                    float: left;
                    padding: 12px 20px;
                    padding-top: 0;
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: flex-start;
                    height: calc(100% - 56px);
                    width: calc(100vw - 38%)
                }

                .card-title-container {
                    padding: 8px 0;
                    height: 34px;
                }

                .card-title {
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    -webkit-font-smoothing: antialiased;
                    font-family: 'Roboto', Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    letter-spacing: .15px;
                    color: var(--app-text-color);
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 16px;
                    -webkit-box-ordinal-group: 0;
                    -webkit-order: 0;
                    order: 0;
                }

                .card-title iron-icon {
                    width: 16px;
                    width: 16px;
                    color: var(--app-text-color-disabled);
                }

                .has-unread {
                    font-weight: bold;
                }

                paper-item {
                    outline: 0;
                    cursor: pointer;
                    --paper-item: {
                        margin: 0;
                    };
                    --paper-item-selected: {
                        background: rgba(0, 0, 0, 0);
                        color: var(--app-secondary-color);
                    };
                    --paper-item-focused: {
                        background: rgba(0, 0, 0, 0);
                        color: var(--app-secondary-color);
                    };
                    --paper-item-focused-before: {
                        background: rgba(0, 0, 0, 0);
                    }
                }

                paper-listbox:focus {
                    outline: 0;
                }

                .sublist {
                    padding-left: 20px;
                    outline: 0;

                }

                .sublist paper-item {
                    --paper-item-min-height: 28px;
                }

                vaadin-grid {
                    height: calc(100% - 16px - 32px - 50px);
                    width: 100%;
                    box-shadow: var(--app-shadow-elevation-1);
                    border: none;
                    box-sizing: border-box;
                }

                vaadin-grid.material {
                    outline: 0 !important;
                    font-family: Roboto, sans-serif;
                    background: rgba(0, 0, 0, 0);
                    border: none;
                    --divider-color: rgba(0, 0, 0, var(--dark-divider-opacity));

                    --vaadin-grid-cell: {
                        padding: 8px;
                    };

                    --vaadin-grid-header-cell: {
                        height: 48px;
                        padding: 11.2px;
                        color: rgba(0, 0, 0, var(--dark-secondary-opacity));
                        font-size: 12px;
                        background: rgba(0, 0, 0, 0);
                        border-top: 0;
                    };

                    --vaadin-grid-body-cell: {
                        height: 48px;
                        color: rgba(0, 0, 0, var(--dark-primary-opacity));
                        font-size: 13px;
                    };

                    --vaadin-grid-body-row-hover-cell: {
                        background-color: var(--paper-grey-200);
                    };

                    --vaadin-grid-body-row-selected-cell: {
                        background-color: var(--paper-grey-100);
                    };

                    --vaadin-grid-focused-cell: {
                        box-shadow: none;
                        font-weight: bold;
                    };

                }

                vaadin-grid.material .cell {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-right: 8px;
                }

                vaadin-grid.material .cell.last {
                    padding-right: 8px;
                }

                vaadin-grid.material .cell.numeric {
                    text-align: right;
                }

                vaadin-grid.material paper-checkbox {
                    --primary-color: var(--paper-indigo-500);
                    margin: 0 24px;
                }

                vaadin-grid.material vaadin-grid-sorter {
                    --vaadin-grid-sorter-arrow: {
                        display: none !important;
                    };
                }

                vaadin-grid.material vaadin-grid-sorter .cell {
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                vaadin-grid.material vaadin-grid-sorter iron-icon {
                    transform: scale(0.8);
                }

                vaadin-grid.material vaadin-grid-sorter:not([direction]) iron-icon {
                    color: rgba(0, 0, 0, var(--dark-disabled-opacity));
                }

                vaadin-grid.material vaadin-grid-sorter[direction] {
                    color: rgba(0, 0, 0, var(--dark-primary-opacity));
                }

                vaadin-grid.material vaadin-grid-sorter[direction=desc] iron-icon {
                    transform: scale(0.8) rotate(180deg);
                }

                vaadin-grid.material::slotted(div) {
                    outline: 0 !important;
                    background: red;
                }

                paper-checkbox {
                    --paper-checkbox-unchecked-color: var(--app-text-color);
                    --paper-checkbox-label-color: var(--app-text-color);
                    --paper-checkbox-checked-color: var(--app-secondary-color);
                    --paper-checkbox-checked-ink-color: var(--app-secondary-color-dark);
                }

                .buttons {
                    padding-bottom: 10px;
                }

                .modal-button--delete {
                    box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
                    background: var(--app-background-color-light);
                    color: var(--app-primary-color-dark);
                    font-weight: 700;
                }

                .modal-button {
                    box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
                    background: var(--app-background-color-light);
                    color: var(--app-primary-color-dark);
                    font-weight: 700;
                }

                .table-top {
                    width: calc(100vw - 38%);
                    min-height: 56px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                }

                .table-top > .checkbox {
                    width: 16px;
                    margin-left: 20px;
                    display: flex;
                    justify-content: space-around;
                    padding-left: 12px;
                    flex-direction: column;
                }

                .table-top > div {
                    display: flex;
                    flex-direction: row;
                    z-index: 1;
                }

                .table-top > div > div {
                    text-align: center;
                }

                .table-top > div.indicators {
                    justify-content: flex-end;
                    padding-right: 24px;
                }

                .table-top > div.indicators > div {
                    display: flex;
                    flex-direction: column;
                    padding: 8px;
                    justify-content: center;
                }

                .table-top > div.indicators > div > * {
                    margin: 0 auto;
                }

                .table-top > div.indicators > div#stamp-indicator.hasNew span {
                    color: var(--app-secondary-color);
                }

                .table-top > div.indicators > div#capacity-indicator > * {
                    display: inline-block;
                }

                .table-top > div.actions {
                    flex-grow: 1;
                    margin: 0 16px;
                }

                .table-top paper-dropdown-menu#filterLabresult {
                    min-width: 256px;
                    margin-left: 22%;
                }

                .table-top > div.actions paper-icon-button {
                    margin: 8px 0;
                }

                .mb4 {
                    margin-bottom: 4px !important;
                }

                .mb4 iron-icon {
                    opacity: 0.7;
                    margin-right: 4px;
                }

                .mb4 span {
                    font-size: 12px;
                    font-weight: 400;
                }

                paper-progress {
                    --paper-progress-active-color: var(--app-secondary-color);
                }

                paper-progress.full {
                    --paper-progress-active-color: var(--app-error-color);
                }

                #actions-spinner {
                    position: absolute;
                    right: 148px;
                    top: 30px;
                    z-index: 1;
                    height: 35px;
                }

                #mail-list {
                    padding-right: 0;
                    margin-right: 0;
                    flex-grow: 1;
                    margin-bottom: 16px;
                    transition: opacity .25s ease;
                }

                #mail-list iron-icon {
                    color: var(--app-text-color);
                    height: 18px;
                    width: 18px;
                    padding: 4px;
                }

                .labicon {
                    content: '';
                    display: inline-block;
                    height: 8px;
                    width: 8px;
                    margin: 0 auto;
                    border-radius: 50%;
                    background: var(--app-status-color-ok);
                    margin-right: 5px;
                }

                .labicon.unassigned-true {
                    background: var(--app-status-color-nok);
                }

                .actions .labicon {
                    margin: 8px;
                }

                .get-msg-btn {
                    margin-bottom: 16px;
                    --paper-button: {
                        background: var(--app-secondary-color);
                        color: var(--app-text-color);
                        width: 100%;
                        margin: 0 auto;
                        font-size: 14px;
                        font-weight: bold;
                        text-transform: capitalize;
                    };
                    --paper-button-ink-color: var(--app-secondary-color-dark);
                }

                ht-spinner.center {
                    z-index: 999999;
                    position: fixed;
                    height: 42px;
                    width: 42px;
                    margin: 6px;
                }

                paper-icon-button.change-page {
                    cursor: pointer;
                    width: 24px;
                    height: 24px;
                    min-width: 0;
                    padding: 2px;
                    color: var(--app-text-color);
                    margin: 0 4px;
                }

                .selector {
                    overflow-x: auto;
                    overflow-y: hidden;
                    white-space: nowrap;
                    max-width: 360px;
                }

                /* paper-button.page-number {
                    margin: 0 4px;
                    background: var(--app-background-color-dark);
                    border: 0;
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    text-align: center;
                    box-sizing: border-box;
                    padding: 0 !important;
                    cursor: pointer;
                    min-width: 0;
                } */
                /* paper-button.page-number[selected] {
                    background: var(--app-secondary-color);
                } */

                div.bottom-commands {
                    display: flex;
                    width: 100%;
                    justify-content: flex-end;
                    align-items: center;
                }

                div.bottom-commands > div.grid-size-indicator {
                    max-width: 208px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: var(--app-text-color);
                    font-size: 13px;
                    font-weight: 400;
                    letter-spacing: 0.3px;
                }

                .scroll-top {
                    background: var(--app-secondary-color);
                    padding: 0 4px;
                    height: 24px;
                    width: 24px;
                    box-sizing: border-box;
                    border-radius: 50%;
                }

                .warn {
                    color: var(--app-status-color-nok);
                }

                @media screen and (max-width: 1696px) {
                    .table-top paper-dropdown-menu#filterLabresult {
                        margin-left: 0;
                    }
                }

                @media screen and (max-width: 1025px) {
                    .col-right {
                        width: 100vw;
                        transition: all .5s ease;
                        box-shadow: none;
                    }

                    ht-spinner.center {
                        left: 50vw;
                    }
                }

                @media screen and (max-width: 1025px) {
                    div.bottom-commands {
                        justify-content: center;
                    }
                }

                @media screen and (max-width: 800px) {
                    .table-top paper-dropdown-menu#filterLabresult {
                        min-width: 0;
                        margin-left: initial;
                    }

                    .mb4 span {
                        display: none;
                    }

                    #capacity-indicator paper-progress {
                        width: 64px;
                    }

                    .table-top paper-dropdown-menu#filterLabresult {
                        min-width: 0;
                        margin-left: initial;
                    }
                }

                @media screen and (max-width: 640px) {
                    .nophone {
                        display: none;
                    }
                }

                .bold {
                    font-weight: 700;
                }

                #loadingContainer, #loadingContainerSmall {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, .3);
                    z-index: 10;
                    text-align: center;
                }

                #loadingContentContainer, #loadingContentContainerSmall {
                    position: relative;
                    width: 400px;
                    min-height: 200px;
                    background-color: #ffffff;
                    padding: 20px;
                    border: 3px solid var(--app-secondary-color);
                    margin: 40px auto 0 auto;
                    text-align: center;
                }

                .sub-container {
                    position: relative;
                }

                .loadingIcon {
                    margin-right: 5px;
                }

                .loadingIcon.done {
                    color: var(--app-secondary-color);
                }

            </style>
        </custom-style>

        <template is="dom-if" if="[[_bodyOverlay]]">
            <div id="loadingContainer"></div>
        </template>
        <template is="dom-if" if="[[_isLoading]]">
            <div id="loadingContainer">
                <div id="loadingContentContainer">
                    <div style="max-width:100px; margin:0 auto">
                        <ht-spinner class="spinner" alt="Loading..." active=""></ht-spinner>
                    </div>
                    <div id="loadingContent"></div>
                </div>
            </div>
        </template>

        <template is="dom-if" if="[[selectList]]">
            <div class="table-top">
                <div class="checkbox">
                    <vaadin-checkbox id="checkerAll" on-tap="_toggleSelectAll" checked\$="[[allSelected]]"></vaadin-checkbox>
                    <paper-tooltip for="checkerAll">[[localize('sel_all','Select all',language)]]</paper-tooltip>
                </div>

                <div class="actions">
                    <template is="dom-if" if="[[!checkedMessages.length]]">
                        <template is="dom-if" if="[[refreshAllowed]]">
                            <paper-icon-button id="refresh-button" icon="icons:refresh" on-tap="_refresh" disabled="[[!refreshAllowed]]"></paper-icon-button>
                            <paper-tooltip for="refresh-button" offset="2">[[localize('refresh','Refresh',language)]]
                            </paper-tooltip>
                        </template>
                        <!--<template is="dom-if" if="[[!refreshAllowed]]">[[localize('refresh_delay','Refresh delay',language)]]: 10min</template>-->
                    </template>
                    <template is="dom-if" if="[[checkedMessages.length]]">
                        <template is="dom-if" if="[[!_isEqual(selectList.selection.item,'trash')]]">
                            <template is="dom-if" if="[[!_isEqual(selectList.selection.item,'hidden')]]">
                                <paper-icon-button id="hide-button" icon="visibility-off" on-tap="_hideMsg"></paper-icon-button>
                                <paper-tooltip for="hide-button" offset="2">[[localize('hide_sel','Hide
                                    selected',language)]]
                                </paper-tooltip>
                            </template>
                        </template>
                        <template is="dom-if" if="[[_isEqual(selectList.selection.item,'hidden')]]">
                            <paper-icon-button id="show-button" icon="undo" on-tap="_restoreMsgs"></paper-icon-button>
                            <paper-tooltip for="show-button" offset="2">[[localize('restore','Restore',language)]]
                            </paper-tooltip>
                        </template>
                        <template is="dom-if" if="[[!_isEqual(selectList.selection.item,'trash')]]">
                            <paper-icon-button id="del-button" icon="delete" on-tap="_msgToBin"></paper-icon-button>
                            <paper-tooltip for="del-button" offset="2">[[localize('del_sel','Delete
                                selected',language)]]
                            </paper-tooltip>
                        </template>
                        <template is="dom-if" if="[[_isEqual(selectList.selection.item,'trash')]]">
                            <paper-icon-button id="restore-button" icon="undo" on-tap="_outOfBin"></paper-icon-button>
                            <paper-tooltip for="restore-button" offset="2">[[localize('restore','Restore',language)]]
                            </paper-tooltip>
                            <paper-icon-button id="del-for-button" icon="delete-forever" on-tap="_deleteMsgsForever"></paper-icon-button>
                            <paper-tooltip for="del-for-button" offset="2">[[localize('del_forever','Delete
                                forever',language)]]
                            </paper-tooltip>
                        </template>
                    </template>
                    <template is="dom-if" if="[[isLabresultBox]]">
                        <paper-dropdown-menu id="filterLabresult" label="[[localize('filter','Filter',language)]]">
                            <paper-listbox selected="{{selectedLabFilter}}" slot="dropdown-content">
                                <paper-item class="link" on-tap="getLabResult">[[localize('show_all','Show
                                    all',language)]]
                                </paper-item>
                                <paper-item class="link" on-tap="getUnassigned">
                                    <div class="labicon unassigned-true" id="show-unassigned"></div>
                                    [[localize('unassigned_labresults','unassigned lab results',language)]]
                                </paper-item>
                                <paper-item class="link" on-tap="getAssigned">
                                    <div class="labicon unassigned-false" id="show-assigned"></div>
                                    [[localize('assigned_labresults','assigned lab results',language)]]
                                </paper-item>
                            </paper-listbox>
                        </paper-dropdown-menu>
                        <!--<paper-tooltip for="show-all" offset="0">[[localize('buff_msgs','buffered msgs',language)]]</paper-tooltip>-->
                        <!--<paper-tooltip for="show-unassigned" offset="0">[[localize('unassigned_labresults','unassigned lab results',language)]]</paper-tooltip>-->
                        <!--<paper-tooltip for="show-assigned" offset="0">[[localize('assigned_labresults','assigned lab results',language)]]</paper-tooltip>-->
                        <!--[[localize('assigned_labresults','assigned lab results',language)]]-->
                    </template>
                </div>

                <div class="indicators">
                    <template is="dom-if" if="[[!_isEqual(bufferedMsgs,0)]]">
                        <div id="stamp-indicator" class="stamp-indicator hasNew">
                            <iron-icon icon="warning"></iron-icon>
                            <span class="label">[[bufferedMsgs]]</span></div>
                        <paper-tooltip for="stamp-indicator" offset="0">[[localize('buff_msgs','buffered
                            msgs',language)]]
                        </paper-tooltip>
                    </template>

                    <div id="capacity-indicator">
                        <div class="mb4">
                            <iron-icon icon="cloud"></iron-icon>
                            <span>
                                <template is="dom-if" if="[[ehealthSession]]">
                                    [[localize('mail_cap','mailbox capacity',language)]] ([[capacityPercent]]%)
                                </template>
                                <template is="dom-if" if="[[!ehealthSession]]">
                                    <span class="warn">[[localize('ehe_is_not_con','eHealth is not connected',language)]]</span>
                                </template>
                            </span>
                        </div>
                        <template is="dom-if" if="[[ehealthSession]]">
                            <paper-progress value\$="[[capacityPercent]]" min="0" max="100" class\$="[[_mailBoxCapacityColor]]"></paper-progress>
                        </template>
                    </div>
                    <template is="dom-if" if="[[ehealthSession]]">
                        <paper-tooltip for="capacity-indicator" offset="0">[[actualCapacity]]%</paper-tooltip>
                    </template>
                </div>

            </div>
            <div class="second-panel col-right">
                <ht-spinner class="center" active="[[isLoadingMailList]]"></ht-spinner>
                <vaadin-grid id="mail-list" class="material" multi-sort="[[multiSort]]" active-item="{{activeItem}}" items="[[messages]]" on-tap="click" on-removed-opened="_deselectMessages" selection-mode="multi" width="100%" pagesize="[[_pageSize]]">
                    <template is="dom-if" if="[[selectList.selection.item]] != 'sentbox'">
                        <vaadin-grid-column flex-grow="0" width="46px">
                            <template>
                                <vaadin-checkbox on-checked-changed="_itemSelected" data-item\$="[[item]]" class="checkbox"></vaadin-checkbox>
                            </template>
                        </vaadin-grid-column>
                        <!--
                        <vaadin-grid-column flex-grow="0" width="44px">
                            <template class="header">
                                <iron-icon id="hasLab-header" icon="icons:assignment"></iron-icon>
                                <paper-tooltip position="right" for="hasLab-header">[[localize('boxtitle.labResult','Lab results',language)]]</paper-tooltip>
                            </template>
                            <template>
                                <template is="dom-if" if="[[hasLabResult(item)]]">
                                    <div id="hasLab-[[item.id]]" class\$="labicon unassigned-[[isUnassigned(item)]]"></div>
                                    <template is="dom-if" if="[[isUnassigned(item)]]"><paper-tooltip position="right" for="hasLab-[[item.id]]">[[localize('un_attachs','Unassigned Lab Results',language)]]</paper-tooltip></template>
                                    <template is="dom-if" if="[[!isUnassigned(item)]]"><paper-tooltip position="right" for="hasLab-[[item.id]]">[[localize('boxtitle.labResult','Lab results',language)]]</paper-tooltip></template>
                                </template>
                            </template>
                        </vaadin-grid-column>
                        -->
                        <vaadin-grid-column flex-grow="0" width="104px">
                            <template class="header">
                                <vaadin-grid-sorter path="received" direction="asc">
                                    [[localize('dat','Date',language)]]
                                </vaadin-grid-sorter>
                            </template>
                            <template>
                                <div class\$="cell frozen [[boldIfIsUnread(item)]]">[[_timeFormat(item.received)]]</div>
                            </template>
                        </vaadin-grid-column>
                        <!--
                        <vaadin-grid-column flex-grow="0" width="48px">
                            <template class="header">
                                <iron-icon icon="mail" id="unread-icon"></iron-icon>
                                <paper-tooltip position="right" for="unread-icon">[[localize('is_read','read',language)]]/[[localize('is_not_read','not read',language)]]</paper-tooltip>
                            </template>
                            <template>
                                <template is="dom-if" if="[[!isUnread(item)]]">
                                    <iron-icon icon="done" id="read-[[item.id]]"></iron-icon>
                                    <paper-tooltip position="right" for="read-[[item.id]]">[[localize('is_read','read',language)]]</paper-tooltip>
                                </template>
                                <template is="dom-if" if="[[isUnread(item)]]">
                                    <iron-icon icon="mail" id="unread-[[item.id]]"></iron-icon>
                                    <paper-tooltip position="right" for="unread-[[item.id]]">[[localize('is_not_read','not read',language)]]</paper-tooltip>
                                </template>
                            </template>
                        </vaadin-grid-column>
                        -->
                        <vaadin-grid-column flex-grow="1">
                            <template class="header">
                                <vaadin-grid-sorter path="fromAddress"><b>[[localize('sen','Sender',language)]]</b>
                                </vaadin-grid-sorter>
                            </template>
                            <template>
                                <div class\$="cell frozen [[boldIfIsUnread(item)]]">
                                    <template is="dom-if" if="[[!isUnread(item)]]">
                                        [[item.fromAddress]]
                                    </template>
                                    <template is="dom-if" if="[[isUnread(item)]]">
                                        <span class="unread-msg" id="unread-[[item.id]]-title">[[item.fromAddress]]</span>
                                        <paper-tooltip position="left" for="unread-[[item.id]]-title">
                                            [[localize('is_not_read','not read',language)]]
                                        </paper-tooltip>
                                    </template>
                                </div>
                            </template>
                        </vaadin-grid-column>
                        <vaadin-grid-column flex-grow="1">
                            <template class="header">
                                <vaadin-grid-sorter path="subject">[[localize('sub','Subject',language)]]
                                </vaadin-grid-sorter>
                            </template>
                            <template>
                                <div class\$="cell frozen [[boldIfIsUnread(item)]]">
                                    [[item.subject]]
                                </div>
                            </template>
                        </vaadin-grid-column>
                        <vaadin-grid-column flex-grow="1">
                            <template class="header">[[localize('pat','Patient',language)]]</template>
                            <template>
                                <template is="dom-repeat" items="[[item.patientInfosBasedOnResultInfo]]" as="patientInfos">
                                    <div class\$="singlePatientInfo [[boldIfIsUnread(item)]]">
                                        <template is="dom-if" if="[[patientInfos.isAssigned]]">
                                            <div id="hasLab-[[patientInfos.uniqueId]]" class="labicon"></div>
                                            <paper-tooltip position="right" for="hasLab-[[patientInfos.uniqueId]]">
                                                [[localize('assigned_labresults','Assigned lab results',language)]]
                                            </paper-tooltip>
                                        </template>
                                        <template is="dom-if" if="[[!patientInfos.isAssigned]]">
                                            <div id="hasLab-[[patientInfos.uniqueId]]" class="labicon unassigned-true"></div>
                                            <paper-tooltip position="right" for="hasLab-[[patientInfos.uniqueId]]">
                                                [[localize('unassigned_labresults','Unassigned lab results',language)]]
                                            </paper-tooltip>
                                        </template>
                                        [[patientInfos.lastName]]
                                        [[patientInfos.firstName]]
                                        [[patientInfos.dateOfBirthHr]]
                                    </div>
                                </template>
                            </template>
                        </vaadin-grid-column>
                        <vaadin-grid-column width="138px" flex-grow="0">
                            <template class="header">
                            </template>
                            <template>
                                <div style="text-align:right;">
                                    <template is="dom-if" if="[[isImportant(item)]]">
                                        <iron-icon id="important-[[item.id]]" icon="warning"></iron-icon>
                                        <paper-tooltip position="left" for="important-[[item.id]]">
                                            [[localize('significant','important',language)]]
                                        </paper-tooltip>
                                    </template>
                                    <template is="dom-if" if="[[isCrypted(item)]]">
                                        <iron-icon id="crypted-[[item.id]]" icon="lock"></iron-icon>
                                        <paper-tooltip position="left" for="crypted-[[item.id]]">
                                            [[localize('encrypted','encrypted',language)]]
                                        </paper-tooltip>
                                    </template>
                                    <template is="dom-if" if="[[hasAnnex(item)]]">
                                        <iron-icon id="hasAnnex-[[item.id]]" icon="editor:attach-file"></iron-icon>
                                        <paper-tooltip position="left" for="hasAnnex-[[item.id]]">
                                            [[localize('has_attach','Has attachments',language)]]
                                        </paper-tooltip>
                                    </template>
                                </div>
                            </template>
                        </vaadin-grid-column>
                    </template>
                </vaadin-grid>
                <div class="bottom-commands">
                    <template is="dom-if" if="[[!isLoadingMailList]]">
                        <div class="grid-size-indicator nophone"> [[pageStart]] – [[pageEnd]]
                            [[localize('sur','sur',language)]] [[gridSize]]
                        </div>
                        <paper-icon-button id="previous-page-change" icon="chevron-left" class="change-page" on-tap="_prevPage"></paper-icon-button>
                        <paper-icon-button id="next-page-change" icon="chevron-right" class="change-page" on-tap="_nextPage"></paper-icon-button>
                        <!-- <div id="page-selector" class="selector">
                            <template is="dom-repeat" items="[[pages]]">
                                <paper-button class="page-number" on-tap="_selectPage" data-item\$="[[item]]" selected\$="[[_isPage(page, item)]]">[[item]]</paper-button>
                            </template>
                        </div> -->

                        <div class="nophone">
                            <paper-icon-button id="scrolltop" class="scroll-top" icon="arrow-upward" on-tap="_scrollToTop"></paper-icon-button>
                        </div>
                        <paper-tooltip for="previous-page-change" position="left" offset="12">
                            [[localize('page_prev','Previous page',language)]]
                        </paper-tooltip>
                        <paper-tooltip for="next-page-change" position="right" offset="-5">[[localize('page_next','Next
                            page',language)]]
                        </paper-tooltip>
                        <paper-tooltip for="scrolltop" position="left">[[localize('scrolltop_list','Scroll to top of the
                            list',language)]]
                        </paper-tooltip>
                    </template>
                </div>
            </div>
        </template>
`;
  }

  static get is() {
      return 'ht-msg-list';
  }

  static get properties() {
      return {
          api: {
              type: Object
          },
          user: {
              type: Object
          },
          selectedMessages: {
              type: Object,
              notify: true
          },
          activeItem: {
              type: Object,
              observer: '_activeItemChanged'
          },
          messages: {
              type: Array,
              value: function () {
                  return [];
              }
          },
          selectList: {
              type: Object
          },
          i18n: {
              Type: Object,
              value: function () {
                  moment.locale('fr');
                  const res = {
                      monthNames: moment.months(),
                      weekdays: moment.weekdays(),
                      weekdaysShort: moment.weekdaysShort(),
                      firstDayOfWeek: moment.localeData().firstDayOfWeek(),
                      week: 'Semaine',
                      calendar: 'Calendrier',
                      clear: 'Clear',
                      today: 'Aujourd\'hui',
                      cancel: 'Annuler',
                      formatDate: function (d) {
                          //return moment(d).format(moment.localeData().longDateFormat('L'))
                          return moment(d).format('DD/MM/YYYY');
                      },
                      parseDate: function (s) {
                          return moment(s, 'DD/MM/YYYY').toDate();
                      },
                      formatTitle: function (monthName, fullYear) {
                          return monthName + ' ' + fullYear;
                      }
                  };
                  return res;
              }
          },
          listTitle: {
              type: String
          },
          isLoadingMailList: {
              type: Boolean,
              value: false
          },
          checkedMessages: {
              type: Array,
              value: []
          },
          page: {
              type: Number,
              value: 1
          },
          pages: {
              type: Array,
              value: []
          },
          bufferedMsgs: {
              type: Number,
              value: 0
          },
          mailboxCapacity: {
              type: Number,
              value: 0
          },
          mailboxMaxCapacity: {
              type: Number,
              value: 0
          },
          capacityPercent: {
              type: Number,
              value: 0
          },
          isLabresultBox: {
              type: Boolean,
              value: false
          },
          allSelected: {
              type: Boolean,
              value: null
          },
          selectedLabFilter: {
              type: Number,
              value: 0
          },
          actualCapacity: {
              type: Number,
              value: 0
          },
          refreshAllowed: {
              type: Boolean
          },
          gridSize: {
              type: Number,
              value: 0
          },
          ehealthSession: {
              type: Boolean,
              value: false
          },
          unreadCount: {
              type: Number,
              value: 0
          },
          pageStart: {
              type: Number,
              value: 0
          },
          pageEnd: {
              type: Number,
              value: 50
          },
          _bodyOverlay: {
              type: Boolean,
              value: false
          },
          _loadingMessages: {
              type: Array,
              value: () => []
          },
          _isLoading: {
              type: Boolean,
              value: false,
              observer: '_loadingStatusChanged'
          },
          _messagesBeingChanged: {
              type: Boolean,
              value: false
          },
          _pageSize: {
              type: Number,
              value: 50
          }
      };
  }

  constructor() {
      super();
  }

  static get observers() {
      return [
          '_refresh(selectList,selectList.*)',
          '_messagesChanged(messages, page)',
          '_getBoxCapacity(messages)',
          '_isConnectedToEhbox(api.tokenId)',
          '_getBoxCapacity(messages,page)',
          '_deselectAll(messages,page)',
          '_isRefreshAllowed(messages,page)',
          '_pageChanged(page)',
      ];
  }

  ready() {
      super.ready();
      this._isRefreshAllowed()
  }

  _loadingStatusChanged() {
      if (!this._isLoading) this._resetLoadingMessage();
  }

  _resetLoadingMessage() {
      this._loadingMessages = [];
  }

  _setLoadingMessage(messageData) {

      setTimeout(() => {
          if (messageData.updateLastMessage) this._loadingMessages.pop();
          this._loadingMessages.push(messageData);
          let loadingContentTarget = this.shadowRoot.querySelectorAll('#loadingContent')[0];
          if (loadingContentTarget) {
              loadingContentTarget.innerHTML = '';
              _.each(this._loadingMessages, (v) => {
                  loadingContentTarget.innerHTML += "<p><iron-icon icon='" + v.icon + "' class='" + (v.done ? "loadingIcon done" : "loadingIcon") + "'></iron-icon>" + v.message + "</p>";
              });
          }
      }, 100)
  }

  _isConnectedToEhbox() {
      this.set("ehealthSession", this.api.tokenId ? true : false)
  }

  _getBoxCapacity() {
      if (this.api.keystoreId && this.api.tokenId && this.api.credentials.ehpassword) {
          this.api.fhc().Ehboxcontroller().getInfosUsingGET(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword)
              .then(boxInfo => {
                  this.set('bufferedMsgs', boxInfo.nbrMessagesInStandBy)
                  this.set('mailboxCapacity', boxInfo.currentSize)
                  this.set('mailboxMaxCapacity', boxInfo.maxSize)
                  this.set('actualCapacity', ((this.mailboxCapacity / this.mailboxMaxCapacity) * 100).toFixed(2))
                  if (this.actualCapacity >= 100) this.set('_mailBoxCapacityColor', 'full')
                  this.set('capacityPercent', this.actualCapacity <= 100 ? this.actualCapacity : '+100')
              })
      }
  }

  _isPage(page, item) {
      return page === item
  }

  _selectPage(e) {
      this.set('page', parseInt(e.target.dataset.item))
  }

  _prevPage() {
      if (this.page > 1) this.set('page', this.page - 1)
  }

  _nextPage() {
      if (this.page < this.pages.length) this.set('page', this.page + 1)
  }

  _scrollToTop() {
      const grid = this.shadowRoot.getElementById('mail-list')
      if (grid) {
          // grid.style.opacity = 0
          setTimeout(() => grid._scrollToIndex(0), 250) // timeOut for css transition
          // setTimeout(()=>grid.style.opacity = 1,500)
      }
  }

  _isRefreshAllowed() {
      const lastLoad = localStorage.getItem('lastEhboxRefresh') ? parseInt(localStorage.getItem('lastEhboxRefresh')) : -1
      const allowed = (lastLoad + (10 * 60000) <= Date.now() || lastLoad == -1) ? true : false
      this.set('refreshAllowed', allowed)
  }

  _newMsg() {
      this.dispatchEvent(new CustomEvent('selection-messages-change', {detail: {selection: {item: null}}}));
      this.findMessagesByTransportGUID('SENTBOX:*').then(messages => this.set('messages', messages || []));
  }

  getInbox() {
      return this.api.message().findMessagesByToAddress('INBOX', null, null, 1000)
          .then(messages => this.sortByDatesAndGUID(messages.rows)
              .filter(msg => {
                  return (
                      msg.fromAddress !== 'EFACT' &&
                      !msg.transportGuid.startsWith('BIN') &&
                      !msg.transportGuid.startsWith('GMD') &&
                      !msg.transportGuid.startsWith('PROSE:') &&
                      !msg.transportGuid.startsWith('HIDDEN:') &&
                      !((msg.status & 1 << 14) !== 0)
                  )
              }))
          .then(messages => _.orderBy(messages, ['received'], ['desc']))
  }

  _debug(inputValue) {
      console.log("_debug", inputValue);
  }

  _enrichMessageWithPatientInfo(messages) {

      this._setLoadingMessage({
          message: this.localize('ehb.gettingPatientsInfo', this.language),
          icon: "arrow-forward"
      });

      const startPostion = (parseInt(this.page) - 1) * parseInt(this._pageSize)
      const endPosition = parseInt(this.page) * parseInt(this._pageSize)

      // Resolve additional pat infos, observing pagination size (slice passes along as reference)
      let messagesToResolve = messages.slice(startPostion, endPosition).filter(singleMessge => !_.get(singleMessge, "patientInfosBasedOnResultInfo", false));

      let prom = Promise.resolve([]);
      const totalMessages = _.size(messagesToResolve) || 1;
      messagesToResolve.map((singleMessage, loopIndex) => {
          prom = prom.then(resolvedMessages => {
              return this.api.document().findByMessage(_.get(this, "user.healthcarePartyId", null), singleMessage)
                  .then(docs => docs.filter(doc => !!_.get(doc, "id", false) && !!_.get(doc, "attachmentId", false) && !!_.get(doc, "secretForeignKeys", false)))
                  .then(docs => Promise.all(docs.map(singleDocument => {
                      return this.api.crypto()
                          .extractKeysFromDelegationsForHcpHierarchy(_.get(this, "user.healthcarePartyId", null), singleDocument.id, _.size(singleDocument.encryptionKeys) ? singleDocument.encryptionKeys : singleDocument.delegations)
                          .then(({extractedKeys: enckeys}) =>
                              this.api.beresultimport().canHandle(singleDocument.id, enckeys.join(','))
                                  .then(isResult => (isResult ? this.api.beresultimport().getInfos(singleDocument.id, true, null, enckeys.join(',')) : false))
                                  .catch(e => { /* console.log("Couldn't exec beresultimport().canHandle, error: ", e); console.log("singleDocument ", singleDocument); */
                                  })
                          )
                          .then(resultInfos => _.compact(_.map(resultInfos, ri => {
                              return {
                                  lastName: _.upperFirst(_.trim(_.get(ri, "lastName", "NA")).toLowerCase()),
                                  firstName: _.upperFirst(_.trim(_.get(ri, "firstName", "NA")).toLowerCase()),
                                  dateOfBirthHr: (_.parseInt(_.get(ri, "dateOfBirth", 0)) ? "(" + moment(_.trim(_.get(ri, "dateOfBirth", ""))).format("DD/MM/YYYY") + ")" : ""),
                                  // isAssigned: !!(parseInt(singleMessage.modified)%2),
                                  isAssigned: !!_.size(_.get(singleMessage, "assignedResults", [])),
                                  uniqueId: _.uniqueId(_.trim(_.get(singleMessage, "id", _.uniqueId())))
                              }
                          })))
                          .catch(e => {
                          })
                  })))
                  .then(resultInfos => {
                      this._setLoadingMessage({
                          message: this.localize('ehb.gettingPatientsInfo', this.language) + " " + (parseInt(loopIndex) + 1) + "/" + totalMessages,
                          icon: "arrow-forward",
                          updateLastMessage: true
                      });
                      return _.concat(resolvedMessages, [_.merge(singleMessage, {patientInfosBasedOnResultInfo: (_.compact(_.flatMap(resultInfos)) || [])})])
                  })
                  .catch(e => {
                  })
          })
      })
      return prom.then(() => messages)
  }

  getEheIn() {
      this.findMessagesByTransportGUID('INBOX:*').then(messages => {
          let msgs = messages.filter(msg => !msg.transportGuid.startsWith('BIN'));
          this.set('messages', msgs || [])
      });
  }

  isUnread(m) {
      return !!((m.status & (1 << 1)) !== 0)
  }

  boldIfIsUnread(m) {
      return this.isUnread(m) ? "bold" : "";
  }

  isImportant(m) {
      return !!((m.status & (1 << 2)) !== 0)
  }

  isCrypted(m) {
      return !!((m.status & (1 << 3)) !== 0)
  }

  hasAnnex(m) {
      return !!((m.status & (1 << 4)) !== 0)
  }

  hasLabResult(m) {
      return !!(parseInt(_.size(_.get(m, "assignedResults", {}))) || parseInt(_.size(_.get(m, "unassignedResults", {}))))
  }

  isUnassigned(m) {
      return !!parseInt(_.size(_.get(m, "unassignedResults", {})))
  }

  getUnreadEmail() {
      this.api.message().findMessagesByToAddress('INBOX', null, null, 1000).then(messages => {
          const msg = messages.rows.reduce((acc, m) => {
              if (this.isUnread(m)) {//status unread
                  acc.push(m)
              }
              return acc
          }, [])
          return this.sortByDates(msg).filter(msg => !msg.transportGuid.startsWith('BIN'));
      }).then(messages => this.set('messages', messages || []));
  }

  getSentMessages() {
      return this.api.message().findMessagesByToAddress('SENTBOX', null, null, 1000)
          .then(messages => this.sortByDates(messages.rows)
              .filter(msg => !msg.transportGuid.startsWith('BIN') && !((msg.status & 1 << 14) !== 0))
          )
  }

  getSubmitMessages() {
      this.api.message().findMessagesByToAddress('INBOX', null, null, 1000).then(messages => {
          const msg = messages.rows.reduce((acc, m) => {
              if (!(m.status & 1 << 8 == 0)) {//status STATUS_SUBMITTED
                  acc.push(m)
              }
              return acc
          }, [])
          return this.sortByDates(msg).filter(msg => !msg.transportGuid.startsWith('BIN'));
      }).then(messages => this.set('messages', messages || []));
  }

  getLabResult() {
      return this.api.message().findMessagesByToAddress('INBOX', null, null, 1000)
          .then(messages => {
              const messagesWithLabResults = messages.rows.reduce((accumulator, singleMessage) => {
                  if (_.size(_.get(singleMessage, "assignedResults", [])) || _.size(_.get(singleMessage, "unassignedResults", []))) accumulator.push(singleMessage);
                  return accumulator;
              }, [])
              return this.sortByDates(messagesWithLabResults).filter(singleMessage => !singleMessage.transportGuid.startsWith('BIN') && (singleMessage.status & (1 << 14)) !== 1);
          })
  }

  _getPatsFromMsg(m) {
      this.api.document().findByMessage(this.user.healthcarePartyId, m).then(docs => {
          if (docs.length) {
              let unimportedPats = ''
              return docs.filter(doc => doc.id && doc.attachmentId && doc.secretForeignKeys).map(doc => {
                  this.api.beresultimport().getInfos(doc.id).then(resultInfo => {
                      if (resultInfo.length) {
                          resultInfo.map(res => {
                              unimportedPats += res.firstName + ' ' + res.lastName + ', '
                          })
                          return unimportedPats + (resultInfo.length > 1) ? '...' : ''
                      } else {
                          return ''
                      }
                  })
              })
          }
      })
  }

  getReport() {
      // this.findMessagesByTransportGUID('REPORT:OUT:*').then(messages => {
      //     let msgs = messages.filter(msg => !msg.transportGuid.startsWith('BIN'));
      //     this.set('messages', msgs || [])
      // });
      // console.log('sent labresult')
      this.api.message().findMessagesByToAddress('SENTBOX', null, null, 1000).then(messages => {
          const msg = messages.rows.reduce((acc, m) => {
              console.log(m, 'sentlabres', m.status, (m.status & (1 << 0)))
              if (m.status & (1 << 0)) {//status labResult
                  acc.push(m)
              }
              return acc
          }, [])
          return this.sortByDates(msg).filter(msg => !msg.transportGuid.startsWith('BIN'));
      }).then(messages => this.set('messages', messages || []));
  }

  getEInv() {
      // console.log(this.messages)
      this.api.message().findMessagesByTransportGuid('EFACT:OUT:*', null, null, 1000).then(messages => {
          // console.log(messages.rows)
          return this.sortByDates(messages.rows).filter(msg => !msg.transportGuid.startsWith('BIN'));
      }).then(messages => this.set('messages', messages || []));
  }

  getReportIn() {
      this.findMessagesByTransportGUID('REPORT:IN:*').then(messages => {
          let msgs = messages.filter(msg => !msg.transportGuid.startsWith('BIN'));
          this.set('messages', msgs || [])
      });
  }

  getMycarenetIn() {
      this.findMessagesByTransportGUID('GMD:IN:*').then(messages => this.set('messages', messages || []));
  }

  getEInvIn() {
      this.findMessagesByTransportGUID('EFACT:IN:*').then(messages => this.set('messages', messages || []));
  }

  getChap4In() {
      this.findMessagesByTransportGUID('CHAP4IN:*').then(messages => this.set('messages', messages || []));
  }

  getAssigned() { // assigned labresult
      // console.log('Assigned')
      this.api.message().findMessagesByToAddress('INBOX', null, null, 1000).then(messages => {
          const msg = messages.rows.reduce((acc, m) => {
              if (m.assignedResults && m.unassignedResults && (Object.keys(m.assignedResults).length >= 1 && m.unassignedResults.length == 0)) acc.push(m)
              return acc
          }, [])
          return this.sortByDates(msg).filter(m => (m.status & (1 << 14)) !== 1);
      }).then(messages => {
          this.set('messages', messages || [])
      });
  }

  getUnassigned() { // unassigned labresult
      // console.log('Unassigned')
      this.api.message().findMessagesByToAddress('INBOX', null, null, 1000).then(messages => {
          const msg = messages.rows.reduce((acc, m) => {
              if (m.unassignedResults && m.unassignedResults.length >= 1) acc.push(m)
              return acc
          }, [])
          return this.sortByDates(msg).filter(msg => !msg.transportGuid.startsWith('BIN')).filter(m => (m.status & (1 << 14)) !== 1);
      }).then(messages => {
          this.set('messages', messages || [])
      });
  }

  getEheOut() {
      this.findMessagesByTransportGUID('SENTBOX:*').then(messages => this.set('messages', messages || []));
  }

  getChap4Out() {
      this.findMessagesByTransportGUID('CHAP4OUT:*').then(messages => this.set('messages', messages || []));
  }

  getProtOut() {
      this.findMessagesByTransportGUID('BINSENTBOX:*').then(messages => this.set('messages', messages || []));
  }

  getEFactBatch() {
      this.findMessagesByTransportGUID('EFACT:BATCH:*').then(messages => this.set('messages', messages || []));
  }

  getGMD() {
      this.findMessagesByTransportGUID('GMD:IN:*').then(messages => this.set('messages', messages || []));
  }

  getEhealthMessages() {
      // return this.findMessagesByTransportGUID('SENTBOX:*', null, null, 1000)
      //     .then(messages => this.set('messages', messages || []));

      this.api.message().findMessagesByTransportGUIDs('SENTBOX:*', null, null, 1000).then(messages => {
          const msg = messages.rows.reduce((acc, m) => {
              if (!(m.status && 1 << 8 == 0)) {//status STATUS_SUBMITTED
                  acc.push(m)
              }
              return acc
          }, [])
          return this.sortByDates(msg).filter(m => (m.status & (1 << 14)) !== 1);
      }).then(messages => this.set('messages', messages || []));

  }

  getHidden() {
      return this.findMessagesByTransportGUIDs(['INBOX:*', 'SENTBOX:*', 'HIDDEN'], null, null, 1000)
          .then(messages => this.sortByDatesAndGUID(messages).filter(m => (((m.status & (1 << 14)) !== 0) || m.transportGuid.startsWith('HIDDEN'))))
  }

  getTrash() {
      return this.findMessagesByTransportGUIDs(['BININBOX:*', 'BINSENTBOX:*'], null, null, 1000)
          .then(messages => this.sortByDatesAndGUID(messages));
  }

  findMessagesByTransportGUID(guid) {
      return this.api.message().findMessagesByTransportGuid(guid, null, null, 1000).then(messages => {
          // console.log('findMessagesByTransportGUID',messages)
          return this.sortByDatesAndGUID(messages.rows);
      })
  }

  findMessagesByTransportGUIDs(guids) {
      let p = []
      guids.forEach(guid => {
          p.push(this.findMessagesByTransportGUID(guid))
      });
      return Promise.all(p).then(items => {
          let results = [];
          items.forEach(item => results = results.concat(item));
          return results;
      });
  }

  _messagesChanged(messages, page) {
      const grid = this.shadowRoot.getElementById('mail-list')
      if (grid && messages && page && !this._messagesBeingChanged) {
          this._messagesBeingChanged = true;
          this.set('gridSize', messages.length)
          if (this.selectList.selection.item !== 'sentbox') {
              this.set('unreadCount', messages.filter(m => this.isUnread(m)).length)
          }
          this.set('pages', [])
          const numberOfPages = Math.ceil(messages.length / parseInt(this._pageSize))
          for (let i = 0; i < numberOfPages; i++) this.push('pages', i + 1)
          if (!this.pages.length) this.push('pages', 1)
          let start = (page - 1) * parseInt(this._pageSize);
          let end = page * parseInt(this._pageSize);
          this.set('pageStart', start || 0)
          this.set('pageEnd', end || parseInt(this._pageSize))
          grid.items = this.messages.slice(start, end)
          this._scrollToTop()
          this._messagesBeingChanged = false;
      }
  }

  _refresh() {

      if (this.selectList && this.selectList.selection) {

          this._resetLoadingMessage();
          this.set('_isLoading', true);
          this._setLoadingMessage({
              message: this.localize('ehb.gettingMessages', this.language),
              icon: "arrow-forward"
          });

          const actionToCall = this.selectList.selection.item
          this.set('isLabresultBox', (actionToCall === "labResult") ? true : false)
          if (!['newMsg', 'Refresh'].includes(actionToCall)) this.setListTitle(actionToCall);

          this._getMessages(actionToCall)
              .then(foundMessages => {
                  this._setLoadingMessage({
                      message: this.localize('ehb.gettingMessages_done', this.language),
                      icon: "check-circle",
                      updateLastMessage: true,
                      done: true
                  });
                  return this._enrichMessageWithPatientInfo(foundMessages)
                      .then(enrichedData => foundMessages = enrichedData)
                      .catch(e => {
                          console.log("Couldn't _enrichMessageWithPatientInfo: ", e);
                      })
                      .finally(() => {
                          this.set("messages", foundMessages)
                          this.set('_isLoading', false);
                      })
              })
              .catch(e => {
                  console.log(e);
              })
              .finally(() => {
                  this.dispatchEvent(new CustomEvent('selection-messages-change', {detail: {selection: {item: null}}}));
                  this.updateGridElementsSize()
              })

      } else {
          this.dispatchEvent(new CustomEvent('selection-messages-change', {detail: {selection: {item: null}}}));
          this.updateGridElementsSize()
      }

  }

  _pageChanged() {

      if (this._messagesBeingChanged || !_.size(this.messages)) return;

      this._resetLoadingMessage();
      this.set('_isLoading', true);
      this.set('_messagesBeingChanged', true);

      return this._enrichMessageWithPatientInfo(this.messages)
          .then(enrichedData => this.messages = enrichedData)
          .catch(e => {
              console.log("Couldn't _enrichMessageWithPatientInfo: ", e);
          })
          .finally(() => {
              const grid = this.shadowRoot.getElementById('mail-list')
              grid && grid.clearCache()
              this.set('_isLoading', false);
              this.set('_messagesBeingChanged', false);
          })

  }

  _getMessages(actionToCall) {

      if (!_.trim(actionToCall)) return Promise.resolve(null);

      this.set('page', 1);
      let foundMessages = [];

      return !_.trim(actionToCall) ?
          foundMessages :
          (
              _.trim(actionToCall) === "sentbox" ? this.getSentMessages() :
                  _.trim(actionToCall) === "labResult" ? this.getLabResult() :
                      _.trim(actionToCall) === "trash" ? this.getTrash() :
                          _.trim(actionToCall) === "hidden" ? this.getHidden() :
                              this.getInbox()
          )
              .then(data => foundMessages = _.compact(data || []))
              .catch(e => {
                  console.log(e);
              })
              .finally(() => foundMessages)

      /*
      const allowedCalls = {
          inbox:              this.getInbox,
          sentbox:            this.getSentMessages,
          labResult:          this.getLabResult,
          trash:              this.getTrash,
          hidden:             this.getHidden,
          Refresh:            null // force refresh
          newMsg:             this._newMsg,
          unread:             this.getUnreadEmail,
          submit:             this.getSubmitMessages,
          reportOut:          this.getReport,
          e_invOut:           this.getEInv,
          ehealthMessages:    this.getEhealthMessages,
          e_invIn:            this.getEInvIn,
          reportIn:           this.getReportIn,
          eheIn:              this.getEheIn,
          mycarenet:          this.getMycarenetIn,
          Chap4In:            this.getChap4In,
          protIn:             this.getAssigned,
          unsettedProtIn:     this.getUnassigned,
          eheOut:             this.getEheOut,
          protOut:            this.getProtOut,
          EFactBatch:         this.getEFactBatch,
          GMD:                this.getGMD
      }
      */

  }

  sortByDates(messages) {
      return messages.sort(function (a, b) {
          return b.received - a.received;
      });
  }

  sortByDatesAndGUID(messages) {
      return messages.sort(function (a, b) {
          if (b.received === a.received) {
              let bGuid = (b.transportGuid + '').split(":")[1] || "";
              let aGuid = (a.transportGuid + '').split(":")[1] || "";
              return bGuid > aGuid ? 1 : -1;
          } else {
              return b.received - a.received;
          }
      });
  }

  getToAddresses(item) {
      return item.toAddresses.reduce((acc, i) => {
          return acc + ", " + i
      }, "")
  }

  click(e) {
      this.set('selectedMessages', this.activeItem);
      this.dispatchEvent(new CustomEvent('selection-messages-change', {detail: {selection: {item: this.selectedMessages}}}));
      // this._deselectAll();
  }

  _deselectMessages() {
      this.set('activeItem', null)
      this.click()
  }

  _itemSelected(e) {
      if (e.path[0].checked) {
          const checkedMsg = JSON.parse(e.target.dataset.item)
          if (!this.allSelected) this.push('checkedMessages', checkedMsg)
      } else {
          this.splice('checkedMessages', this.checkedMessages.indexOf(e.target.dataset.item))
          this.set('allSelected', false)
      }
      // console.log(this.checkedMessages)
  }

  _toggleSelectAll() {
      let mailList = this.shadowRoot.querySelector('#mail-list');
      this.set('allSelected', this.allSelected != null ? !this.allSelected : true)
      this.set('checkedMessages', this.allSelected ? mailList.items : [])
      let allCheckboxes = mailList ? mailList.querySelectorAll('.checkbox') : []
      const selectedState = this.allSelected
      allCheckboxes.forEach(box => {
          box.checked = selectedState;
      })
  }

  _deselectAll() {
      this.set('allSelected', null)
      let mailList = this.shadowRoot.querySelector('#mail-list');
      let allCheckboxes = mailList ? mailList.querySelectorAll('.checkbox') : []
      allCheckboxes.forEach(box => {
          box.checked = false;
      })
      this.set('checkedMessages', [])
  }

  _restoreMsgs() {
      const checkedMsgs = this.checkedMessages
      if (checkedMsgs.length) {
          checkedMsgs.forEach(msg => {
              msg.status = msg.status & 0 << 14
              this.api.message().modifyMessage(msg).then((m) => {
                  _.assign(msg, m)
                  this.dispatchEvent(new CustomEvent('item-delete', {detail: {selection: {item: "Refresh"}}}))
                  this._refresh()
              })
          }) // foreach end
      }
  }

  _hideMsg() {
      let checkedMsgs = this.checkedMessages
      if (checkedMsgs.length) {
          checkedMsgs.forEach(msg => {
              msg.status = msg.status | (1 << 14)
              this.api.message().modifyMessage(msg).then((m) => {
                  _.assign(msg, m)
                  this.dispatchEvent(new CustomEvent('item-delete', {detail: {selection: {item: "Refresh"}}}))
                  this._refresh()
              })
          }) // foreach end
          this.set('selectedLabFilter', 0)
      }
  }

  _msgToBin() {
      let checkedMsgs = this.checkedMessages
      if (checkedMsgs.length) {
          checkedMsgs.forEach(msg => {
              const id = msg.transportGuid.substring(msg.transportGuid.indexOf(':') + 1)
              if (msg.transportGuid.includes('INBOX')) {
                  this.api.fhc().Ehboxcontroller().moveMessagesUsingPOST(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword, id, 'INBOX', 'BININBOX').then(res => {
                      if (res) {
                          msg.transportGuid = 'BININBOX:' + id
                          this.api.message().modifyMessage(msg).then((m) => {
                              _.assign(msg, m)
                              this.dispatchEvent(new CustomEvent('item-delete', {detail: {selection: {item: "Refresh"}}}))
                              this._refresh()
                          })
                      }
                  })
              }
              if (msg.transportGuid.includes('SENTBOX')) {
                  this.api.fhc().Ehboxcontroller().moveMessagesUsingPOST(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword, id, 'SENTBOX', 'BINSENTBOX').then(res => {
                      if (res) {
                          msg.transportGuid = 'BINSENTBOX:' + id
                          this.api.message().modifyMessage(msg).then((m) => {
                              _.assign(msg, m)
                              this.dispatchEvent(new CustomEvent('item-delete', {detail: {selection: {item: "Refresh"}}}))
                              this._refresh()
                          })
                      }
                  })
              }
          }) // foreach end
          this.set('selectedLabFilter', 0)
      }
  }

  _outOfBin() {
      let checkedMsgs = this.checkedMessages
      if (checkedMsgs.length) {
          checkedMsgs.forEach(msg => {
              const id = msg.transportGuid.substring(msg.transportGuid.indexOf(':') + 1)
              if (msg.transportGuid.includes('INBOX')) {
                  msg.transportGuid = 'INBOX:' + id
                  this.api.message().modifyMessage(msg).then((m) => {
                      _.assign(msg, m)
                      this.dispatchEvent(new CustomEvent('item-delete', {detail: {selection: {item: "Refresh"}}}))
                      this._refresh()
                  })
              }
              if (msg.transportGuid.includes('SENTBOX')) {
                  msg.transportGuid = 'SENTBOX:' + id
                  this.api.message().modifyMessage(msg).then((m) => {
                      _.assign(msg, m)
                      this.dispatchEvent(new CustomEvent('item-delete', {detail: {selection: {item: "Refresh"}}}))
                      this._refresh()
                  })
              }
          }) // foreach end
      }
  }

  _deleteMsgsForever() {
      const checkedMsgs = this.checkedMessages
      if (checkedMsgs.length) {
          let inboxIds = []
          let sentboxIds = []

          checkedMsgs.forEach(msg => {
              const id = msg.transportGuid.substring(msg.transportGuid.indexOf(':') + 1)
              if (msg.transportGuid.includes('INBOX')) inboxIds.push(id)
              if (msg.transportGuid.includes('SENTBOX')) sentboxIds.push(id)
          })

          if (inboxIds.length) {
              // this.api.fhc().Ehboxcontroller().moveMessagesUsingPOST(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword, [inboxIds], 'INBOX', 'BININBOX').then(()=>{
              this.api.fhc().Ehboxcontroller().deleteMessagesUsingPOST(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword, [inboxIds], 'BININBOX')
                  .then(() => this.dispatchEvent(new CustomEvent('item-delete', {detail: {selection: {item: "Refresh"}}})))
                  .then(() => this._refresh())
              // })
          }
          if (sentboxIds.length) {
              // this.api.fhc().Ehboxcontroller().moveMessagesUsingPOST(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword, [sentboxIds], 'SENTBOX', 'BINSENTBOX').then(()=>{
              this.api.fhc().Ehboxcontroller().deleteMessagesUsingPOST(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword, [sentboxIds], 'BINSENTBOX')
                  .then(() => this.dispatchEvent(new CustomEvent('item-delete', {detail: {selection: {item: "Refresh"}}})))
                  .then(() => this._refresh())
              // })
          }
      }
  }

  _isEqual(a, b) {
      return (a === b)
  }

  _timeFormat(date) {
      return date && this.api.moment(date).format('DD/MM/YYYY') || '';
  }

  _activeItemChanged(item) {
      let mailList = this.shadowRoot.querySelector('#mail-list');
      if (mailList) mailList.selectedItems = item ? [item] : [];
  }

  setListTitle(title) {
      this.set("listTitle", this.localize("boxtitle." + title, 'List', this.language))
  }

  _displayRestoreButton() {
      return (this.selectList.selection.item == 'trash')
  }

  updateGridElementsSize() {
      const grid = this.shadowRoot.getElementById('mail-list')
      grid && grid.notifyResize()
  }
}

customElements.define(HtMsgList.is, HtMsgList);
