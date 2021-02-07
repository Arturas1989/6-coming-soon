import { Validator } from './Validator.js'

function form (selector) {
    const formDOM= document.querySelector(selector);
    const allInputsDOM = formDOM.querySelectorAll('input');
    const allTextareaDOM = formDOM.querySelectorAll('textarea');
    const allTextsDOM = [...allInputsDOM, ...allTextareaDOM];
    const submitDOM = formDOM.querySelector('.btn[type="submit"]');

    const validator = new Validator()

    submitDOM.addEventListener('click', event => {
        event.preventDefault();

        const errors = [];
        

       for (const input of allTextsDOM) {
            const text = input.value;
            const rule = input.dataset.validationRules;
            let result = null;

        switch (input.dataset.validationRules) {
            case 'name':
                result = validator.isValidName(text);
                if(result!==true) {
                    errors.push(result);
                }
                break;
            case 'email':
                result = validator.isValidEmail(text);
                if(result!==true) {
                    errors.push(result);
                }
                break;
            case 'text':
                result = validator.isValidText(text);
                if(result!==true) {
                    errors.push(result);
                }
                break;
    
                default:
                console.log('rasta neatpazinta validavimo taisykle', text);
                break;
        }
        
       }
       if(errors.length!==0){
        console.log('ERROR: yra nevalidziu reiksmiu...');
        console.log(errors);
        }else{
        console.log('SUCCESS: visi laukai validus!!!');
        }

    });

   
   
}

export {form}