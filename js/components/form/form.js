import { Validator } from './Validator.js';

function form(selector, toastr) {
    const formDOM = document.querySelector(selector);
    const allInputsDOM = formDOM.querySelectorAll('input');
    const allTextareaDOM = formDOM.querySelectorAll('textarea');
    const allTextsDOM = [...allInputsDOM, ...allTextareaDOM];
    const submitDOM = formDOM.querySelector('.btn[type="submit"]');

    const validator = new Validator();

    submitDOM.addEventListener('click', (event) => {
        event.preventDefault();

        const errors = [];
        for (const input of allTextsDOM) {
            const text = input.value;
            const rule = input.dataset.validationRule;

            const ruleName = rule[0].toUpperCase() + rule.slice(1);
            const result = validator['isValid' + ruleName](text);
            if (result !== true) {
                errors.push(result);
            }

            // const ruleMethods = {
            //     name: 'isValidName',
            //     email: 'isValidEmail',
            //     text: 'isValidText',
            // }

            // const ruleName = ruleMethods[rule];
            // const result = validator[ruleName](text);
            // if (result !== true) {
            //     errors.push(result);
            // }
        }

        if (errors.length) {
            toastr.show('error', errors);
        } else {
            toastr.show('success', 'Informacija buvo išsiųsta!');
        }
    });
}

export { form };
