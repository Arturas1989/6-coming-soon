class Toastr {
    constructor() {
        this.DOM = null;
        this.pDOM = null;
        this.closeDOM = null;

        this.init();
    }

    init() {
        this.render();
        this.addEvents();
    }

    render() {
        const HTML = `<div class="toastr" data-type="info">
                        <i class="fa fa-check"></i>
                        <i class="fa fa-shield"></i>
                        <i class="fa fa-exclamation-triangle"></i>
                        <i class="fa fa-exclamation-circle"></i>
                        <p>Message to display...</p>
                        <i class="fa fa-close"></i>
                    </div>`;
        document.querySelector('body').insertAdjacentHTML('beforeend', HTML);
        this.DOM = document.querySelector('body').querySelector('.toastr');
        this.pDOM = this.DOM.querySelector('p');
        this.closeDOM = this.DOM.querySelector('.fa-close');
    }

    show(type, message = 'Informuojame apie įvykį!') {
        const availableTypes = ['success', 'error', 'warning', 'info'];
        type = availableTypes.includes(type) ? type : 'info';

        let msgText = '';
        if (Array.isArray(message)) {
            msgText = message.join('<br>');
        } else {
            msgText = message;
        }

        this.DOM.dataset.type = type;
        this.pDOM.innerHTML = msgText;
        this.DOM.classList.add('show');
    }

    hide() {
        this.DOM.classList.remove('show');
    }

    addEvents() {
        this.closeDOM.addEventListener('click', () => {
            this.hide();
        });
    }
}

export { Toastr };
