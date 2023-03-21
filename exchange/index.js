

document.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelectorAll('.btn');
    const btnTit = document.querySelectorAll('.btntit');
    const exchangeSelect = document.querySelectorAll('.exchange-lang');
    const exchange = document.querySelectorAll('.exchange');

    const moneyBox = document.querySelectorAll('.money');
    let moneyTxt = document.querySelectorAll('.money-txt');

    let country = ["kor", "kor"];
    let krw = 0;
    let usd = 0;
    let vnd = 0;
    
    function exchangeMoney(i){
        if(i === 0){
            if(country[i+1] === 'kor'){
                moneyTxt[i+1].firstElementChild.innerText = krw;
            } else if(country[i+1] === 'usa'){
                moneyTxt[i+1].firstElementChild.innerText = usd;
            } else if(country[i+1] === 'vit'){
                moneyTxt[i+1].firstElementChild.innerText = vnd;
            }
        } else if(i === 1){
            if(country[i-1] === 'kor'){
                moneyTxt[i-1].firstElementChild.innerText = krw;
            } else if(country[i-1] === 'usa'){
                moneyTxt[i+1].firstElementChild.innerText = usd;
            } else if(country[i-1] === 'vit'){
                moneyTxt[i-1].firstElementChild.innerText = vnd;
            }
        }
    }

    // console.log(moneyBox)
    
    for(let i=0;i<exchange.length;i++){
        btn[i].addEventListener('click', ()=>{
            exchangeSelect[i].classList.toggle('on')
            exchange[i].classList.toggle('on')
        })

        moneyBox[i].addEventListener('input', function(e){
        

            if(country[i] === 'kor'){
                krw = Number(e.target.value);
                usd = Math.round((krw / 1300) * 100) / 100;
                vnd = krw * 18.02;
                moneyTxt[i].firstElementChild.innerText = krw;
                exchangeMoney(i)
                
            } else if(country[i] === 'usa'){
                usd = Number(e.target.value);
                krw = usd * 1300;
                vnd = usd * 23500;
                moneyTxt[i].firstElementChild.innerText = usd;
                exchangeMoney(i)
            } else if(country[i] === 'vit'){
                vnd = Number(e.target.value);
                krw = Math.round((vnd / 18) * 100) / 100;
                usd = Math.round((vnd / 23500) * 100) / 100;
                moneyTxt[i].firstElementChild.innerText = vnd;
                exchangeMoney(i)
            }
    
            console.log(krw, vnd, usd)
        })

        exchangeSelect[i].addEventListener('click', function(e){
            btn[i].firstElementChild.classList.remove(btn[i].firstElementChild.classList);
            btn[i].firstElementChild.classList.add(e.target.dataset.seq);
            
    
            if(e.target.dataset.seq === "krw"){
                country[i] = "kor";
                moneyTxt[i].innerHTML = `<span></span>원`;
                moneyTxt[i].firstElementChild.innerText = krw;
                moneyBox[i].value = krw;
            } else if(e.target.dataset.seq === "usd"){
                country[i] = "usa";
                moneyTxt[i].innerHTML = `<span></span>달러`;
                moneyTxt[i].firstElementChild.innerText = usd;
                moneyBox[i].value = usd;
            } else if(e.target.dataset.seq === "vnd"){
                country[i] = 'vit';
                moneyTxt[i].innerHTML = `<span></span>동`;
                moneyTxt[i].firstElementChild.innerText = vnd;
                moneyBox[i].value = vnd;
            }
    
            exchangeSelect[i].classList.remove('on')
            exchange[i].classList.remove('on')
        });

        exchange[i].addEventListener('click', function(e){
            // console.log(btnTit, btnTit[i], btnTit[i+1])
            console.log(btnTit[i])
            if(e.target.dataset.seq === 'krw'){
                btnTit[i].innerText = e.target.dataset.seq.toUpperCase();
            } else if(e.target.dataset.seq === 'usd'){
                btnTit[i].innerText = e.target.dataset.seq.toUpperCase();
                console.log(e.target)
            } else if(e.target.dataset.seq === 'vnd'){
                btnTit[i].innerText = e.target.dataset.seq.toUpperCase();
                console.log(e.target)
            }
        })
    }
});