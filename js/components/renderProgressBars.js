function renderProgressBars (selector, data) {

    
    // validation

    // logic
    const DOM=document.querySelector(selector) 
    let HTML=''
    for(let i=0; i<data.length; i++) {
        const item = data[i]
        HTML+= `<div class="progress-bar">
                <div class="top">
                    <div class="label">${item.label}</div>
                    <div class="value">${item.value}%</div>
                </div>
                <div class="bottom">
                    <div class="progress" style="width: ${item.value}%"></div>
                </div>
                </div>`
    }
    // post logic validation 

    // return result
    DOM.insertAdjacentHTML('beforeend',HTML)
}

export {renderProgressBars}