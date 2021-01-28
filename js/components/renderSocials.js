function renderSocials (selector, data) {
    //  validation
    const length = data.length
    isValidInputData (selector, data)
    
    
    
    
    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return console.error('ERROR: pagal pateikta selectoriu nepavyko rasti norimo elemento')
    }
    let HTML = '';

    for (let i=0; i<length;i++) {
        const item = data [i]

        if(!isValidItem (item)){
            console.warn('WARNING: rastas netinkamo formato irasas', item)
            continue;
        }

        HTML += `<a href="${item.href}" target="_blank" class="fa fa-${item.icon}"></a>`
        
    }

    // post logic validation
    if (HTML === '') {
        return console.error('ERROR: duomenu sarase nerasta nei vieno normalaus objekto')
    }


    // return result
    DOM.innerHTML = HTML;

    return;
}

function isValidItem (item) {
    if(typeof item !== 'object'||
    Array.isArray(item) ||
    !item.href ||
    typeof item.href !== 'string'||
    !item.icon ||
    typeof item.icon !== 'string') {
        return false
    } else {
        return true
    }    
}
function isValidInputData (selector, data) {
    if(typeof selector !== 'string') {
        return console.error('ERROR: selector turi buti string tipo')
    }
    if(typeof selector === '') {
        return console.error('ERROR: selector negali buti tuscias tekstas')
    }
    if (!Array.isArray(data)) {
        return console.error('ERROR: duomenys turi buti array tipo')
    }
    if (data.length === 0) {
        return console.error('ERROR: duomenu sarase turi buti bent vienas objektas')
    }
}
export { renderSocials }