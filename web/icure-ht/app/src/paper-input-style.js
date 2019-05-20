const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="paper-input-style">
    <template>
        <style is="custom-style">
            paper-input, paper-input-container {
                --paper-input-container-focus-color: var(--app-secondary-color) !important;
                --paper-input-container: {
                    padding: 0;
                    height: 40px;
                    width: 100%;
                    box-sizing: border-box;
                };

                --paper-input-container-input: {
                    height: 22px;
                    font-size: var(--font-size-normal);
                    line-height: var(--font-size-normal);
                    padding: 0 8px;
                    box-sizing: content-box;
                    background: var(--app-input-background-color);
                    border-radius: 4px 4px 0 0;
                };

                --paper-input-container-label-floating: {
                    font-size: var(--font-size-normal);
                    padding: 0 12px;
                    height: 11px;
                    line-height: 11px;
                    box-sizing: border-box;
                    overflow: visible;
                };
            }
        </style>
    </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
