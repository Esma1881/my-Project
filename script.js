const tuslarSayi = document.querySelectorAll('.col.number');
const tuslarOperator = document.querySelectorAll('.col.operator');
const tuslarControl = document.querySelectorAll('.col.control');
const ekran = document.querySelector('#islemler');

tuslarSayi.forEach(tus=>{
    tus.addEventListener('click',()=>{
        ekran.value+=tus.textContent;
    })
})

tuslarOperator.forEach(tus=>{
    tus.addEventListener('click',()=>{
        let text = tus.textContent;
        let sayi = parseFloat(ekran.value);

        if (text === '%') {
            ekran.value = (sayi / 100).toString();
        } 
        else if (text === 'x⁻¹') {
            ekran.value = (!isNaN(sayi) && sayi !== 0) ? (1 / sayi).toString() : 'Hata';
        }
        else if (text === 'x²') {
            ekran.value = (!isNaN(sayi)) ? (sayi ** 2).toString() : 'Hata';
        }
        else if (text === '+/-') {
            let sayi = parseFloat(ekran.value);
            if (!isNaN(sayi)) {
            ekran.value = (sayi * -1).toString();
            }
        }
        else if (text === '√') {
            ekran.value = (!isNaN(sayi) && sayi >= 0) ? Math.sqrt(sayi).toString() : 'Hata';
        }
        else {
            ekran.value += text;
        }
        
    })
})

tuslarControl.forEach(tus=>{
    tus.addEventListener('click',()=>{
        const text=tus.textContent;
        if(text==='C'){
            ekran.value='';
        }
        else if(text==='CE'){
            ekran.value = ekran.value.replace(/(\d+|\.)$/, '');
        }
        else if(text==='⌫'){
            ekran.value = ekran.value.slice(0, -1);
        }
         if(text.trim() === '='){
            try{
                ekran.value=hesapla(ekran.value);
            }
            catch{
                ekran.value='Hata';
            }
        }
       
    })
})

function hesapla(ifade){
    try{
        if (!/^[0-9+\-*/.%() ]+$/.test(ifade)) {
            return "Hata";
        }
        const sonuc = Function("return " + ifade)();
        if (isNaN(sonuc) || !isFinite(sonuc)) return "Hata";
        return sonuc;
    }
    catch {
        return "Hata";
    }
    

}

