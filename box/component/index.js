'use strict';

(function() {
    class DRate extends HTMLElement {
        constructor () {
            super();

            const wrapper = document.createElement('div');

            wrapper.innerHTML = `
                <style>
                    .d-rate {
                        display: inline-block;
                        margin: 10px;
                        font-size: 32px;
                        cursor: pointer;
                        user-select: none;
                    }
                    .d-rate-icon {
                        display: inline-block;
                        font-style: normal;
                        color: #ccc;
                        transition: all ease .1s;
                    }
                    .d-rate-icon.active,
                    .d-rate-icon:hover {
                        color: ${this.color};
                    }
                    .d-rate-icon:hover{
                        transform: scale(1.2);
                    }
                    .d-rate-icon:active {
                        transform: scale(1.3);
                    }
                    .d-rate-icon.disabled {
                        pointer-events: none;
                    }
                    .d-rate-text {
                        font-size: .75em;
                    }
                </style>
                <div class="d-rate js-rate">
                    ${this.getTemplate}
                </div>
            `;

            const shadow = this.attachShadow({mode: 'open'});
            shadow.appendChild(wrapper);

            this.wrapper = this.shadowRoot.querySelector('.js-rate');
            this.text = this.shadowRoot.querySelector('.js-text');
            this.stars = [...this.wrapper.querySelectorAll('.js-rate-icon')];
            this.index = -1;
            this.before = -1;
        }

        get max () {
            return this.getAttribute('max') || 5;
        }

        get disabled () {
            return this.hasAttribute('disabled');
        }

        get texts () {
            let texts = this.getAttribute('texts') || '';
            if(!texts) {
                return [];
            }
            if(!(texts.startsWith('[') && texts.endsWith(']'))) {
                console.error('texts必须是数组');
                return [];
            }
            return eval(texts.replace(/，/ig,','));
        }

        get showText () {
            return this.getAttribute('show-text') == 'false' ? false: true;
        }

        get textStr () {
            return this.getAttribute('textStr') || '';
        }

        get value () {
            return this.getAttribute('value');
        }

        get color () {
            return this.getAttribute('color') || '#f7ba2a';
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

        get onchange () {
            return this.getAttribute('onchange');
        }

        get getTemplate () {
            if(this.disabled) {
                return `
                    ${
                        this.rateDate.map((item, index) => `
                            <span class="d-rate-icon js-rate-icon disabled ${index <= this.value ? 'active': ''}">★</span>
                        `).join('')
                    }
                    ${
                        this.showText ? `<span class="d-rate-text">${this.textStr}</span>` : ''
                    }
                `;
            } else {
                return `
                    ${
                        this.rateDate.map(item => `
                            <span class="d-rate-icon js-rate-icon">★</span>
                        `).join('')
                    }
                    ${
                        this.showText ? `<span class="d-rate-text js-text">${this.textStr}</span>` : ''
                    }
                `;
            }
        }

        connectedCallback () { 
            if(this.value !== null) {
                this.before = this.value;
                this._renderStars(this.value);
            }
            !this.disabled && this._bindEvent();
        }

        _bindEvent () {
            this.wrapper.addEventListener('mouseover', e => {
                this._onMouseOverWrapper(e);
            }, false);

            this.wrapper.addEventListener('click', () => {
                this._onClickWrapper();
            }, false);

            this.wrapper.addEventListener('mouseout', () => {
                this._onMouseOutWrapper();
            }, false);
        }

        _onClickWrapper () {
            this.before = this.index;
            this._renderStars(this.before);

            //回调参数
            if(!!this.onchange) {
                let callbackVal = {
                    index: this.index,
                    text: this.texts[this.index] || ''
                };
                eval(this.onchange + '(callbackVal)');
            }
        }

        _onMouseOverWrapper (e) {
            let target = e.target;
            if([...target.classList].indexOf('js-rate-icon') == -1) { return; }

            this.index = this.stars.indexOf(target);

            this._renderStars(this.index);
        }

        _onMouseOutWrapper () {
            this.index = this.before;
            this._renderStars(this.index);
        }

        _renderStars (index) {
            let len = this.stars.length;
            for(var i = 0; i <= index; i ++) {
                this.stars[i].classList.add('active');
            }

            for(var j = index + 1; j <= len - 1; j ++) {
                this.stars[j].classList.remove('active');
            }

            this._renderText(index);
        }

        _renderText (index) {
            if(this.text) {
                this.text.textContent = this.texts[index] || '';
            }
        }
    }

    customElements.define('d-rate', DRate);
})();