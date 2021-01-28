import {formatNumber} from './formatNumbers.js'



function renderProgressBars (selector, data) {
    // validation
    if (typeof selector!=='string' ||
        selector==='') {
        console.error('ERROR: netinkamo formato selector parametras.');
        return false;
    }
    if (!Array.isArray(data)||
        data.length===0) {
        console.error('ERROR: netinkamo formato duomenu parametras.');
        return false;
    }

    // logic
    const DOM=document.querySelector(selector);
    if(!DOM){
        console.error('ERROR: pagal pateikta selektoriu elementas nerastas');
        return false;
    } 
    let HTML=''
    
    for(let i=0; i<data.length; i++) {
        const item = data[i]
        const formatedValue = formatNumber(item.value, 0)
        // objekto validacija
        if(typeof item !== 'object'||
            Array.isArray(item)||
            !item.label ||
            typeof item.label!=='string'||
            !item.value||
            typeof item.value!=='number'||
            item.value<0||
            !isFinite(item.value)||
            item.value>100 ||
            formatedValue === false) {
            continue;
        }

        HTML+= `<div class="progress-bar">
                <div class="top">
                    <div class="label">${item.label}</div>
                    <div class="value">${formatedValue}%</div>
                </div>
                <div class="bottom">
                    <div class="progress" style="width: ${item.value}%">
                        <div class="loading"></div>
                    </div>
                </div>
                </div>`
    }
    // post logic validation 
    if (HTML === '') {
        console.error('ERROR: duomenyse nera teisingu objektu, todel nesusigeneravo HTML');
        return false
    }
    // return result
    
    DOM.insertAdjacentHTML('beforeend',HTML)
}


export {renderProgressBars}