let money = {
    usd : {
        usd : 1,
        krw : 1305.82,
        vnd : 23525.00,
        unit : '달러'
    },
    krw : {
        usd : 0.00077,
        krw : 1,
        vnd : 18.02,
        unit : '원'
    },
    vnd : {
        usd : 0.000043,
        krw : 0.056,
        vnd : 1,
        unit : '동'
    }
}

let fromCountry = 'krw';
let toCountry = 'krw';
let presentMoney = 0;

const exchange = document.querySelectorAll('.exchange-lang');
const moneyTxt = document.querySelectorAll('.money-txt');

document.getElementById('from-btn').addEventListener('click', function(e){
    exchange[0].classList.toggle('on');
    this.parentElement.parentElement.classList.toggle('on');
})

document.getElementById('to-btn').addEventListener('click', function(e){
    exchange[1].classList.toggle('on');
    this.parentElement.parentElement.classList.toggle('on');
})

exchange[0].addEventListener('click', function(e){
    fromCountry = e.target.dataset.seq;
    document.getElementById('from-btn').firstElementChild.classList.value = "";
    document.getElementById('from-btn').firstElementChild.classList.add(e.target.dataset.seq);
    document.getElementById('from-btn').lastElementChild.innerText = e.target.dataset.seq.toUpperCase();
    console.log(moneyTxt[0].lastChild, fromCountry,  money[fromCountry].unit);
    moneyTxt[0].lastChild.textContent = money[fromCountry].unit;

    exchange[0].classList.remove('on');
    exchange[0].parentElement.parentElement.classList.remove('on');
    // console.log(present[0])
    moneyTxt[0].firstElementChild.textContent = money[toCountry][fromCountry] * presentMoney;
    document.getElementById('from-money').value = money[toCountry][fromCountry] * presentMoney;
})

exchange[1].addEventListener('click', function(e){
    toCountry = e.target.dataset.seq;
    document.getElementById('to-btn').firstElementChild.classList.value = "";
    document.getElementById('to-btn').firstElementChild.classList.add(e.target.dataset.seq);
    document.getElementById('to-btn').lastElementChild.innerText = e.target.dataset.seq.toUpperCase();
    console.log(moneyTxt[1].lastChild, fromCountry,  money[toCountry].unit);
    moneyTxt[1].lastChild.textContent = money[toCountry].unit;

    exchange[1].classList.remove('on');
    exchange[1].parentElement.parentElement.classList.remove('on')
    // document.getElementById('to-money').value = present[1]
    moneyTxt[1].firstElementChild.textContent = money[fromCountry][toCountry] * presentMoney;
    document.getElementById('to-money').value = money[fromCountry][toCountry] * presentMoney;
})

document.getElementById('from-money').addEventListener('input', function(e){
    moneyTxt[0].firstElementChild.textContent = money[fromCountry][fromCountry] * e.target.value;
    moneyTxt[1].firstElementChild.textContent = money[fromCountry][toCountry] * e.target.value;
    document.getElementById('to-money').value = money[fromCountry][toCountry] * e.target.value;
    presentMoney = e.target.value;
})

document.getElementById('to-money').addEventListener('input', function(e){
    console.log(moneyTxt[1])
    moneyTxt[1].firstElementChild.textContent = money[toCountry][toCountry] * e.target.value;
    moneyTxt[0].firstElementChild.textContent = money[toCountry][fromCountry] * e.target.value;
    document.getElementById('from-money').value = money[toCountry][fromCountry] * e.target.value;
    presentMoney = e.target.value;
})