

document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector('.btn');
    const btnTit = document.getElementById('btntit');
    const exchangeSelect = document.querySelector('.exchange-lang');
    const exchange = document.querySelector('.exchange');

    const moneyBox = document.querySelector('.money');
    let moneyTxt = document.querySelector('.money-txt');

    let country = "kor";
    let krw = 0;
    let usd = 0;
    let vnd = 0;
    
    

    console.log(moneyBox)
    
    
        btn.addEventListener('click', ()=>{
            exchangeSelect.classList.toggle('on')
            exchange.classList.toggle('on')
        })

        moneyBox.addEventListener('input', function(e){
        

            if(country === 'kor'){
                krw = Number(e.target.value);
                usd = Math.round((krw / 1300) * 100) / 100;
                vnd = krw * 18.02;
                moneyTxt.firstElementChild.innerText = krw;
            } else if(country === 'usa'){
                usd = Number(e.target.value);
                krw = usd * 1300;
                vnd = usd * 23500;
                moneyTxt.firstElementChild.innerText = usd;
            } else if(country === 'vit'){
                vnd = Number(e.target.value);
                krw = Math.round((vnd / 18) * 100) / 100;
                usd = Math.round((vnd / 23500) * 100) / 100;
                moneyTxt.firstElementChild.innerText = vnd;
            }
    
            console.log(krw, vnd, usd)
        })

        exchangeSelect.addEventListener('click', function(e){
            btn.firstElementChild.classList.remove(btn.firstElementChild.classList);
            btn.firstElementChild.classList.add(e.target.dataset.seq);
            btnTit.innerText = e.target.dataset.seq.toUpperCase();
    
            if(e.target.dataset.seq === "krw"){
                country = "kor";
                moneyTxt.innerHTML = `<span></span>원`;
                moneyTxt.firstElementChild.innerText = krw;
            } else if(e.target.dataset.seq === "usd"){
                country = "usa";
                moneyTxt.innerHTML = `<span></span>달러`;
                moneyTxt.firstElementChild.innerText = usd;
            } else if(e.target.dataset.seq === "vnd"){
                country = 'vit';
                moneyTxt.innerHTML = `<span></span>동`;
                moneyTxt.firstElementChild.innerText = vnd;
            }
    
            exchangeSelect.classList.remove('on')
            exchange.classList.remove('on')
        });
});