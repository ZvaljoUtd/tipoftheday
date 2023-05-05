const txtDay = document.querySelector('#txtDay');
const btnOk = document.querySelector('#btnOk');
const tip = document.querySelector('#tip');

btnOk.addEventListener('click',()=>{
    switch(txtDay.value)
    {
        case 'pon': tip.innerHTML='Kolač'
        break;
        case 'uto': tip.innerHTML='Jastreb'
        break;
        case 'sri': tip.innerHTML='Olovka'
        break;
        case 'cet': tip.innerHTML='Mrkva'
        break;
        case 'pet': tip.innerHTML='Traktor'
        break;
        case 'sub': tip.innerHTML='Robot'
        break;
        case 'ned': tip.innerHTML='Gumica'
        break;
        default: document.write("Upisi neki dan!")
        }
    /*if(txtDay.value==='pon')
    tip.innerHTML='1'
    else if(txtDay.value==='uto')
    tip.innerHTML='2'
    else if(txtDay.value==='sri')
    tip.innerHTML='3'
    else if(txtDay.value==='cet')
    tip.innerHTML='4'
    else if(txtDay.value==='pet')
    tip.innerHTML='5'
    else if(txtDay.value==='sub')
    tip.innerHTML='6'
    else if(txtDay.value==='ned')
    tip.innerHTML='7'
    */
})