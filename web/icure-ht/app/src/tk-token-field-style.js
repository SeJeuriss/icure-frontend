const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="tk-token-field-style">
    <template>
        <style is="custom-style">
            tk-token-field {
                --paper-input-container: {
                    padding: 0;
                    height: auto;
                    min-height: 22px;
                };
                --paper-input-container-input: {
                    height: auto;
                    min-height: 22px;
                    font-size: var(--font-size-normal);
                    line-height: var(--font-size-normal);
                    padding: 0 8px;
                    box-sizing: border-box;
                    background: var(--app-input-background-color);
                    border-radius: 4px 4px 0 0;
                    padding-top: 2px;
                    margin-top: 1px;
                };
                --paper-input-container-label-floating: {
                    font-size: var(--font-size-normal);
                    padding: 0 12px;
                    height: 11px;
                    line-height: 11px;
                    box-sizing: border-box;
                };
            }
        </style>
    </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
