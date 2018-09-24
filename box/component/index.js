'use strict';

(function() {
    class DRate extends HTMLElement {
        constructor () {
            super();

            const wrapper = document.createElement('div');

            wrapper.innerHTML = `
                <style>
                    .d-rate {
                        margin: 10px;
                    }
                    .d-rate-icon {

                    }
                    .d-rate-icon i {
                        cursor: pointer;
                    }
                </style>
                <div class="d-rate">
                    ${
                        this.rateDate.map(item => `
                            <span class="d-rate-icon js-rate-icon"><i>❤️</i></span>
                        `).join('')
                    }
                </div>
            `;

            const shadow = this.attachShadow({mode: 'open'});
            shadow.appendChild(wrapper);
        }

        get max () {
            return this.getAttribute('max') || 5;
        }

        get texts () {
            return this.getAttribute('texts') || [];
        }

        get rateDate () {
            let result = [];
            for( let i = 0; i < this.max; i ++) {
                result.push({
                    key: i,
                    text: this.texts[i] || ''
                }); 
            }
            return result;
        }

        connectedCallback () {
            this.bindEvents();
        }

        bindEvents () {
            let icons = [...this.shadowRoot.querySelectorAll('.js-rate-icon')];
            icons.forEach((item, index) => {
                item.addEventListener('click', this.onClickIcon(index), false);
            });
        }

        onClickIcon (index) {
            console.log(index);
        }
    }

    customElements.define('d-rate', DRate);
})();