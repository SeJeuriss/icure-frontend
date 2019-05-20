const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="dropdown-style">
    <template>
        <style is="custom-style">
            paper-dropdown-menu-light {
                --paper-dropdown-menu-focus-color: var(--app-secondary-color);
                --paper-dropdown-menu-input: {
                    font-size: var(--font-size-normal);
                    line-height: 22px;
                    padding: 0 8px;
                    background: var(--app-input-background-color);
                    border-radius: 4px 4px 0 0;
                    height: 22px;
                    margin-top: -8px;
                };
                --paper-dropdown-menu-button: {
                    height: 40px;
                };
                --paper-dropdown-menu-icon: {
                    margin-bottom: 2px;
                    color: var(--app-text-color);
                    height: 18px;
                    width: 18px;
                }
                --paper-listbox: {
                    padding: 0;
                };

                --paper-item: {
                    height: 28px;
                    font-size: var(--font-size-normal);
                    padding: 0 12px;
                    min-height: 28px;
                };
            }

            paper-dropdown-menu {
                --paper-dropdown-menu-icon: {
                    height: 18px;
                    width: 18px;
                    background: var(--app-input-background-color);
                }
            }
        </style>
    </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
