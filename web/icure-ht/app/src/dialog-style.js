const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="dialog-style">
    <template>
        <style is="custom-style">
            .modal-title {
                background: var(--app-background-color-dark);
                margin-top: 0;
                height: 45px;
                padding: 0 12px;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-items: center;
            }

            .modal-button {
                --paper-button-ink-color: var(--app-secondary-color-dark);
                color: var(--app-text-color);
                font-weight: 400;
                font-size: var(--font-size-normal);
                height: 28px;
                min-width: 100px;
                padding: 0 12px;
                text-transform: capitalize;
                background: var(--app-background-color-dark);
                margin: 0 4px;
            }

            .buttons {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: auto;
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-end;
                align-items: center;
                padding: 8px 12px;
                box-sizing: border-box;
                border-top: 1px solid var(--app-background-color-dark);
            }

            .modal-button--save {
                box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
                background: var(--app-secondary-color);
                color: var(--app-primary-color-dark);
                font-weight: 700;
            }

            .modal-button--save:disabled {
                background: var(--app-secondary-color-dark);
                box-shadow: none;
            }

            .content {
                max-height: calc(100% - 45px - 45px);
                overflow-y: auto;
                margin-top: 0;
                box-sizing: border-box;
                height: 100%;
            }
        </style>
    </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
